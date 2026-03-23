/**
 * Sprint Review PPTX Builder
 * Fill in CONTENT below, then run: node slide-builder.js
 * Output: sprint_review_N.pptx in current directory
 */

// ─────────────────────────────────────────────
// FILL IN THIS SECTION WITH PARSED CONTENT
// ─────────────────────────────────────────────
const CONTENT = {
    sprintNumber: 9,                    // e.g. 9
    sprintLabel: "第9回 Sprint 9",      // displayed on cover
    coverTopics: [                      // bullet list on cover slide
        "Dialog / Buyer サイト新UI反映",
        "ユーザー管理・契約管理・サプライヤー管理",
        "バイヤー管理・商品カテゴリ・請求・取引管理",
        "発注管理・請求管理・仕入れ先管理・ドメイン設定",
    ],
    // Agenda: up to 6 items (label + subtitle)
    agenda: [
        { num: "01", title: "Dialog — ユーザー管理", sub: "新UI反映・ユーザー登録/編集" },
        { num: "02", title: "Dialog — 契約管理", sub: "契約一覧/詳細/作成/編集" },
        { num: "03", title: "Dialog — サプライヤー/バイヤー", sub: "招待フロー・商品カテゴリ管理" },
        { num: "04", title: "Dialog — 請求・取引管理", sub: "請求管理・取引管理新UI" },
        { num: "05", title: "バイヤー — ユーザー/会社", sub: "ユーザー管理・企業情報" },
        { num: "06", title: "バイヤー — 資材/発注/請求", sub: "資材カタログ・発注・請求管理" },
    ],
    // Sections: each becomes a divider + one or more content slides
    sections: [
        {
            num: "01",
            titleJa: "Dialog — ユーザー管理",
            titleEn: "User Management",
            slides: [
                {
                    header: "01  Dialog — ユーザー管理 実装内容",
                    items: [
                        {
                            title: "ユーザー一覧 — 新UI反映",
                            body: "パンクズメニュー、ボタン、テーブル、フィルタ新UI反映",
                        },
                        {
                            title: "ユーザー招待・編集・登録 — 新UI反映",
                            body: "パンクズメニュー、ボタン、Footer新UI反映。招待中ユーザーのロジック追加。画像アップロード、モーダル更新。メールアドレス・役割は無効処理適用、アカウント作成完了画面実装。",
                        },
                    ],
                },
            ],
        },
        {
            num: "02",
            titleJa: "Dialog — 契約管理",
            titleEn: "Contract Management",
            slides: [
                {
                    header: "02  Dialog — 契約管理 実装内容",
                    items: [
                        {
                            title: "契約一覧・詳細 — 新UI反映",
                            body: "パンクズメニュー、ボタン、テーブル、フィルタ新UI反映。契約詳細に削除機能・契約番号を追加。",
                        },
                        {
                            title: "新規契約作成・契約編集 — 新UI反映",
                            body: "パンクズメニュー、ボタン、テーブル新UI反映。契約期間の新規UI反映。サプライヤー・バイヤー取得対応。",
                        },
                    ],
                },
            ],
        },
        {
            num: "03",
            titleJa: "Dialog — サプライヤー/バイヤー管理",
            titleEn: "Supplier & Buyer Management",
            slides: [
                {
                    header: "03  Dialog — サプライヤー/バイヤー管理 実装内容",
                    items: [
                        {
                            title: "サプライヤー一覧 — 新UI反映",
                            body: "パンクズメニュー、ボタン新UI反映",
                        },
                        {
                            title: "サプライヤー招待 — 3ステップフロー",
                            body: "ステップバー、パンクズメニュー、ボタン新UI反映。企業情報入力画面・確認招待画面を実装。",
                        },
                        {
                            title: "バイヤー一覧・招待 — 新UI反映",
                            body: "パンクズメニュー、ボタン新UI反映。バイヤー招待も同様の3ステップフローを実装。",
                        },
                    ],
                },
            ],
        },
        {
            num: "04",
            titleJa: "Dialog — 請求・取引管理",
            titleEn: "Invoice & Trade Management",
            slides: [
                {
                    header: "04  Dialog — 請求・取引管理 実装内容",
                    items: [
                        {
                            title: "請求・支払管理 一覧",
                            body: "パンクズメニュー、ボタン新UI反映。CSV出力レコード選択チェックボックス追加。手数料の表示対応。",
                        },
                        {
                            title: "取引管理 一覧・詳細",
                            body: "パンクズメニュー、ボタン新UI反映。MATERIAL_ORDER単位で既存処理確認。発注担当者取得方法更新。納品プランの状態に応じて文言切り替え。",
                        },
                    ],
                },
            ],
        },
        {
            num: "05",
            titleJa: "バイヤー — ユーザー・会社関連",
            titleEn: "User & Company Management",
            slides: [
                {
                    header: "05  バイヤー — ユーザー・会社関連 実装内容",
                    items: [
                        {
                            title: "ユーザー一覧・招待・編集・新規作成",
                            body: "パンクズメニュー、Button新UI反映。代理発注権限設定対応。招待中ユーザー処理追加。プラットフォームからの招待とバイヤーからの招待を分けてUI表示対応。",
                        },
                        {
                            title: "企業情報 — 新UI反映",
                            body: "パンクズメニュー、Button新UI反映。業務設定の処理を追加。",
                        },
                        {
                            title: "マスター関連 (配送先・取引先・請求先)",
                            body: "パンクズメニュー、Button新UI反映。配送先、取引先、請求先画面対応。",
                        },
                    ],
                },
            ],
        },
        {
            num: "06",
            titleJa: "バイヤー — 資材・発注・請求管理",
            titleEn: "Catalog, Order & Invoice Management",
            slides: [
                {
                    header: "06  バイヤー — 資材カタログ・発注管理 実装内容",
                    items: [
                        {
                            title: "資材カタログ 一覧・詳細",
                            body: "パンクズメニュー、Button新UI反映。取引先選択・単位UI変更対応。",
                        },
                        {
                            title: "カート — 新UI・グルーピング対応",
                            body: "商品をカートに追加モーダル変更。カートUIの変更対応。グルーピング仕様変更対応。",
                        },
                        {
                            title: "発注管理 一覧・詳細",
                            body: "パンクズメニュー、Button、Filter新UI反映。納品プランカードのUI更新（枠線）。検収結果登録モーダルは廃止、カードで直接入力。",
                        },
                    ],
                },
                {
                    header: "06  バイヤー — 請求・仕入れ管理 / 共通 実装内容",
                    items: [
                        {
                            title: "請求管理・仕入れ先管理",
                            body: "パンクズメニュー、Button新UI反映。CSV出力は新規UIに基づいて対応。仕入れ先管理の操作列を削除。",
                        },
                        {
                            title: "共通 — ドメイン設定",
                            body: "Route53を使うことで、DNSサーバーの構築対応。",
                        },
                    ],
                },
            ],
        },
    ],
    // Summary checklist (shown on final Q&A slide)
    summaryItems: [
        "Dialog 全画面 新UI反映完了",
        "バイヤーサイト 新UI反映完了",
        "サプライヤー/バイヤー 3ステップ招待フロー実装",
        "資材カタログ・発注・請求管理 更新完了",
        "共通ドメイン設定 (Route53) 対応完了",
    ],
};
// ─────────────────────────────────────────────
// END OF CONTENT SECTION
// ─────────────────────────────────────────────

