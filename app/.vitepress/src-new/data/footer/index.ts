// 中文媒体链接
import LogoBilibili from '~@/assets/category/footer/bilibili.png';
import LogoToutiao from '~@/assets/category/footer/toutiao.png';
import LogoJuejin from '~@/assets/category/footer/juejin.png';
import LogoOschina from '~@/assets/category/footer/oschina.png';
import LogoCsdn from '~@/assets/category/footer/csdn.png';

// 英文媒体链接
import LogoRedditSquare from '~@/assets/category/footer/reddit-square.png';
import LogoLinkedin from '~@/assets/category/footer/linkdin.png';
import LogoYoutube from '~@/assets/category/footer/youtube.png';
import LogoTwitter from '~@/assets/category/footer/x.png';

// 中文媒体链接
import LogoBilibiliHover from '~@/assets/category/footer/bilibili_hover.png';
import LogoToutiaoHover from '~@/assets/category/footer/toutiao_hover.png';
import LogoJuejinHover from '~@/assets/category/footer/juejin_hover.png';
import LogoOschinaHover from '~@/assets/category/footer/oschina_hover.png';
import LogoCsdnHover from '~@/assets/category/footer/csdn_hover.png';

// 英文媒体链接
import LogoRedditSquareHover from '~@/assets/category/footer/reddit-square_hover.png';
import LogoLinkedinHover from '~@/assets/category/footer/linkdin_hover.png';
import LogoYoutubeHover from '~@/assets/category/footer/youtube_hover.png';
import LogoTwitterHover from '~@/assets/category/footer/x_hover.png';

import police from '~@/assets/category/footer/police.png';

// 媒体链接
export const linksData = {
  ar: [
    {
      path: 'https://www.linkedin.com/company/openeuler',
      logo: {
        normal: LogoLinkedin,
        hover: LogoLinkedinHover,
      },
      id: 'linkedin',
      height: 16,
    },
    {
      path: 'https://x.com/openEuler',
      logo: {
        normal: LogoTwitter,
        hover: LogoTwitterHover,
      },
      id: 'twitter',
      height: 16,
    },
    {
      path: 'https://www.youtube.com/channel/UCPzSqXqCgmJmdIicbY7GAeA',
      logo: {
        normal: LogoYoutube,
        hover: LogoYoutubeHover,
      },
      id: 'youtube',
      height: 12,
    },
    {
      path: 'https://www.reddit.com/r/openEuler/',
      logo: {
        normal: LogoRedditSquare,
        hover: LogoRedditSquareHover,
      },
      id: 'reddit-square',
      height: 16,
    },
  ],
};
// 隐私链接
export const linksData2 = {
  ar: [
    {
      NAME: 'علامة تجارية',
      URL: `/ar/other/brand/`,
    },
    {
      NAME: 'سياسة الخصوصية',
      URL: `/ar/other/privacy/`,
    },
    {
      NAME: 'إشعار قانوني',
      URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/legal/`,
    },
    {
      NAME: 'حول ملفات الارتباط التشعبي',
      URL: `/ar/other/cookies/`,
    },
  ],
};
// 底部导航数据
export const quickNav = {
  ar: [
    {
      title: 'نبذة عن openEuler',
      list: [
        {
          title: 'الأعضاء',
          link: '/ar/community/member/',
        },
        {
          title: 'الحوكمة',
          link: '/ar/community/organization/',
        },
        {
          title: 'مدونة السلوك',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/community/charter/`,
        },
        {
          title: 'الإحصاءات',
          link: `${import.meta.env.VITE_SERVICE_DATASTAT_URL}/en/overview`,
        },
      ],
    },
    {
      title: 'الأخبار والمدونات',
      list: [
        {
          title: 'الأخبار',
          link: '/ar/interaction/news-list/',
        },
        {
          title: 'المدونات',
          link: '/ar/interaction/blog-list/',
        },
        {
          title: 'المستندات التقنية',
          link: '/ar/showcase/technical-white-paper/',
        },
      ],
    },
    {
      title: 'الوصول',
      list: [
        {
          title: 'openEuler موجود في كل مكان',
          link: '/ar/download/#get-openeuler',
        },
        {
          title: 'أحدث إصدارات المجتمع',
          link: '/ar/download/',
        },
        {
          title: 'الإصدارات التجارية',
          link: '/ar/download/commercial-release/',
        },
        // {
        //   title: '软件中心',
        //   link: `${import.meta.env.VITE_SERVICE_SOFTWARE_URL}/en`,
        // },
      ],
    },
    {
      title: 'الخدمات والموارد',
      list: [
        {
          title: 'الوثائق',
          link: `/ar/docs/`,
        },
        {
          title: 'الأسئلة الشائعة',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/faq/`,
        },
        {
          title: 'تواصل معنا',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/contact-us/`,
        },
        // {
        //   title: '反馈问题',
        //   link: '',
        // },
      ],
    },
    {
      title: 'الاتصال',
      list: [
        {
          title: 'القوائم البريدية',
          link: '/ar/community/mailing-list/',
        },
        {
          title: 'الأنشطة',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/interaction/event-list/`,
        },
        {
          title: 'المنتدى',
          link: import.meta.env.VITE_SERVICE_FORUM_URL,
        },
      ],
    },
    {
      title: 'مساهمة',
      list: [
        {
          title: 'مجموعات للاهتمامات الخاصة (SIGs)',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/sig/sig-list/`,
        },
        {
          title: 'دليل المساهمة',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/community/contribution/`,
        },
        {
          title: 'التدريب',
          link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/learn/mooc/`,
        },
      ],
    },
  ],
};

export const friendshipLinks = {
  ar: [
    {
      link: 'https://www.infoq.cn/?utm_source=openeuler&utm_medium=youlian',
      title: 'infoQ',
    },
    {
      link: 'https://www.authing.cn/',
      title: 'Authing',
    },
    {
      link: 'https://www.opengauss.org/en/',
      title: 'openGauss',
    },
    {
      link: 'https://www.mindspore.cn/en/',
      title: 'MindSpore',
    },
    {
      link: 'https://www.openubmc.cn/',
      title: 'openUBMC',
    },
    {
      link: 'https://www.openfuyao.cn/',
      title: 'openFuyao',
    },
    {
      link: 'http://www.ebaina.com/',
      title: 'Ebaina',
    },
  ],
};

export const filingData = {
  link: 'https://beian.miit.gov.cn/#/Integrated/index',
  icon: police,
};
