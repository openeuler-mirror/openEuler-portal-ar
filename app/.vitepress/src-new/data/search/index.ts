export const moduleMap = new Map([
  [
    'all',
    {
      label: {
        ar: 'All',
      },
    },
  ],
  [
    'download',
    {
      label: {
        ar: 'Download',
      },
      subModules: ['communityRelease', 'commercialRelease'],
    },
  ],
  [
    'docs',
    {
      label: {
        ar: 'Docs',
      },
    },
  ],
  [
    'learn',
    {
      label: {
        ar: 'Learn',
      },
      subModules: ['whitepaper', 'showcase', 'migration'],
    },
  ],
  [
    'community',
    {
      label: {
        ar: 'Community',
      },
      subModules: ['sig', 'etherpad', 'mail', 'forum'],
    },
  ],
  [
    'update',
    {
      label: {
        ar: 'Stay Uodated',
      },
      subModules: ['news', 'blog'],
    },
  ],
  [
    'gitee',
    {
      label: {
        ar: 'AtomGit',
      },
    },
  ],
  [
    'other',
    {
      label: {
        ar: 'Others',
      },
    },
  ],
]);

export const subModuleMap = new Map([
  [
    'release',
    {
      label: {
        ar: 'Community Releases',
      },
      from: {
        ar: ['Download', 'Community Releases', '{version}'],
      },
    },
  ],
  [
    'communityRelease',
    {
      label: {
        ar: 'Community Releases',
      },
      from: {
        ar: ['Download', 'Community Releases', '{version}'],
      },
    },
  ],
  [
    'commercialRelease',
    {
      label: {
        ar: 'Commercial Releases',
      },
      from: {
        ar: ['Download', 'Other Releases', 'Commercial Releases'],
      },
    },
  ],
  [
    'docs',
    {
      from: {
        ar: ['Learn', 'Documentation'],
      },
    },
  ],
  [
    'software',
    {
      from: {
        ar: ['Download', 'Install', 'EasySoftWare'],
      },
    },
  ],
  [
    'whitepaper',
    {
      label: {
        ar: 'White Papers',
      },
      from: {
        ar: ['Learn', 'Tech Highlights', 'White Papers'],
      },
    },
  ],
  [
    'showcase',
    {
      label: {
        ar: 'Success Stories',
      },
      from: {
        ar: ['Learn', 'Tech Highlights', 'Success Stories'],
      },
    },
  ],
  [
    'sig',
    {
      label: {
        ar: 'SIG',
      },
      from: {
        ar: ['Community', 'Contribute', 'SIG'],
      },
    },
  ],
  [
    'etherpad',
    {
      label: {
        ar: '',
      },
      from: {
        ar: [''],
      },
    },
  ],
  [
    'mail',
    {
      label: {
        ar: 'Mailing Lists',
      },
      from: {
        ar: ['Community', 'Engage with Us', 'Mailing Lists'],
      },
    },
  ],
  [
    'forum',
    {
      label: {
        ar: 'Forum',
      },
      from: {
        ar: ['Community', 'Engage with Us', 'Forum'],
      },
    },
  ],
  [
    'news',
    {
      label: {
        ar: 'News',
      },
      from: {
        ar: ['Stay Updated', 'News & Blogs', 'News'],
      },
    },
  ],
  [
    'blog',
    {
      label: {
        ar: 'Blogs',
      },
      from: {
        ar: ['Stay Updated', 'News & Blogs', 'Blogs'],
      },
    },
  ],
  [
    'service',
    {
      from: {
        ar: ['Service'],
      },
    },
  ],
  [
    'migration',
    {
      label: {
        ar: 'Migration',
      },
      from: {
      ar: ['Learn', 'Migration', 'Migrate to openEuler'],
      },
    },
  ],
  [
    'packages',
    {
      from: {
        ar: ['Develop', 'Analyze', 'Pkgship'],
      },
    },
  ],
]);

// maintainer
export const maintainerDefaults = {
  name: 'George.Cao',
  email: 'caozhi1214@qq.com',
  gitee_id: 'georgecao',
};
