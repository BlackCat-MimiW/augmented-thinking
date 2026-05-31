# Augmented Thinking

AI 工具自學與觀察筆記部落格 — 雜誌風格，Astro + Tailwind，部署於 GitHub Pages。

## 快速啟動

```bash
npm install
npm run dev
# → http://localhost:4321/augmented-thinking/
```

## 初始設定（必做）

編輯 `src/data/site.ts`，填入：

| 欄位 | 說明 |
|---|---|
| `site` / `base` | 你的 GitHub Pages URL 與 repo 名稱 |
| `SOCIAL` | 各平台的實際網址 |
| `SUBSCRIBE_FORM_URL` | Google 表單嵌入連結 |
| `GA_ID` | Google Analytics 4 Measurement ID（格式：G-XXXXXXXXXX）|

## 新增文章

在 `src/content/articles/` 新增 `.mdx` 檔案：

```mdx
---
title: 文章標題
description: 一句話摘要
category: ai-tools          # 對應 CATEGORIES 中的 slug
pubDate: 2026-05-01
tags: ["標籤1", "標籤2"]
minutesRead: 6
featured: false             # true = 首頁大圖精選
draft: false
---

文章內容（支援 Markdown + 組件）
```

或使用後台管理介面：`/augmented-thinking/admin/`

## 新增 / 刪除分類

編輯 `src/data/site.ts` 的 `CATEGORIES` 陣列，git push 後前台導覽列自動更新。

## 討論區設定（Giscus）

1. 前往 [giscus.app](https://giscus.app)
2. 填入你的 GitHub repo，啟用 Discussions
3. 取得設定參數，更新 `src/pages/discussion/index.astro`

## 目錄結構

```
src/
├── content/articles/   ← MDX 文章
├── data/site.ts        ← 核心設定（分類、社群、GA）
├── layouts/            ← 版型
├── components/         ← Header、Footer、ArticleCard
├── pages/
│   ├── index.astro     ← 首頁
│   ├── [category]/     ← 分類頁 + 文章頁
│   ├── about/
│   ├── subscribe/      ← RSS + Google 表單
│   ├── discussion/     ← Giscus 討論區
│   ├── admin/          ← 後台管理
│   └── rss.xml.js      ← RSS2 Feed
└── styles/global.css
```

## 部署

1. `astro.config.mjs` 中更新 `site` 和 `base`
2. GitHub repo Settings → Pages → Source → **GitHub Actions**
3. `git push` → 自動部署，約 1-2 分鐘上線
