#!/usr/bin/env node
// 校验 wji-doc 的结构完整性：导航引用、frontmatter、多语言对齐、站内链接、图片与拍摄标注。
// 同时生成 images/SHOTS.md 拍摄工作单。无外部依赖。
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const LANGS = ['zh-Hant', 'ja', 'ko', 'vi'] // 英文源稿在仓库根
const errors = []
const warnings = []
const err = (m) => errors.push(m)
const warn = (m) => warnings.push(m)

const read = (p) => readFileSync(join(ROOT, p), 'utf8')
const exists = (p) => existsSync(join(ROOT, p))

// ---------- frontmatter ----------
function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return null
  const out = {}
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^(\w[\w:-]*):\s*(.*)$/)
    if (mm) out[mm[1]] = mm[2].replace(/^["']|["']$/g, '')
  }
  return out
}

// ---------- 导航 ----------
const docs = JSON.parse(read('docs.json'))
function navPages(nav) {
  const out = []
  const walk = (node) => {
    if (typeof node === 'string') return out.push(node)
    if (Array.isArray(node)) return node.forEach(walk)
    if (node && typeof node === 'object') {
      if (node.page) walk(node.page)
      if (node.pages) walk(node.pages)
      if (node.groups) walk(node.groups)
      if (node.anchors) walk(node.anchors)
      if (node.tabs) walk(node.tabs)
      if (node.languages) walk(node.languages)
      if (node.versions) walk(node.versions)
    }
  }
  walk(nav)
  return out
}
const navSlugs = navPages(docs.navigation)
const langNavSlugs = new Set(navSlugs)
if (!navSlugs.length) err('docs.json: navigation 里没有任何页面')

for (const slug of navSlugs) {
  if (!exists(slug + '.mdx')) err(`docs.json 导航引用了不存在的页面: ${slug}.mdx`)
}

// ---------- 收集全部 mdx ----------
function walkDir(dir, acc = []) {
  for (const name of readdirSync(join(ROOT, dir === '.' ? '' : dir))) {
    if (name.startsWith('.') || name === 'node_modules' || name === 'scripts') continue
    const rel = dir === '.' ? name : `${dir}/${name}`
    if (statSync(join(ROOT, rel)).isDirectory()) walkDir(rel, acc)
    else if (name.endsWith('.mdx')) acc.push(rel)
  }
  return acc
}
const allMdx = walkDir('.')
const isLangPath = (p) => LANGS.some((l) => p === l || p.startsWith(l + '/'))
const enPages = allMdx.filter((p) => !isLangPath(p)).map((p) => p.replace(/\.mdx$/, ''))

// 孤儿页（存在但不在导航里）
for (const p of enPages) {
  if (!navSlugs.includes(p)) warn(`页面存在但不在导航中: ${p}.mdx`)
}

// ---------- 逐页校验 ----------
const shots = []          // { page, file, spec }
const imagesByPage = {}   // page -> [src]

