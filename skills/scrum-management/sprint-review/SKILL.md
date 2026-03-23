---
name: sprint-review-pptx
description: >
  Creates a Sprint Review PowerPoint presentation (.pptx) in a consistent dark teal/navy
  design system — without requiring any template file. Use this skill whenever the user
  asks to create a sprint review, sprint presentation, スプリントレビュー, or any similar
  agile review slide deck. Also trigger when the user provides a task list (CSV, table,
  or plain text) and wants it turned into a presentation. The skill generates a fully
  formatted .pptx with cover, agenda, section dividers, content cards with ✓ 完了 badges,
  and a Q&A closing slide — matching the established team design.
---

# Sprint Review PPTX Skill

Generates a Sprint Review `.pptx` from scratch using **PptxGenJS** — no template needed.

## Design System (memorize this)

| Element | Value |
|---|---|
| Background dark | `0D1B2A` (cover, section dividers, Q&A) |
| Background light | `F8F9FA` (agenda, content slides) |
| Accent / teal | `0D9488` |
| Teal bright | `14B8A6` |
| Left stripe | `0D9488` solid, x=0, w=0.18", full height |
| Right panel | `0D9488` alpha 6%, x=7.5", w=2.5" |
| Slide size | 10" × 5.625" (LAYOUT_16x9) |
| Header bar | dark `0D1B2A`, x=0, y=0, w=10", h=0.7" |
| Font heading | Arial Bold |
| Font body | Calibri |

---

## Slide Types

### 1. Cover slide
- Full dark background `0D1B2A`
- Left teal stripe (x=0, y=0, w=0.18", h=5.625")
- Right teal panel (x=7.5", y=0, w=2.5", h=5.625", fill=`0D9488`, transparency=85)
- "SPRINT REVIEW" label: teal pill shape at top-left
- Main title: white, Arial Bold 38pt, x=0.6", y=1.3"
- Sprint number: teal `14B8A6`, Calibri 22pt, x=0.6", y=2.2"
- Thin teal divider line: y=2.65", w=4"
- Bullet list of topics: white, Calibri 13pt, x=0.6", y=2.9"

### 2. Agenda slide
- Light background `F8F9FA`
- Dark header bar with "アジェンダ / Agenda" in white Arial Bold 20pt
- 6-cell grid (2 columns × 3 rows), each cell:
  - White card with subtle border `E2E8F0`
  - Teal number badge (square, `0D9488`) left side, white number bold
  - Title bold dark `1E293B`, 14pt
  - Subtitle gray `64748B`, 12pt
- Grid starts at x=0.3", y=0.85", each card w=4.6", h=1.35", gap=0.1"

### 3. Section divider slide
- Full dark background `0D1B2A`
- Left teal stripe same as cover
- Large section number: teal `14B8A6`, Arial Bold 64pt, x=0.7", y=1.6"
- Section title Japanese: white, Arial Bold 28pt, x=2.2", y=1.7"
- Section title English: teal `14B8A6`, Calibri 14pt, x=2.2", y=2.4"

### 4. Content slide
- Light background `F8F9FA`
- Dark header bar, slide title in white Arial Bold 16pt, padded left
- For each task item (up to 3 per slide):
  - White card: x=0.3", w=9.4", h=1.3" (auto-stacked with 0.15" gap from y=0.85")
  - Left teal accent bar: w=0.06", h=card height, `0D9488`
  - Task title: dark `1E293B`, Arial Bold 13pt, x=0.55", y=card_y+0.18"
  - Description text: gray `475569`, Calibri 11pt, x=0.55", y=card_y+0.5", w=8.2"
  - "✓ 完了" badge: teal outline box, right side of card

### 5. Summary / Q&A slide
- Full dark background `0D1B2A`
- Left teal stripe
- Title "まとめ & Q&A" white Arial Bold 28pt, x=0.6", y=0.5"
- Teal divider line below title
- Checklist items: teal ✓ + white text, Calibri 14pt, starting y=1.4"
- CTA button at bottom: teal fill, white text "ご質問・ご意見をお待ちしております"

---

## Workflow

1. **Parse input** — extract: sprint number, domain sections, tasks per section
2. **Read** `references/slide-builder.js` for the full PptxGenJS code
3. **Scaffold script** by filling in content variables at top of template
4. **Run** with Node.js to generate the `.pptx`
5. **Copy** output to `/mnt/user-data/outputs/`
6. **Present** file to user

---

## Input Format

The skill accepts any of these input formats:

**CSV/Table** (most common):
```
No | Domain | Category | Screen | Content
1  | Dialog | 00_ユーザー管理 | ユーザー一覧 | パンクズメニュー、ボタン新UI反映
```

**Plain text list**:
```
Sprint 9
- Dialog: ユーザー管理 — 新UI反映
- Buyer: 発注管理 — 詳細画面更新
```

**Free-form conversation** — extract sections from context.

---

## Grouping Logic

Group tasks by **Domain → Category** to create slides:

1. One **section divider** per domain (Dialog, バイヤー, 共通, etc.)
2. One or more **content slides** per category within that domain
3. If a category has >3 tasks, split into multiple content slides
4. Agenda shows up to 6 groups (combine small categories if needed)

**Section numbering**: 01, 02, 03... sequentially across all domains.

---

## Read next

For the full PptxGenJS implementation template, read:
→ `references/slide-builder.js`

This file contains ready-to-run Node.js code. Fill in the `CONTENT` object at the top with parsed data, then execute.