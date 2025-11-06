import windowsImg from '~@/assets/category/download/windows.png';
import cloudImg from '~@/assets/category/download/public.png';
import containerImg from '~@/assets/category/download/docker.png';
import virtualizationImg from '~@/assets/category/download/virtualization.png';
import raspberryPiImg from '~@/assets/category/download/raspberry-pi.png';
import macOsImg from '~@/assets/category/download/macos_light.png';

import windowsImgDark from '~@/assets/category/download/windows_dark.png';
import cloudImgDark from '~@/assets/category/download/public_dark.png';
import containerImgDark from '~@/assets/category/download/docker_dark.png';
import virtualizationImgDark from '~@/assets/category/download/virtualization_dark.png';
import raspberryPiImgDark from '~@/assets/category/download/raspberry-pi_dark.png';
import macOsImgDark from '~@/assets/category/download/macos_dark.png';

import windowsImgMo from '~@/assets/category/download/windows_mo.png';
import cloudImgMo from '~@/assets/category/download/public_mo.png';
import containerImgMo from '~@/assets/category/download/docker_mo.png';
import virtualizationImgMo from '~@/assets/category/download/virtualization_mo.png';
import raspberryPiImgMo from '~@/assets/category/download/raspberry-pi_mo.png';
import macOsImgMo from '~@/assets/category/download/macos_mo_light.png';

import windowsImgDarkMo from '~@/assets/category/download/windows_mo_dark.png';
import cloudImgDarkMo from '~@/assets/category/download/public_mo_dark.png';
import containerImgDarkMo from '~@/assets/category/download/docker_mo_dark.png';
import virtualizationImgDarkMo from '~@/assets/category/download/virtualization_mo_dark.png';
import raspberryPiImgDarkMo from '~@/assets/category/download/raspberry-pi_mo_dark.png';
import macOsImgDarkMo from '~@/assets/category/download/macos_mo_dark.png';

