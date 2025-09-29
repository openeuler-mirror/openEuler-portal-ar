import imgAdvantageLeft from '@/assets/category/migration/portal/portal-advantage-left.png';
import imgAdvantageRight from '@/assets/category/migration/portal/portal-advantage-right.png';
import imgTransitionRight from '@/assets/category/migration/portal/portal-advantage-transition-1.png';
import imgTransitionDown from '@/assets/category/migration/portal/portal-advantage-transition-2.png';
import imgDownloadLeft_light from '@/assets/category/migration/portal/portal-download-1.png';
import imgDownloadLeft_dark from '@/assets/category/migration/portal/portal-download-dark-1.png';
import imgDownloadBG_dark from '@/assets/category/migration/portal/portal-download-bg-dark.png';
import imgPathContent_light from '@/assets/category/migration/portal/portal-path-content.png';
import imgPathContent_dark from '@/assets/category/migration/portal/portal-path-content-dark.png';
import imgPathContent_en from '@/assets/category/migration/portal/implementation.png';
import imgPathCoontentTop from '@/assets/category/migration/portal/portal-path-mo-top.png';
import imgPathCoontentBottom from '@/assets/category/migration/portal/portal-path-mo-bottom.png';
import imgOffical from '@/assets/category/migration/portal/portal-help-official.png';
import imgAssistant from '@/assets/category/migration/portal/portal-help-assistant.png';

import iconAdvantage01_light from '@/assets/category/migration/portal/portal-advantage-icon-1.png';
import iconAdvantage02_light from '@/assets/category/migration/portal/portal-advantage-icon-2.png';
import iconAdvantage03_light from '@/assets/category/migration/portal/portal-advantage-icon-3.png';
import iconAdvantage04_light from '@/assets/category/migration/portal/portal-advantage-icon-4.png';
import iconAdvantage01_dark from '@/assets/category/migration/portal/portal-advantage-icon-dark-1.svg';
import iconAdvantage02_dark from '@/assets/category/migration/portal/portal-advantage-icon-dark-2.svg';
import iconAdvantage03_dark from '@/assets/category/migration/portal/portal-advantage-icon-dark-3.svg';
import iconAdvantage04_dark from '@/assets/category/migration/portal/portal-advantage-icon-dark-4.svg';

