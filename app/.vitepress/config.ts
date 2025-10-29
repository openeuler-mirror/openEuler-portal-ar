import type { HeadConfig, UserConfig } from 'vitepress';
import tdks from './tdks';

const isBlog = /.+\/(?:news|blog|showcase)\/.+$/;

const config: UserConfig = {
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://www.openeuler.org',
    transformItems: (items) =>
      items.filter((item) => !item.url.startsWith('/ar/approve')),
  },
  lastUpdated: true,
  base: '/ar/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'script',
      {
        src: '/check-dark-mode-v2.js',
      },
    ],
    [
      'meta',
      {
        name: 'baidu-site-verification',
        content: 'code-EWzbQRssNU',
      },
    ],
  ],
  appearance: false, // enable dynamic scripts for dark mode
  titleTemplate: false, //  vitepress supports pageTitileTemplate since 1.0.0
  async transformPageData(pageData) {
    const filePath = pageData.filePath;
    console.log('filePath', filePath);
    let lookupKey: string;
    if (filePath.endsWith('index.md')) {
      lookupKey = encodeURI(filePath.slice(0, -9));
    } else {
      lookupKey = encodeURI(filePath.slice(0, -2).concat('html'));
    }
    console.log('lookupKey', lookupKey);
    const locale = 'ar';
    const tdkInfo = tdks[locale]?.[lookupKey];
    pageData.titleTemplate = `:title | ${tdks.titleSuffix[locale]}`;
    if (!tdkInfo) {
      if (isBlog.test(lookupKey)) {
        const frontmatter = pageData.frontmatter;
        const description = frontmatter?.summary || frontmatter?.Summary;
        if (!pageData.description && description) {
          pageData.description = description;
        }
      }
      return;
    }
    const { title, description, keywords } = tdkInfo;
    if (description) {
      pageData.description = description;
    }
    if (title) {
      pageData.title = title;
    }
    if (keywords) {
      pageData.frontmatter.head ??= [];
      const keywordsIndex = pageData.frontmatter.head.findIndex(
        (item: HeadConfig) => item[1]?.name === 'keywords'
      );
      if (keywordsIndex !== -1) {
        pageData.frontmatter.head.splice(keywordsIndex, 1, [
          'meta',
          { name: 'keywords', content: keywords },
        ]);
        return;
      }
      pageData.frontmatter.head.push([
        'meta',
        { name: 'keywords', content: keywords },
      ]);
    }
  },
  markdown: {
    config(md) {
      md.set({
        html: true,
        linkify: false,
      });
    },
  },
  cleanUrls: true,
};
export default config;