export default {
  ar: [
    {
      id: 'cloud',
      bg: {
        light: cloudImg,
        dark: cloudImgDark,
      },
      bgMo: {
        light: cloudImgMo,
        dark: cloudImgDarkMo,
      },
      title: 'Cصور السحابة',
      intro:
        'أصدرت openEuler صورًا رسمية على منصات السحابة العامة الرئيسية.',
      intro1: 'دليل التثبيت',
      introLink: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/cloud/`,
      links: [
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/cloud/#obtaining-the-openeuler-image-on-aws`,
          label: 'AWS',
          introduce:
            'إن Amazon Web Services (AWS) هي أكبر موفر للخدمات السحابية في العالم. يقدم AWS Marketplace الآن صور سحابة openEuler بإصدارات متعددة. انشر بيئاتك القائمة على openEuler على AWS اليوم!',
        },
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/cloud/#obtaining-the-openeuler-shared-image-on-azure`,
          label: 'Azure',
          introduce:
            "اكتسبت Microsoft Azure—منصة خدمات السحابة العامة من Microsoft—سمعة طيبة بخصوص خدمات الذكاء الاصطناعي المتطورة والقوية. ابدأ باستخدام صور سحابة openEuler في صور Azure Community وانشرها على Azure الآن!",
        },
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/cloud/#obtaining-the-openeuler-image-on-alibaba-cloud`,
          label: 'Alibaba Cloud',
          introduce:
            "تقدم Alibaba Cloud، منصة الحوسبة السحابية من Alibaba، مجموعة واسعة من المنتجات والخدمات. تتوفر صور سحابة openEuler الآن في سوق Alibaba Cloud Marketplace، ما يوفر أداءً غير عادي وقابلية للتوسع في بيئة السحابة الخاصة بك.",
        },
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/cloud/#obtaining-the-openeuler-image-on-huawei-cloud`,
          label: 'Huawei Cloud',
          introduce:
            'توفر Huawei Cloud مجموعة واسعة من خدمات الحوسبة السحابية، بما في ذلك خادم السحابة المرنة (ECS) وخدمة تخزين الكائنات (OBS). اعثر على صور سحابة openEuler في متجر Huawei Cloud Marketplace وأطلق العنان لإمكانات نظام التشغيل مفتوح المصدر هذا!',
        },
      ],
    },
    {
      id: 'container',
      bg: {
        light: containerImg,
        dark: containerImgDark,
      },
      bgMo: {
        light: containerImgMo,
        dark: containerImgDarkMo,
      },
      title: 'صور الحاوية',
      intro: 'يوفر openEuler صور حاويات رسمية.',
      intro1: 'دليل التثبيت',
      introLink: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/image/`,
      links: [
        {
          href: 'https://hub.docker.com/r/openeuler/openeuler',
          label: 'Docker Hub',
          introduce:
            "يفتخر Docker Hub بتقديم أكبر مستودع صور حاوية في العالم. اكتشف صور حاويات قاعدة وتطبيقات openEuler التي يتم تحديثها بانتظام على Docker Hub وأطلق العنان لإمكانات نظام التشغيل مفتوح المصدر هذا!",
        },
        {
          href: 'https://quay.io/search?q=openeuler',
          label: 'Quay.io',
          introduce:
            'Quay.io هي واحدة من السجلات الرائدة لإنشاء صور الحاويات وتخزينها وتوزيعها. احصل على صور حاويات القاعدة والتطبيقات على Quay.io مع تعليمات الاستخدام التفصيلية. ابدأ نشر openEuler الآن!',
        },
        {
          href: 'https://hub.oepkgs.net/account/sign-in?globalSearch=openeuler',
          label: 'ISCAS',
          introduce:
            'oepkgs هي منصة عامة توفر حزم البرامج وصور الحاويات لـ openEuler وعمليات توزيع Linux الأخرى. تقدم oepkgs الآن أكثر من 20,000 من حزم البرامج عبر مواقع النسخ الاحتياطي الخاصة بها. يقوم مجتمع oepkgs بإنشاء واختبار توافق الحزم، وإدارة مستودعات التعليمات البرمجية المصدر عبر دورة الحياة لجميع الحزم المتاحة.',
        },
        {
          href: 'https://images.linuxcontainers.org/',
          label: 'حاوية Linux',
          introduce:
            "حاوية Linux هي مجموعة أدوات توفر المحاكاة الافتراضية على مستوى نظام التشغيل، ما يتيح تشغيل حاويات Linux المتعددة المعزولة على الخادم المادي نفسه مع مشاركة نواة الجهاز المضيف. يشبه هذا النهج نشر الأجهزة الافتراضية لكنه يعد بتعزيز الكفاءة وخفض النفقات العامة.",
        },
      ],
    },
    {
      id: 'windows',
      bg: {
        light: windowsImg,
        dark: windowsImgDark,
      },
      bgMo: {
        light: windowsImgMo,
        dark: windowsImgDarkMo,
      },
      title: 'Windows',
      intro: 'تشغيل openEuler على Windows',
      repeat: 1,
      links: [
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/wsl/`,
          label: 'نظام Windows الفرعي لنظام التشغيل Linux (WSL)',
          introduce:
            'نظام Windows الفرعي لنظام التشغيل Linux (WSL) هو عرض Microsoft الذي يتيح لبيئات نظام التشغيل Linux العمل مباشرة على نظام التشغيل Windows. قم بتنزيل تطبيق openEuler لـ WSL على متجر Microsoft للاستمتاع ببيئة تطوير openEuler من دون مغادرة إعداد Windows.',
        },
      ],
    },
    {
      id: 'macos',
      bg: {
        light: macOsImg,
        dark: macOsImgDark,
      },
      bgMo: {
        light: macOsImgMo,
        dark: macOsImgDarkMo,
      },
      title: 'MacOS',
      intro: 'تشغيل openEuler على نظام MacOS',
      repeat: 1,
      links: [
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/macos/`,
          label: 'OrbStack',
          introduce:
            'OrbStack هي منصة افتراضية سريعة وخفيفة الوزن مصممة لتشغيل حاويات Docker وأجهزة Linux الافتراضية على macOS. اعثر على صور الحاوية بواسطة مجتمع openEuler على OrbStack هنا.',
        },
      ],
    },
    {
      id: 'virtualization',
      bg: {
        light: virtualizationImg,
        dark: virtualizationImgDark,
      },
      bgMo: {
        light: virtualizationImgMo,
        dark: virtualizationImgDarkMo,
      },
      title: 'المحاكاة الافتراضية',
      intro: 'تشغيل openEuler على الأجهزة الافتراضية',
      repeat: 1,
      links: [
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/virtualization/`,
          label: 'تثبيت openEuler في VirtualBox',
          introduce:
            'Oracle VirtualBox هو برنامج محاكاة افتراضية تم تطويره في الأصل بواسطة برامج InnoTek وتتم صيانته الآن بواسطة Oracle كجزء من نظام Oracle xVM الأساسي. لاستخدام أجهزة openEuler الافتراضية على VirtualBox، ما عليك سوى تنزيل صور أجهزة openEuler الافتراضية من مستودع برامج openEuler الرسمي وتثبيتها.',
        },
      ],
    },
    {
      id: 'raspberrypi',
      bg: {
        light: raspberryPiImg,
        dark: raspberryPiImgDark,
      },
      bgMo: {
        light: raspberryPiImgMo,
        dark: raspberryPiImgDarkMo,
      },
      title: 'Raspberry Pi',
      intro: 'تثبيت openEuler على Raspberry Pi',
      repeat: 1,
      links: [
        {
          href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/wiki/install/raspberry-pi/`,
          label: 'Raspberry Pi ',
          introduce:
            'Raspberry Pi هو حاسوب مدمج أحادي اللوحة تم تطويره من قبل مؤسسة Raspberry Pi Foundation. بعد الإشادة بانخفاض تكلفة صور Raspberry Pi ومرونتها، أصبحت متاحة الآن في مستودع برامج openEuler الرسمي.',
        },
      ],
    },
  ],
};
