import type { HeadConfig, UserConfig } from 'vitepress';

import viteLastModifiedPlugin from '@opendesign-plus/plugins/vite/generate-lastmod-changefreq';
import sitemapItemTransformer from '@opendesign-plus/geo-scripts/vitepress-sitemap-transformer';
import generateLLMsFull from '@opendesign-plus/geo-scripts/generate-llms-full';
import contentYamlPlugin from './plugins/vite-plugin-content-yaml';

import path, { join } from 'node:path';
import { existsSync, readFileSync} from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';


const isBlog = /.+\/(?:news|blog|showcase)\/.+$/;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const geoDir = path.resolve(__dirname, '../../.geo')
const currentHostname = readEnvVar('VITE_MAIN_AR_DOMAIN_URL') || 'https://ar.openeuler.org';

const setTdk = (pageData: PageData, pagePath: string) => {
  pageData.titleTemplate = `:title | openEuler`;
  const jsonFile = join(geoDir, 'tdks', pagePath, 'index.json');
  const tdkInfo = existsSync(jsonFile) ? JSON.parse(readFileSync(jsonFile, 'utf-8')) : null;
  if (!tdkInfo) {
    if (isBlog.test(pagePath)) {
      const frontmatter = pageData.frontmatter;
      const description = frontmatter?.summary || frontmatter?.Summary;
      if (!pageData.description && description) {
        pageData.description = description;
      }
    }
    return;
  }
  const { title, description, keywords, canonical } = tdkInfo;
  if (description) {
    pageData.description = description;
  }
  if (title) {
    pageData.title = title;
  }
  if (canonical) {
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      'link', { rel: 'canonical', href: `${currentHostname}${canonical}` }
    ]);
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
}

function readEnvVar(key: string): string | undefined {
  // eslint-disable-next-line
  const envFile = resolve(__dirname, '../.env.production');
  if (!existsSync(envFile)) return undefined;
  const match = readFileSync(envFile, 'utf-8').match(
    new RegExp(`^${key}\\s*=\\s*(.+)$`, 'm')
  );
  return match ? match[1].trim() : undefined;
}

const config: UserConfig = {
  lang: 'ar',
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://ar.openeuler.org/ar/',
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
        src: '/ar/check-dark-mode-v2.js',
      },
    ],
    [
      'meta',
      {
        name: 'baidu-site-verification',
        content: 'code-EWzbQRssNU',
      },
    ],
    [
      'link',
      {
        rel: 'canonical',
        href: 'https://ar.openeuler.org/ar/',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        hreflang: 'ar',
        href: 'https://ar.openeuler.org/ar/',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: 'https://ar.openeuler.org/ar/',
      },
    ],
  ],
  appearance: false, // enable dynamic scripts for dark mode
  titleTemplate: false, //  vitepress supports pageTitileTemplate since 1.0.0
  transformPageData(pageData) {
    const filePath = pageData.filePath;
    console.log('filePath', filePath);
    let lookupKey: string;
    if (filePath.endsWith('index.md')) {
      lookupKey = encodeURI(filePath.slice(0, -9)) || '/';
    } else {
      lookupKey = encodeURI(filePath.slice(0, -2).concat('html')) || '/';
    }
    // console.log('lookupKey', lookupKey);
    setTdk(pageData, lookupKey);
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
  vite: {
    resolve: {
      alias: {
        '#cms': resolve(__dirname, '../../.cms/export/index.client.ts'),
        '#content': resolve(__dirname, '../../.content'),
      },
    },
    plugins: [
      contentYamlPlugin(),
      viteLastModifiedPlugin({
        rootDir: join(__dirname, '../'),
        pageEntryPattern: ['zh/**/*.md', 'en/**/*.md'],
        ignoreDeps: ['**/shared/**', '**/utils/**', '**/composables/**', '**/i18n/**', '**/assets/**'],
        outputFile: join(geoDir, 'last-modified.json')
      }),
    ],
    ssr: {
      noExternal: ['@opendesign-plus/components', 'element-plus']
    }
  },
};
export default config;