export default {
  ar: {
    advantage: {
      title: 'Advantages',

      dexcription: 'Easy, stable, and efficient OS migration',

      cardTopLeft: {
        url: imgAdvantageLeft,

        title01: 'Digital transformation',

        title02: 'for OSs that reach EOM',

        description: '',
      },

      transitionRight: imgTransitionRight,

      transitionDown: imgTransitionDown,

      cardTopRight: {
        url: imgAdvantageRight,

        title01: 'openEuler',

        title02: '',

        description:
          'An open source OS designed for digital infrastructure\nKey kernel innovation to fuel multi-architecture computing\nFull-stack optimization for diverse scenarios',
      },

      benefit: {
        light: [
          {
            icon: iconAdvantage01_light,

            title: 'End-to-End Solution',

            link: '/migration/guidance/',
          },

          {
            icon: iconAdvantage02_light,

            title: 'Easy-to-Use Tool',

            link: '/migration/download/',
          },

          {
            icon: iconAdvantage03_light,

            title: 'Comprehensive and Responsive Support',

            link: '/migration/contact/',
          },

          {
            icon: iconAdvantage04_light,

            title: 'Best Practices',

            link: '/migration/user-cases/',
          },
        ],

        dark: [
          {
            icon: iconAdvantage01_dark,

            title: 'End-to-End Solution',

            link: '/migration/guidance/',
          },

          {
            icon: iconAdvantage02_dark,

            title: 'Easy-to-Use Tool',

            link: '/migration/download/',
          },

          {
            icon: iconAdvantage03_dark,

            title: 'Comprehensive and Responsive Support',

            link: '/migration/contact/',
          },

          {
            icon: iconAdvantage04_dark,

            title: 'Best Practices',

            link: '/migration/user-cases/',
          },
        ],
      },
    },

    download: {
      title: 'Download',

      dexcription:
        'Get the x2openEuler migration tool suite and upgrade your OS today',

      left: {
        img: {
          light: imgDownloadLeft_light,

          dark: imgDownloadLeft_dark,
        },

        name: 'x2openEuler',

        version: '3.0.0-2024930',
      },

      btns: [
        {
          name: 'Download Software',

          softLinks: [
            {
              name: 'x86_64 ',

              link: 'https://repo.oepkgs.net/openEuler/rpm/openEuler-20.03-LTS-SP1/contrib/x2openEuler/x86_64/Packages/x2openEuler-core-3.0.0-20241022.x86_64.rpm',
            },

            {
              name: 'AArch64',

              link: 'https://repo.oepkgs.net/openEuler/rpm/openEuler-20.03-LTS-SP1/contrib/x2openEuler/aarch64/Packages/x2openEuler-core-3.0.0-20241022.aarch64.rpm',
            },
          ],
        },

        {
          name: 'Feature Description',

          link: '/ar/migration/download/characteristic-description-3.0.0/',
        },

        {
          name: 'Patch Description',

          link: '/ar/migration/download/patch_description-3.0.0/',
        },

        {
          name: 'User Guide',

          link: 'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/x2openEuler/Introduction.html',
        },
      ],

      bgUrl: imgDownloadBG_dark,
    },

    instruction: {
      title: 'Getting Started',

      dexcription:
        'Find the tool to help you prepare, perform, and test your migration and services',

      list: [
        {
          title: 'Learn',

          content:
            'Migration background\nMigration overview\nopenEuler migration solution',

          sogan: 'Six Steps to Migrate to openEuler',
        },

        {
          title: 'Prepare',

          content:
            'Create a support team\nAnalyze the project\nDesign a migration plan\nPort software before migration',

          sogan: 'Powerful Tool',
        },

        {
          title: 'Implement',

          content: 'In-place upgrade\nMigration after adaptation',

          sogan: 'Streamlined and Reliable Migration',
        },

        {
          title: 'Test and Roll Out',

          content:
            'System monitoring\nInspection and detection\nSecurity vulnerability updates',

          sogan: 'Secure and Intelligent O&M',
        },
      ],
    },

    path: {
      title: 'Migration Paths',

      dexcription: '',

      img: {
        light: imgPathContent_en,
        dark: imgPathContent_dark,
      },

      imgMo: {
        top: {
          title: 'In-place Upgrade (1h)',

          dexcription: 'Upgrade the source OS.',

          img: imgPathCoontentTop,
        },

        bottom: {
          title: 'Migration After Adaptation (4h)',

          dexcription:
            'Automatically install the OS and synchronize configurations.\nInstall applications.',

          img: imgPathCoontentBottom,
        },
      },
    },

    case: {
      title: 'Best Practices',

      dexcription: '',

      list: [
        {
          name: 'China Mobile (Zhejiang)',

          dexcription: 'Smooth OS Porting and More Stable Core Systems',

          link: '/ar/showcase/provider/003p49ce-8355-d114154aa417/',
        },

        {
          name: 'China Telecom',

          dexcription: 'Seamless OS Migration to CTyunOS',

          link: '/ar/showcase/provider/tianyiyun0330/',
        },
      ],

      btn: {
        text: 'Learn More',

        link: '/migration/user-cases/',
      },
    },

    guide: {
      title: 'Porting Guides',

      dexcription: '',

      list: [
        {
          label: 'MySQL 5.7.21 Porting Guide',

          link: '/ar/blog/randy1568/MySQL 5-7-21-migrate-guide.html',
        },

        {
          label: 'Apache 2.4.39 Porting Guide',

          link: '/ar/blog/randy1568/Apache 2-4-39-porting-guide.html',
        },

        {
          label: 'Nginx 1.14.2 Porting Guide',

          link: '/ar/blog/randy1568/Nginx 1-14-2-porting-guide.html',
        },
      ],

      btn: {
        text: 'View More',

        link: '/migration/transplantation-cases/',
      },
    },

    help: {
      title: 'Contact',

      dexcription: '',

      tips: [
        {
          textLeft: 'If you have questions, our ',

          linkText: 'FAQs',

          textRight: ' may have the answer.',

          link: '/ar/migration/faq/',
        },
        {
          textLeft:
            'If you have any issues or requirements relating to system migration, submit them through ',
          linkText: 'QuickIssue',
          textRight: '.',
          link: 'https://quickissue.openeuler.org/en/new-issues/',
        },
        {
          textLeft:
            'Want to connect with the community or share experiences? Join our ',

          linkText: 'Discord group',

          textRight: ' where our team and other users can help you out.',

          link: 'https://discord.gg/aTWFCCgsGB',
        },
        {
          textLeft: 'Looking for more video tutorials? Check out our ',
          linkText: 'migration playlist',
          textRight:
            ' on the openEuler YouTube channel for detailed guides and tutorials.',
          link: 'https://www.youtube.com/@openeuler/playlists',
        },
      ],
      officalQR: {
        img: '',

        text: 'openEuler official WeChat account',
      },

      assistantQR: {
        img: '',

        text: 'openEuler assistant',
      },
    },
  },
};
