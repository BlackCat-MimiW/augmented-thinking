import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: sorted.map(a => ({
      title:       a.data.title,
      description: a.data.description ?? '',
      pubDate:     a.data.pubDate,
      link:        `${SITE.base}/${a.data.category}/${a.slug}/`,
      categories:  a.data.tags,
    })),
    customData: `<language>zh-TW</language>`,
    stylesheet: false,
  });
}
