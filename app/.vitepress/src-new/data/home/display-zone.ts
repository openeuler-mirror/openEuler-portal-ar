import event_dark from '~@/assets/category/home/display-zone/event_dark.svg';
import event_light from '~@/assets/category/home/display-zone/event_light.svg';
import migration_dark from '~@/assets/category/home/display-zone/migration_dark.svg';
import migration_light from '~@/assets/category/home/display-zone/migration_light.svg';
import security_dark from '~@/assets/category/home/display-zone/security_dark.svg';
import security_light from '~@/assets/category/home/display-zone/security_light.svg';
import whitePaper_dark from '~@/assets/category/home/display-zone/white-paper_dark.svg';
import whitePaper_light from '~@/assets/category/home/display-zone/white-paper_light.svg';

export default [
  {
    title: {
      ar: 'المستندات التقنية الفنية',
    },
    icon: {
      dark: whitePaper_dark,
      light: whitePaper_light,
    },
    description: {
      ar: 'تعرّف على التفاصيل التقنية لكل إصدار من إصدارات openEuler.',
    },
    link: {
      ar: '/ar/showcase/technical-white-paper/',
    },
  },
  {
    title: {
      ar: 'مركز الأمان',
    },
    icon: {
      dark: security_dark,
      light: security_light,
    },
    description: {
      ar: 'عرض إرشادات الأمان ومعلومات الأمان الأخرى.',
    },
    link: {
      ar: '/ar/security/security-bulletins/',
    },
  },
  {
    title: {
      ar: 'مركز الترحيل',
    },
    icon: {
      dark: migration_dark,
      light: migration_light,
    },
    description: {
      ar: 'تعرّف على كيفية الانتقال إلى openEuler.',
    },
    link: {
      ar: '/ar/migration/',
    },
  },
  {
    title: {
      ar: 'مركز الأحداث',
    },
    icon: {
      dark: event_dark,
      light: event_light,
    },
    description: {
      ar: 'ابق على اطلاع بأحدث مستجدات openEuler.',
    },
    link: {
      ar: '/ar/interaction/event-list/',
    },
  },
];
