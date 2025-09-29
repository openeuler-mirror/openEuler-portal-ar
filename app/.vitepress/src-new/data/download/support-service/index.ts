import forumIcon from '~icons/download/forum.svg';
import faqsIcon from '~icons/download/faqs.svg';
import quickissueIcon from '~icons/download/quickissue.svg';

export default [
  {
    icon: {
      dark: '',
      light: faqsIcon,
    },
    ar: {
      title: 'الأسئلة الشائعة',
      label: 'العثور على إجابات عن الأسئلة الشائعة حول openEuler',
      href: '/ar/faq/',
    },
  },
  {
    icon: {
      dark: '',
      light: forumIcon,
    },
  },
  {
    icon: {
      dark: '',
      light: quickissueIcon,
    },
    ar: {
      title: 'QuickIssue',
      label: 'يمكنك إرسال وتتبع قضايا المجتمع بسرعة وسهولة.',
      href: 'https://quickissue.openeuler.org/en/issues/',
    },
  },
];
