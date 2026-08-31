# WJI documentation — project instructions

## About this project

- Documentation site for **WJI**, a creative workspace for AI-generated images, video, and storyboards.
- Built on [Mintlify](https://mintlify.com). Pages are MDX with YAML frontmatter; configuration lives in `docs.json`.
- Audience: **creators and team managers**. Not developers. No API reference, no internal architecture.
- Source language is **English** (repo root). Translations live in `zh-Hant/`, `ja/`, `ko/`, `vi/`.

## Terminology

All values below are taken from the product UI (`wji-frontend/lang/*.ts`). **Never invent a
translation.** If a term is missing here, look it up in the language files before writing it.

### App names

Only **WJI** stays in English everywhere. The four app names *are* localized in the product, so each
language must use its own label — do not leave them in English.

| English | zh-Hant | ja | ko | vi |
|---|---|---|---|---|
| Idea Studio | 創意工具 | アイデアツール | 아이디어 도구 | Công cụ ý tưởng |
| Idea Image Generation | 創意工具圖片生成 | アイデア画像生成 | 아이디어 이미지 생성 | Tạo ảnh từ ý tưởng |
| Infinite Canvas | 無限畫布 | 無限キャンバス | 무한 캔버스 | Canvas vô hạn |
| Digital Host | 數字主持人 | デジタル司会者 | 디지털 진행자 | Người dẫn chương trình số |

⚠️ Some English screens label Idea Studio as **Creative Tools**. The docs standardize on
**Idea Studio** and note the alias once, in the glossary.

### Concept terms

| English | zh-Hant | ja | ko | vi |
|---|---|---|---|---|
| workspace | 工作區 | ワークスペース | 워크스페이스 | Không gian làm việc |
| canvas | 畫布 | キャンバス | 캔버스 | Canvas |
| dataset | 數據集 | データセット | 데이터셋 | Dataset |
| asset library | 素材庫 | 素材ライブラリ | 에셋 라이브러리 | Thư viện tài nguyên |
| asset bundle | 素材包 | 素材パック | 소재 팩 | Gói tài nguyên |
| director bar | 導演欄 | ディレクターバー | 디렉터 바 | Thanh đạo diễn |
| storyboard | 分鏡 | ストーリーボード | 스토리보드 | Storyboard |
| credits | 積分 | クレジット | 크레딧 | Credit |
| reference image | 參考圖 | 参照画像 | 참조 이미지 | Hình tham chiếu |
| reference video | 參考影片 | 参照動画 | 참조 비디오 | Video tham chiếu |
| reference audio | 參考音頻 | 参照音声 | 참조 오디오 | Âm thanh tham chiếu |
| workspace apps | 工作區應用 | ワークスペースアプリ | 워크스페이스 앱 | Ứng dụng không gian làm việc |

### Node type names

| English | zh-Hant | ja | ko | vi |
|---|---|---|---|---|
| text | 文本 | テキスト | 텍스트 | Văn bản |
| image | 圖片 | 画像 | 이미지 | Hình ảnh |
| video | 視頻 | 動画 | 비디오 | Video |
| audio | 音頻 | 音声 | 오디오 | Âm thanh |
| dataset | 數據集 | データセット | 데이터셋 | Dataset |
| bundle | 素材包 | 素材パック | 소재 팩 | Gói tài nguyên |
| group | 分組 | グループ | 그룹 | Nhóm |
| table | 表格 | 表 | 표 | Bảng |
| title | 標題 | タイトル | 제목 | Tiêu đề |

Remaining node types (panorama, youtube, comment, tasklist, arrow) and any other term:
**look it up in `lang/*.ts` before use.**

⚠️ Korean is internally inconsistent — the product uses both `에셋` and `소재` for *asset*.
Follow the table above per term rather than normalizing.

## Style preferences

- Active voice, second person ("you").
- One idea per sentence.
- Sentence case for headings.
- Bold for UI elements: Click **Settings**.
- Code formatting for file names, commands, paths, keyboard keys, and code.
- Lead with what the reader wants to do, not with how the feature is built.

## Content boundaries

- **Do not document the platform admin console.** Anything under the admin area is out of scope.
- **Do not document apps that users cannot reach**: Files, Playscript, Batch, Storyboard, Writing, Image Creation.
- **Never describe a feature that does not exist.** WJI has no inpainting, outpainting, background
  removal, image variations, negative prompt field, cancel-generation button, workspace duplication,
  file-tree search, node locking, z-order controls, snap guides, canvas export to PNG/PDF/JSON,
  canvas fullscreen, multiplayer cursors, or public share links for results.
- Users **cannot** choose a workspace template — the app always applies the first one.

## Translation rules

- MDX structure must match the English source exactly: same components, same attributes
  (`icon`, `href`), same code blocks, same table columns, same number of `<Steps>`.
- Translate only prose, frontmatter `title` and `description`, and image `caption` / `alt`.
- Never translate URLs, file names, keyboard shortcuts, code, or slugs.
- `{/* SHOT ... */}` comments are capture instructions for screenshots. They exist **only in the
  English source** and are never copied into translations.

## Images

Every image slot points at `/images/_placeholder.png` until a real screenshot replaces it. Each slot
carries a `{/* SHOT ... */}` comment describing what to capture. Run `npm run docs:check` to
regenerate `images/SHOTS.md`, the capture worklist.
