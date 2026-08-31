#!/usr/bin/env node
// 依英文导航结构，为每个语言生成只包含「该语言已翻译页面」的导航。
// 组标题从 GROUP_TITLES 取；缺译文的页面自动跳过，缺整组则整组不出现。
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const LANGS = ['zh-Hant', 'ja', 'ko', 'vi']

const GROUP_TITLES = {
  'Getting started':        { 'zh-Hant': '快速開始',   ja: 'はじめに',           ko: '시작하기',        vi: 'Bắt đầu' },
  'Workspaces':             { 'zh-Hant': '工作區',     ja: 'ワークスペース',     ko: '워크스페이스',    vi: 'Không gian làm việc' },
  'Idea Studio':            { 'zh-Hant': '創意工具',   ja: 'アイデアツール',     ko: '아이디어 도구',   vi: 'Công cụ ý tưởng' },
  'Idea Image Generation':  { 'zh-Hant': '創意工具圖片生成', ja: 'アイデア画像生成', ko: '아이디어 이미지 생성', vi: 'Tạo ảnh từ ý tưởng' },
  'Infinite Canvas':        { 'zh-Hant': '無限畫布',   ja: '無限キャンバス',     ko: '무한 캔버스',     vi: 'Canvas vô hạn' },
  'Digital Host':           { 'zh-Hant': '數字主持人', ja: 'デジタル司会者',     ko: '디지털 진행자',   vi: 'Người dẫn chương trình số' },
  'Organizations':          { 'zh-Hant': '組織',       ja: '組織',               ko: '조직',            vi: 'Tổ chức' },
  'Billing and credits':    { 'zh-Hant': '積分與帳務', ja: '料金とクレジット',   ko: '요금과 크레딧',   vi: 'Thanh toán và credit' },
  'Reference':              { 'zh-Hant': '參考',       ja: 'リファレンス',       ko: '레퍼런스',        vi: 'Tham khảo' },
}

const docsPath = join(ROOT, 'docs.json')
const docs = JSON.parse(readFileSync(docsPath, 'utf8'))
const nav = docs.navigation
const enLang = nav.languages ? nav.languages.find((l) => l.language === 'en') : { groups: nav.groups }
const enGroups = enLang.groups

const languages = [{ language: 'en', default: true, groups: enGroups }]

for (const lang of LANGS) {
  const groups = []
  for (const g of enGroups) {
    const pages = g.pages.filter((p) => existsSync(join(ROOT, `${lang}/${p}.mdx`)))
    if (!pages.length) continue
    const title = GROUP_TITLES[g.group]?.[lang]
    if (!title) throw new Error(`missing ${lang} title for group "${g.group}"`)
    groups.push({ group: title, icon: g.icon, pages: pages.map((p) => `${lang}/${p}`) })
  }
  if (groups.length) languages.push({ language: lang, groups })
}

docs.navigation = { languages }
writeFileSync(docsPath, JSON.stringify(docs, null, 2) + '\n')

for (const l of languages) {
  console.log(`${l.language.padEnd(8)} ${l.groups.length} groups, ${l.groups.reduce((n, g) => n + g.pages.length, 0)} pages`)
}