const pptxgen = require("pptxgenjs");

// ── Colors ──────────────────────────────────
const C = {
    darkBg: "0D1B2A",
    lightBg: "F8F9FA",
    teal: "0D9488",
    tealBright: "14B8A6",
    white: "FFFFFF",
    textDark: "1E293B",
    textGray: "475569",
    textMuted: "64748B",
    cardBorder: "E2E8F0",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = `Sprint Review ${CONTENT.sprintNumber}`;

// ── Helpers ──────────────────────────────────

/** Dark left stripe + right panel — used on dark slides */
function addDarkChrome(slide) {
    // Left stripe
    slide.addShape(pres.ShapeType.rect, {
        x: 0, y: 0, w: 0.18, h: 5.625,
        fill: { color: C.teal },
        line: { color: C.teal, pt: 0 },
    });
    // Right translucent panel
    slide.addShape(pres.ShapeType.rect, {
        x: 7.5, y: 0, w: 2.5, h: 5.625,
        fill: { color: C.teal, transparency: 85 },
        line: { color: C.teal, pt: 0 },
    });
}

/** Dark header bar — used on light content slides */
function addHeaderBar(slide, title) {
    slide.addShape(pres.ShapeType.rect, {
        x: 0, y: 0, w: 10, h: 0.65,
        fill: { color: C.darkBg },
        line: { color: C.darkBg, pt: 0 },
    });
    slide.addText(title, {
        x: 0.3, y: 0, w: 9.4, h: 0.65,
        fontSize: 15, bold: true, color: C.white,
        fontFace: "Arial", valign: "middle", margin: 0,
    });
}

/** ✓ 完了 badge on right side of a card */
function addDoneBadge(slide, cardY, cardH) {
    const bw = 0.75, bh = 0.3;
    const bx = 9.0, by = cardY + (cardH - bh) / 2;
    slide.addShape(pres.ShapeType.rect, {
        x: bx, y: by, w: bw, h: bh,
        fill: { color: C.white },
        line: { color: C.teal, pt: 1.5 },
    });
    slide.addText("✓ 完了", {
        x: bx, y: by, w: bw, h: bh,
        fontSize: 9, bold: true, color: C.teal,
        fontFace: "Calibri", align: "center", valign: "middle", margin: 0,
    });
}

/** Content card with left accent, title, body, badge */
function addContentCard(slide, item, cardY) {
    const cardH = 1.25;
    // Card background
    slide.addShape(pres.ShapeType.rect, {
        x: 0.3, y: cardY, w: 9.4, h: cardH,
        fill: { color: C.white },
        line: { color: C.cardBorder, pt: 1 },
    });
    // Left teal accent bar
    slide.addShape(pres.ShapeType.rect, {
        x: 0.3, y: cardY, w: 0.07, h: cardH,
        fill: { color: C.teal },
        line: { color: C.teal, pt: 0 },
    });
    // Title
    slide.addText(item.title, {
        x: 0.5, y: cardY + 0.12, w: 8.3, h: 0.35,
        fontSize: 13, bold: true, color: C.textDark,
        fontFace: "Arial", valign: "top", margin: 0,
    });
    // Body
    slide.addText(item.body, {
        x: 0.5, y: cardY + 0.52, w: 8.2, h: 0.65,
        fontSize: 11, color: C.textGray,
        fontFace: "Calibri", valign: "top", margin: 0, wrap: true,
    });
    addDoneBadge(slide, cardY, cardH);
}

// ── Slide 1: Cover ───────────────────────────
function buildCover() {
    const slide = pres.addSlide();
    slide.background = { color: C.darkBg };
    addDarkChrome(slide);

    // "SPRINT REVIEW" pill label
    slide.addShape(pres.ShapeType.rect, {
        x: 0.6, y: 0.5, w: 1.7, h: 0.35,
        fill: { color: C.teal },
        line: { color: C.teal, pt: 0 },
    });
    slide.addText("SPRINT REVIEW", {
        x: 0.6, y: 0.5, w: 1.7, h: 0.35,
        fontSize: 9, bold: true, color: C.white,
        fontFace: "Calibri", align: "center", valign: "middle", margin: 0,
    });

    // Main title
    slide.addText("スプリントレビュー", {
        x: 0.6, y: 1.1, w: 6.8, h: 0.85,
        fontSize: 38, bold: true, color: C.white, fontFace: "Arial",
    });

    // Sprint label
    slide.addText(CONTENT.sprintLabel, {
        x: 0.6, y: 2.05, w: 6, h: 0.5,
        fontSize: 22, color: C.tealBright, fontFace: "Calibri",
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
        x: 0.6, y: 2.65, w: 4, h: 0.03,
        fill: { color: C.teal }, line: { color: C.teal, pt: 0 },
    });

    // Topics
    const bulletItems = CONTENT.coverTopics.map(t => ({
        text: t,
        options: {
            bullet: { code: "2022" }, color: C.white, fontSize: 13,
            fontFace: "Calibri", paraSpaceAfter: 4
        },
    }));
    slide.addText(bulletItems, {
        x: 0.6, y: 2.85, w: 6.5, h: 2.5,
        color: C.white, fontSize: 13, fontFace: "Calibri",
    });
}

// ── Slide 2: Agenda ──────────────────────────
function buildAgenda() {
    const slide = pres.addSlide();
    slide.background = { color: C.lightBg };
    addHeaderBar(slide, "アジェンダ  /  Agenda");

    const cols = 2, rows = 3;
    const cw = 4.6, ch = 1.35, gap = 0.1;
    const startX = 0.3, startY = 0.82;

    CONTENT.agenda.forEach((item, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = startX + col * (cw + gap);
        const y = startY + row * (ch + gap);

        // Card
        slide.addShape(pres.ShapeType.rect, {
            x, y, w: cw, h: ch,
            fill: { color: C.white },
            line: { color: C.cardBorder, pt: 1 },
        });
        // Number badge
        slide.addShape(pres.ShapeType.rect, {
            x, y, w: 0.65, h: ch,
            fill: { color: C.teal },
            line: { color: C.teal, pt: 0 },
        });
        slide.addText(item.num, {
            x, y, w: 0.65, h: ch,
            fontSize: 18, bold: true, color: C.white,
            fontFace: "Arial", align: "center", valign: "middle", margin: 0,
        });
        // Title
        slide.addText(item.title, {
            x: x + 0.75, y: y + 0.18, w: cw - 0.85, h: 0.5,
            fontSize: 14, bold: true, color: C.textDark, fontFace: "Arial", margin: 0,
        });
        // Subtitle
        slide.addText(item.sub, {
            x: x + 0.75, y: y + 0.72, w: cw - 0.85, h: 0.4,
            fontSize: 12, color: C.textMuted, fontFace: "Calibri", margin: 0,
        });
    });
}

// ── Section Divider ──────────────────────────
function buildSectionDivider(section) {
    const slide = pres.addSlide();
    slide.background = { color: C.darkBg };
    addDarkChrome(slide);

    // Number
    slide.addText(section.num, {
        x: 0.7, y: 1.5, w: 1.4, h: 1.4,
        fontSize: 64, bold: true, color: C.tealBright,
        fontFace: "Arial", align: "left", valign: "middle",
    });
    // Japanese title
    slide.addText(section.titleJa, {
        x: 2.2, y: 1.6, w: 7.0, h: 0.75,
        fontSize: 28, bold: true, color: C.white, fontFace: "Arial",
    });
    // English title
    slide.addText(section.titleEn, {
        x: 2.2, y: 2.45, w: 7.0, h: 0.45,
        fontSize: 14, color: C.tealBright, fontFace: "Calibri",
    });
}

// ── Content Slide ────────────────────────────
function buildContentSlide(slideData) {
    const slide = pres.addSlide();
    slide.background = { color: C.lightBg };
    addHeaderBar(slide, slideData.header);

    let y = 0.82;
    slideData.items.forEach(item => {
        addContentCard(slide, item, y);
        y += 1.25 + 0.15;
    });
}

// ── Summary / Q&A ────────────────────────────
function buildSummary() {
    const slide = pres.addSlide();
    slide.background = { color: C.darkBg };
    addDarkChrome(slide);

    // Title
    slide.addText("まとめ & Q&A", {
        x: 0.6, y: 0.4, w: 7, h: 0.65,
        fontSize: 28, bold: true, color: C.white, fontFace: "Arial",
    });
    // Divider
    slide.addShape(pres.ShapeType.rect, {
        x: 0.6, y: 1.15, w: 3.5, h: 0.03,
        fill: { color: C.teal }, line: { color: C.teal, pt: 0 },
    });

    // Checklist items
    CONTENT.summaryItems.forEach((item, i) => {
        const y = 1.35 + i * 0.52;
        slide.addText("✓", {
            x: 0.6, y, w: 0.35, h: 0.45,
            fontSize: 16, bold: true, color: C.tealBright,
            fontFace: "Calibri", valign: "middle",
        });
        slide.addText(item, {
            x: 1.0, y, w: 6.2, h: 0.45,
            fontSize: 14, color: C.white,
            fontFace: "Calibri", valign: "middle",
        });
    });

    // CTA button
    slide.addShape(pres.ShapeType.rect, {
        x: 2.7, y: 5.0, w: 4.6, h: 0.42,
        fill: { color: C.teal }, line: { color: C.teal, pt: 0 },
    });
    slide.addText("ご質問・ご意見をお待ちしております", {
        x: 2.7, y: 5.0, w: 4.6, h: 0.42,
        fontSize: 12, bold: true, color: C.white,
        fontFace: "Calibri", align: "center", valign: "middle", margin: 0,
    });
}

// ── Build all slides ─────────────────────────
buildCover();
buildAgenda();

CONTENT.sections.forEach(section => {
    buildSectionDivider(section);
    section.slides.forEach(slideData => buildContentSlide(slideData));
});

buildSummary();

// ── Write file ───────────────────────────────
const outFile = `sprint_review_${CONTENT.sprintNumber}.pptx`;
pres.writeFile({ fileName: outFile }).then(() => {
    console.log(`✓ Created: ${outFile}`);
});