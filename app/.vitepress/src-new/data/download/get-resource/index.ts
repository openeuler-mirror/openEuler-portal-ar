import docsIcon from '~icons/download/docs_light.svg';
import mirrorIcon from '~icons/download/mirror_light.svg';

export default [
  {
    icon: {
      dark: '',
      light: mirrorIcon,
    },
    ar: {
      title: 'النسخ الاحتياطية',
      label: 'جميع النسخ الاحتياطية لـ openEuler',
      href: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/list/`,
    },
  },
  {
    icon: {
      dark: '',
      light: docsIcon,
    },
    ar: {
      title: 'الوثائق',
      label:
        "استكشف ملاحظات إصدار openEuler ودليل التثبيت ودليل المسؤول وأدلة استخدام المشروع والمزيد.",
      href: '/ar/docs/',
    },
  },
];
