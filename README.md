# WJI documentation

User guide for [WJI](https://app.wji.ai), the creative workspace for AI-generated images, video, and
storyboards. Built on [Mintlify](https://mintlify.com) and deployed automatically from `main`.

## Structure

| Path | Contents |
|---|---|
| `docs.json` | Site configuration and navigation for every language |
| `*.mdx` at root | **English source** — the language all translations derive from |
| `zh-Hant/` `ja/` `ko/` `vi/` | Translations, mirroring the English structure exactly |
| `images/` | Screenshots. `_placeholder.png` stands in until a real capture replaces it |
| `images/SHOTS.md` | Generated capture worklist — what each screenshot must show |
| `AGENTS.md` | Terminology, style rules, and content boundaries. **Read before editing.** |

Slugs stay in English in every language so that the language switcher lands on the matching page.

## Working locally

```bash
npm i -g mint
mint dev            # preview at http://localhost:3000
npm run docs:check  # validate structure, links, images, and language parity
```

## Adding or changing a page

1. Write the English page at the repo root.
2. Add it to `docs.json` under the right group, for **every** language.
3. Mirror the file into `zh-Hant/`, `ja/`, `ko/`, `vi/` with identical MDX structure.
4. Run `npm run docs:check` before opening a pull request.

Translations must match the English source component for component. Only prose, frontmatter `title`
and `description`, and image `caption` / `alt` are translated — never URLs, file names, keyboard
shortcuts, code, or slugs.

## Screenshots

Every image slot already points at its **final path** — `images/<page>/<name>.png` — and those files
exist as copies of `images/_placeholder.png`. Swapping in a real screenshot means overwriting one
file. **No MDX is edited, in any language.**

Each slot carries a `{/* SHOT ... */}` comment in the English source describing exactly what to
capture. `npm run docs:check` regenerates `images/SHOTS.md`, the capture worklist, and reports a shot
as still pending while its file is byte-identical to the placeholder.

To add more slots, define them in `scripts/image-slots.mjs` and run `npm run docs:images`. The script
inserts the same slot into all five languages at the same position, so cross-language parity cannot
drift.
