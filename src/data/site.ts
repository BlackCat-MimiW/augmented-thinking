// ─────────────────────────────────────────
// 網站核心設定 — 改這裡就能調整前台所有分類與社群連結
// ─────────────────────────────────────────

export const SITE = {
  name: 'Augmented Thinking',
  tagline: 'AI 工具自學與觀察筆記（2026版）',
  description: '用清晰的語言拆解 AI 工具、商業思維與社會觀察。台灣觀點，2026。',
base: '',
url: 'https://tourmaline-cucurucho-1e33df.netlify.app',
};

// ─── 分類設定（新增/刪除/改名只需改這裡）───
export const CATEGORIES: Category[] = [
  { slug: 'ai-tools',       label: 'AI工具',   color: '#1a1a2e' },
  { slug: 'prompt',         label: 'Prompt設計', color: '#1a3a2e' },
  { slug: 'business',       label: '商業思維', color: '#2e1a1a' },
  { slug: 'society',        label: '社會觀察', color: '#1a2a3e' },
  { slug: 'investment',     label: '投資理財', color: '#2e2a1a' },
  { slug: 'blog',           label: 'Blog',      color: '#2a1a3e' },
  { slug: 'discussion',     label: '討論區',   color: '#1a3a3a' },
];

// ─── 社群連結（填入你的實際網址）───
export const SOCIAL = [
  { platform: 'LinkedIn',  href: 'https://linkedin.com/in/YOUR_ID',    icon: 'linkedin' },
  { platform: 'Instagram', href: 'https://instagram.com/YOUR_ID',      icon: 'instagram' },
  { platform: 'Facebook',  href: 'https://facebook.com/YOUR_ID',       icon: 'facebook' },
  { platform: 'YouTube',   href: 'https://youtube.com/@YOUR_ID',       icon: 'youtube' },
  { platform: 'Threads',   href: 'https://threads.net/@YOUR_ID',       icon: 'threads' },
];

// ─── 訂閱表單（填入你的 Google 表單嵌入連結）───
export const SUBSCRIBE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

// ─── Google Analytics（填入你的 GA4 Measurement ID）───
export const GA_ID = 'G-XXXXXXXXXX';

// Types
export interface Category { slug: string; label: string; color: string; }
