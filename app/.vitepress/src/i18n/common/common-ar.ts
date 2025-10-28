export default {
  MEETINGS_TIME: 'Time: ',
  MEETINGS_REPLAY: 'Replay',
  SEARCH_PLACE_HOLDER: 'Input content',
  COOKIE_LEGAL_TEXT:
    'This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.',
  COOKIE_LEGAL_LINK_TEXT: ' Read our privacy policy.',
  NAV_ROUTER: {
    DOWNLOAD: 'Dolwnload',
    ISO: 'Software Packages',
    MIRRORLIST: 'Mirrors',
    LEARNING: 'Learning',
    DOCS: 'Documentation',
    MOOC: 'MOOC',
    INTERNSHIP: 'Internship',
    CONNECT: 'Connect',
    NEWS: 'News',
    BLOG: 'Blog',
    LIVE: 'Live',
    SALON: 'Meetups',
    SUMMIT: 'Summit',
    COMMUNITY: 'Community',
    CONTRIBUTION: 'Contribution',
    CONVENTION: 'Convention',
    MAILINGLIST: 'Mailing Lists',
    CERTIFICATION: 'Certification',
    TALENT: 'Talent',
    STATISTICS: 'Statistics',
    SIG: 'SIG',
    SIGLIST: 'SIG Lists',
    APPLICATION: 'Application',
    ROLES: 'Roles',
    MEETINGGUIDE: 'Meeting-Guide',
    DISCOVERY: 'Discovery',
    ATUNE: 'A-Tune',
    BISHENGJDK: 'BiSheng JDK',
    ISULA: 'iSula',
    SECGEAR: 'secGear',
    STRATOVIRT: 'StratoVirt',
    COMPASSCI: 'Compass-CI',
    COMPLIANCE: 'Compliance',
    PKGSHIP: 'Pkgship',
    SUPPORT: 'Support',
    VULNERABILITY: 'Vulnerability Management',
    SAFETY: 'Security Advisories',
    CVE: 'CVE',
    COMPATIBILITY_EVALUATION: 'Compatibility Technology Evaluation',
    APPROVE: 'Approve',
    COMPATIBILITY: 'Compatibility List',
    MIGRATION: 'Migration',
  },
  NAV_ROUTER_INFO: [
    {
      NAME: 'Updates',
      CHILDREN: [
        {
          NAME: 'News',
          LABEL: '',
          PATH: '/ar/interaction/news-list/',
        },
        {
          NAME: 'Blogs',
          LABEL: '',
          PATH: '/ar/interaction/blog-list/',
        },
        {
          NAME: 'Events',
          LABEL: '',
          PATH: '/ar/interaction/event-list/',
        },
        {
          NAME: 'Summits',
          LABEL: '',
          PATH: '/ar/interaction/summit-list/summit2024/',
        },
      ],
    },
    {
      NAME: 'Connects',
      CHILDREN: [
        {
          NAME: 'Mailing Lists',
          LABEL: '',
          PATH: '/ar/community/mailing-list/',
        },
        {
          NAME: 'FAQs',
          LABEL: '',
          PATH: '/ar/faq/',
          SHOW_IN_MOBILE_ONLY: true,
        },
      ],
    },
  ],
  NAV_ROUTER_CONFIG_NEW: [
    {
      NAME: 'Users',
      ID: 'user',
      CHILDREN: [
        {
          NAME: 'Technology Highlights',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'Success Stories',
              LABEL:
                'Best practices of openEuler for different industry projects',
              PATH: '/ar/showcase/',
            },
            {
              NAME: 'Technical White Papers',
              LABEL: 'Technical highlights and details of openEuler',
              PATH: '/ar/showcase/technical-white-paper/',
            },
          ],
        },
        {
          NAME: 'Usage Guides',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Documentation',
              LABEL: '',
              PATH: '/ar/docs/',
            },
            {
              NAME: 'MOOCs',
              LABEL: '',
              PATH: '/ar/learn/mooc/',
            },
            {
              NAME: 'Migration Center',
              LABEL: 'Find all OS porting and migration guides',
              PATH: '/ar/migration/',
            },
          ],
        },
        {
          NAME: 'Support & Services',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'Compatibility List',
              LABEL: 'openEuler compatibility list',
              PATH: '/ar/compatibility/',
            },
            {
              NAME: 'Security Center',
              LABEL: 'Vulnerability management and security advisories',
              PATH: '',
              CHILDREN: [
                {
                  NAME: 'Security Center',
                  LABEL: '',
                  PATH: '/ar/security/security-bulletins/',
                },
                {
                  NAME: 'Bug Center',
                  LABEL: '',
                  PATH: '/ar/security/bug-bulletins/',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      NAME: 'Developers',
      ID: 'developer',
      CHILDREN: [
        {
          NAME: 'Learning & Contribution',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Documentation',
              LABEL: '',
              PATH: '/ar/docs/',
            },
            {
              NAME: 'MOOCs',
              LABEL: '',
              PATH: '/ar/learn/mooc/',
            },
            {
              NAME: 'Contribution Guide',
              LABEL: '',
              PATH: '/ar/community/contribution/',
            },
            {
              NAME: 'SIG Center',
              LABEL: '',
              PATH: '/ar/sig/sig-list/',
            },
            {
              NAME: 'CLA',
              LABEL: '',
              PATH: 'https://clasign.osinfra.cn/sign/gitee_openeuler-1611298811283968340',
              OUTLINK: true,
            },
          ],
        },
        {
          NAME: 'Develop openEuler',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'QuickIssue',
              LABEL: 'Query and submit issues',
              PATH: 'https://quickissue.openeuler.org/en/issues/',
            },
            {
              NAME: 'Pkgship',
              LABEL: 'Query software packages and dependencies',
              PATH: 'https://pkgmanage.openeuler.org',
            },
            {
              NAME: 'Contribute Software Package',
              LABEL:
                'Contribute software packages in a simple and efficient manner',
              PATH: 'https://software-pkg.openeuler.org/en/package',
            },
            {
              NAME: 'Compliance',
              LABEL: 'Retrieve license rights, obligations, and restrictions',
              PATH: 'https://compliance.openeuler.org/',
              OUTLINK: true,
            },
            {
              NAME: 'EulerTest',
              LABEL: 'Testing management platform developed based on openEuler',
              PATH: 'https://radiatest.openeuler.org',
            },
            {
              NAME: 'Compass-CI',
              LABEL: 'Open test service platform',
              PATH: 'https://compass-ci.openeuler.org/',
            },
            {
              NAME: 'OEPKGS',
              LABEL: 'Open External Packages Service',
              PATH: 'https://oepkgs.net/en-US',
              OUTLINK: true,
            },
            {
              NAME: 'EulerMaker',
              LABEL: 'Build service platform',
              PATH: 'https://eulermaker.compass-ci.openeuler.openatom.cn/',
            },
            {
              NAME: 'oecp',
              LABEL: 'Os compare anlyze tool',
              PATH: 'https://gitee.com/openeuler/oecp',
              OUTLINK: true,
            },
          ],
        },
        {
          NAME: 'Develop on openEuler',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'openEuler User Repo',
              LABEL:
                'Easy-to-use software package hosting and distribution platform',
              PATH: 'https://eur.openeuler.openatom.cn/coprs/',
            },
          ],
        },
        {
          NAME: 'Code',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Code Sources',
              LABEL: '',
              PATH: 'https://gitee.com/openeuler',
              OUTLINK: true,
            },
            {
              NAME: 'Package Sources',
              LABEL: '',
              PATH: 'https://gitee.com/src-openeuler',
              OUTLINK: true,
            },
            {
              NAME: 'GitHub Mirror',
              LABEL: '',
              PATH: 'https://github.com/openeuler-mirror',
              OUTLINK: true,
            },
          ],
        },
      ],
    },
    {
      NAME: 'Community',
      ID: 'community',
      CHILDREN: [
        {
          NAME: 'About',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'Organizational Structure',
              LABEL: 'Committee members',
              PATH: '/ar/community/organization/',
            },
            {
              NAME: 'Donors',
              LABEL: "openEuler's donors",
              PATH: '/ar/community/member/',
            },
            {
              NAME: 'openEuler Call for X',
              LABEL: 'Diverse contributions',
              PATH: '/ar/community/program/',
            },
            {
              NAME: 'Statistics',
              LABEL: 'Community statistics',
              PATH: 'https://datastat.openeuler.org/en/overview',
            },
          ],
        },
        {
          NAME: 'Learning & Contribution',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Documentation',
              LABEL: '',
              PATH: '/ar/docs/',
            },
            {
              NAME: 'MOOCs',
              LABEL: '',
              PATH: '/ar/learn/mooc/',
            },
            {
              NAME: 'Contribution Guide',
              LABEL: '',
              PATH: '/ar/community/contribution/',
            },
            {
              NAME: 'SIG Center',
              LABEL: '',
              PATH: '/ar/sig/sig-list/',
            },
            // {
            //   //培训认证
            //   NAME: 'Certification',
            //   LABEL: '',
            //   PATH: 'https://talent-assessment.openeuler.org/',
            // },
          ],
        },
        {
          NAME: 'Projects',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'A-Tune',
              LABEL: 'AI-powered tuning engine',
              PATH: '/ar/other/projects/atune/',
            },
            {
              NAME: 'BiSheng JDK',
              LABEL: 'Optimal JDK on Arm',
              PATH: '/ar/other/projects/bishengjdk/',
            },
            {
              NAME: 'iSula',
              LABEL: 'Container solution',
              PATH: '/ar/other/projects/isula/',
            },
            {
              NAME: 'secGear',
              LABEL:
                'Confidential computing framework for secure application development',
              PATH: '/ar/other/projects/secgear/',
            },
            {
              NAME: 'StratoVirt',
              LABEL: 'Enterprise-level VMM intended for cloud data centers',
              PATH: '/ar/other/projects/stratovirt/',
            },
          ],
        },
      ],
    },
    {
      NAME: 'Downloads',
      ID: 'download',
      CHILDREN: [
        {
          NAME: 'Getting Method',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Get openEuler OS',
              PATH: '/ar/ar/download/get-os/',
            },
          ],
        },
        {
          NAME: 'Latest',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'openEuler 24.03 LTS',
              ADD_TITLE: true,
              LABEL:
                'إن openEuler 24.03 LTS SP2، القائم على Linux kernel 6.6، مناسب لسيناريوهات الخادم والسحابة والحافة وعمليات النشر المضمنة. وبفضل الميزات الأفضل في فئتها، يوفر هذا الطراز تجربة جديدة تمامًا للمطورين والمستخدمين الذين ينتمون إلى صناعات متنوعة.',
              PATH: '/ar/download/?version=openEuler 24.03 LTS',
              CHILDREN: [
                {
                  NAME: 'الخادم',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler openEuler 24.03 LTS&scenario=ISO',
                },
                {
                  NAME: 'سحابة الحافة',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler openEuler 24.03 LTS&scenario=edge_img',
                },
                {
                  NAME: 'الحوسبة السحابية',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler openEuler 24.03 LTS&scenario=virtual_machine_img',
                },
                {
                  NAME: 'مضمن',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler openEuler 24.03 LTS&scenario=embedded_img',
                },
              ],
            },
            {
              NAME: 'openEuler 24.09',
              ADD_TITLE: true,
              LABEL:
                'openEuler 24.09, built on Linux kernel 6.6, is suited for server, cloud, edge, AI, and embedded deployments. With best-in-class features, it delivers brand-new experience to developers and users spanning diverse industries.',
              PATH: '/download/?version=openEuler 24.09',
              CHILDREN: [
                {
                  NAME: 'الخادم',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler 24.09&scenario=ISO',
                },
                {
                  NAME: 'سحابة الحافة',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler 24.09&scenario=edge_img',
                },
                {
                  NAME: 'الحوسبة السحابية',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler 24.09&scenario=virtual_machine_img',
                },
                {
                  NAME: 'مضمن',
                  LABEL: '',
                  PATH: '/ar/download/?version=openEuler 24.09&scenario=embedded_img',
                },
              ],
            },
          ],
        },
        {
          NAME: 'Archives',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Community Editions',
              LABEL: '',
              PATH: '/ar/download/archive/',
            },
            {
              NAME: 'Commercial Editions',
              LABEL: '',
              PATH: '/ar/download/commercial-release/',
            },
          ],
        },
        {
          NAME: 'Others',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'Mirrors',
              PATH: '/ar/mirror/list/',
            },
          ],
        },
      ],
    },
  ],
  LANG: 'English',
  LANG_LIST: ['中文', 'English', 'Русский'],
  USER_CENTER: 'User Center',
  MESSAGE_CENTER: 'Message Center',
  LOGOUT: 'Logout',
  PLEASE: 'Please',
  LOGIN: 'login',
  GITTE: 'Source code',
  CODE: 'CODE',
  FOOTER: {
    ATOM_TEXT:
      'openEuler is an open source project incubated and operated by the OpenAtom Foundation.',
    ATOM_PC: '/atom-pc.png',
    ATOM_MO: '/atom-mo.png',
    MAIL: 'contact@openeuler.io',
    COPY_RIGHT: 'Copyright © 2024 openEuler. All rights reserved.',
    LICENSED_1: 'Licensed under',
    LICENSED_2: 'the MulanPSL2',
    RIGHT_LIST: [
      {
        NAME: 'Trademark',
        URL: '/ar/other/brand/',
      },
      {
        NAME: 'Privacy Policy',
        URL: '/ar/other/privacy/',
      },
      {
        NAME: 'Legal Notice',
        URL: '/ar/other/legal/',
      },
      {
        NAME: 'About Cookies',
        URL: '/ar/other/cookies/',
      },
    ],
    QR_CODE: 'WeChat Subscription',
    QR_ASSISTANT: 'WeChat Assistant',
  },
  BUILDING: {
    BUILDING: 'Building',
    BUILDINGMES: 'Coming soon…',
  },
  SEARCH: {
    BROWSEHISTORY: 'History',
    CLEAN: 'Clean up',
    TOPSEARCH: 'Top search',
    CHANGE: 'Change',
    PLEACHOLDER: 'Please enter...',
    PLEACHOLDER_EXTEND: 'Please enter the content',
  },
  PREV: 'pre',
  NEXT: 'next',
  EXPAND: 'Expand',
  RETRACT: 'Collapse',
};