for (const rel of allMdx) {
  const text = read(rel)
  const fm = frontmatter(text)
  const page = rel.replace(/\.mdx$/, '')
  if (!fm) { err(`${rel}: 缺少 frontmatter`); continue }
  if (!fm.title) err(`${rel}: frontmatter 缺少 title`)
  if (!fm.description) err(`${rel}: frontmatter 缺少 description`)

  // 图片
  const imgs = [...text.matchAll(/<img\b([^>]*)>/g)]
  const srcs = []
  for (const [, attrs] of imgs) {
    const src = attrs.match(/\bsrc=["']([^"']+)["']/)?.[1]
    const alt = attrs.match(/\balt=["']([^"']*)["']/)?.[1]
    if (!src) { err(`${rel}: <img> 缺少 src`); continue }
    srcs.push(src)
    if (!alt) err(`${rel}: <img src="${src}"> 缺少 alt`)
    const local = src.replace(/^\//, '')
    if (!/^https?:/.test(src) && !exists(local)) err(`${rel}: 图片文件不存在 ${src}`)
  }
  imagesByPage[page] = srcs

  // SHOT 标注（只在英文源稿要求）
  const shotBlocks = [...text.matchAll(/\{\/\*\s*SHOT\s+(\S+)([\s\S]*?)\*\/\}/g)]
  if (!isLangPath(rel)) {
    const shotNames = shotBlocks.map((m) => m[1])
    for (const src of srcs) {
      if (/^https?:/.test(src)) continue
      const name = src.replace(/^\/images\//, '').replace(/\.\w+$/, '')
      if (src.includes('_placeholder') ) {
        // 占位图必须有 SHOT 标注说明将来要拍什么
        if (!shotBlocks.length) err(`${rel}: 使用了占位图但没有 SHOT 标注`)
      } else if (!shotNames.includes(name)) {
        err(`${rel}: 图片 ${src} 没有对应的 SHOT 标注`)
      }
    }
    for (const [, name, spec] of shotBlocks) {
      shots.push({ page, file: name, spec: spec.trim(), pending: srcs.some((s) => s.includes('_placeholder')) })
    }
  } else if (shotBlocks.length) {
    err(`${rel}: 译文不应包含 SHOT 标注（只写在英文源稿）`)
  }

  // 站内链接
  for (const [, href] of text.matchAll(/\]\((\/[^)#\s]*)/g)) {
    const target = href.replace(/^\//, '')
    if (!target) continue
    if (target.startsWith('images/')) continue
    const stripped = LANGS.reduce((t, l) => (t.startsWith(l + '/') ? t.slice(l.length + 1) : t), target)
    if (!exists(target + '.mdx') && !exists(stripped + '.mdx') && !exists(target)) {
      err(`${rel}: 站内链接指向不存在的页面 ${href}`)
    }
  }
}

// ---------- 多语言对齐 ----------
for (const lang of LANGS) {
  if (!exists(lang)) { warn(`语言目录尚未创建: ${lang}/`); continue }
  const got = new Set(allMdx.filter((p) => p.startsWith(lang + '/')).map((p) => p.slice(lang.length + 1).replace(/\.mdx$/, '')))
  for (const p of enPages) {
    if (!got.has(p)) {
      // 译文只有被该语言的导航引用后才是必需的；逐组推进期间仅提示
      if (langNavSlugs.has(`${lang}/${p}`)) err(`${lang}/: 导航引用了缺失的译文 ${p}.mdx`)
      else warn(`${lang}/: 尚未翻译 ${p}.mdx`)
    }
    else {
      const a = imagesByPage[p] || []
      const b = imagesByPage[`${lang}/${p}`] || []
      if (a.length !== b.length) err(`${lang}/${p}.mdx: 图片数量与英文源稿不一致（${b.length} vs ${a.length}）`)
      else if (a.some((s, i) => s !== b[i])) err(`${lang}/${p}.mdx: 图片路径与英文源稿不一致`)
    }
  }
  for (const p of got) if (!enPages.includes(p)) err(`${lang}/${p}.mdx: 英文源稿中没有对应页面`)
}

// ---------- 生成拍摄工作单 ----------
shots.sort((a, b) => a.file.localeCompare(b.file))
const doneCount = shots.filter((s) => !s.pending).length
const lines = [
  '# Screenshot worklist',
  '',
  '> Generated by `npm run docs:check`. Do not edit by hand.',
  '',
  `**${doneCount} / ${shots.length} captured.**`,
  '',
]
let lastPage = null
for (const s of shots) {
  if (s.page !== lastPage) { lines.push(`## \`${s.page}\``, ''); lastPage = s.page }
  lines.push(`- [${s.pending ? ' ' : 'x'}] \`images/${s.file}.png\``)
  for (const l of s.spec.split(/\r?\n/)) if (l.trim()) lines.push(`      ${l.trim()}`)
  lines.push('')
}
writeFileSync(join(ROOT, 'images/SHOTS.md'), lines.join('\n'))

// ---------- 报告 ----------
console.log(`pages: ${enPages.length} english, ${allMdx.length} total`)
console.log(`nav:   ${navSlugs.length} entries`)
console.log(`shots: ${shots.length} slots, ${doneCount} captured`)
for (const w of warnings) console.log(`WARN  ${w}`)
for (const e of errors) console.log(`ERROR ${e}`)
console.log(errors.length ? `\n${errors.length} error(s)` : '\nOK')
process.exit(errors.length ? 1 : 0)
