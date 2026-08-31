#!/usr/bin/env node
// 数据驱动地把图片位插入到 5 个语言的同一位置，保证跨语言路径与数量一致。
// 幂等：某页已包含该图片路径就跳过。SHOT 拍摄标注只写进英文源稿。
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SLOTS } from './image-slots.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const LANGS = ['zh-Hant', 'ja', 'ko', 'vi']

function buildBlock({ file, caption, alt, shot }, lang) {
  const cap = caption[lang] ?? caption.en
  const a = alt[lang] ?? alt.en
  const frame = [
    '',
    `<Frame caption="${cap}">`,
    `  <img src="/images/${file}.png" alt="${a}" />`,
    '</Frame>',
  ]
  if (lang !== 'en') return frame
  const spec = shot.trim().split('\n').map((l) => '    ' + l.trim())
  return [...frame, `{/* SHOT ${file}`, ...spec, '*/}']
}

/** 定位插入点：'top' = frontmatter 后的首段之后；数字 N = 第 N 个 '## ' 标题之后。 */
function findInsertLine(lines, after) {
  let i = 0
  if (lines[0] === '---') {
    i = 1
    while (i < lines.length && lines[i] !== '---') i++
    i++
  }
  if (after === 'top') {
    while (i < lines.length && lines[i].trim() === '') i++
    while (i < lines.length && lines[i].trim() !== '') i++
    return i
  }
  let seen = -1
  for (; i < lines.length; i++) {
    if (/^## /.test(lines[i])) {
      seen++
      if (seen === after) return i + 1
    }
  }
  throw new Error(`heading #${after} not found`)
}

let inserted = 0
let skipped = 0
const missing = []

for (const slot of SLOTS) {
  for (const lang of ['en', ...LANGS]) {
    const rel = lang === 'en' ? `${slot.page}.mdx` : `${lang}/${slot.page}.mdx`
    const abs = join(ROOT, rel)
    if (!existsSync(abs)) { missing.push(rel); continue }
    const text = readFileSync(abs, 'utf8')
    if (text.includes(`/images/${slot.file}.png`)) { skipped++; continue }
    const lines = text.split('\n')
    const at = findInsertLine(lines, slot.after)
    lines.splice(at, 0, ...buildBlock(slot, lang))
    writeFileSync(abs, lines.join('\n'))
    inserted++
  }
}

console.log(`slots defined: ${SLOTS.length}`)
console.log(`inserted: ${inserted}, already present: ${skipped}`)
if (missing.length) console.log(`MISSING FILES:\n  ${missing.join('\n  ')}`)
