import card1 from '~@/assets/category/home/play-community/card-1.png';
import card2 from '~@/assets/category/home/play-community/card-2.png';
import { getArabicPluralForm } from '~@/utils/locale';
const getArabicPluralFormFn = (n,i) => {
  return vitalityConfig?.[i]?.vitalityLabel?.ar?.[getArabicPluralForm(n)] || '';
};
export const vitalityConfig = [
  {
    vitalityValue: 0,
    vitalityKey: 'contributors',
    vitalityLabel: {
      ar: {
        'one': 'مساهم واحد',
        'zero': 'لا مساهمين',
        'two': 'مساهمان',
        'few': 'مساهمين',
        'many': 'مساهمًا',
        'other': 'مساهم',
      },
      fn: (n) => getArabicPluralFormFn(n,0)
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'repos',
    vitalityLabel: {
      ar: {
        'one': 'مستوعد واحد',
        'zero': 'لا مستوعدين',
        'two': 'مستوعدان',
        'few': 'مستوعدين',
        'many': 'مستوعدًا',
        'other': 'مستوعد',
      },
      fn: (n) => getArabicPluralFormFn(n,1)
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'sigs',
    vitalityLabel: {
      ar: {
        'one': 'مجموعة واحدة للاهتمامات الخاصة',
        'zero': 'لا مجموعات للاهتمامات الخاصة',
        'two': 'مجموعتان للاهتمامات الخاصة',
        'few': 'مجموعات للاهتمامات الخاصة',
        'many': 'مجموعة للاهتمامات الخاصة',
        'other': 'مجموعة للاهتمامات الخاصة',
      },
      fn: (n) => getArabicPluralFormFn(n,2)
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'users',
    vitalityLabel: {
      ar: {
        'one': 'مستخدم واحد',
        'zero': 'لا مستخدمين',
        'two': 'مستخدمان',
        'few': 'مستخدمين',
        'many': 'مستخدمًا',
        'other': 'مستخدم',
      },
      fn: (n) => getArabicPluralFormFn(n,3)
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'businessosv',
    vitalityLabel: {
      ar: {
        'one': 'مورد واحد',
        'zero': 'لا موردين',
        'two': 'موردان',
        'few': 'موردين',
        'many': 'موردًا',
        'other': 'مورد',
      },
      fn: (n) => getArabicPluralFormFn(n,4)
    },
  },
];

export const playCommunity = {
  ar: [
    {
      title: 'ابدأ المساهمة',
      bg: card1,
      intro: 'ساهم في كتابة التعليمات البرمجية، وعدّل المستندات، وانضم إلى مناقشاتنا.',
      btn: {
        label: 'دليل المساهمة',
        link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/community/contribution/detail.html`,
      },
      textBtn: {
        label: 'عرض مجموعات للاهتمامات الخاصة (SIGs)',
        link: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/sig/sig-list/`,
      },
    },
    {
      title: 'سجّل عضويتك',
      bg: card2,
      intro:
        "مرحبًا بك في openEuler! يسعدنا أن تكون عضوًا في مجتمعنا المخصص لبناء نظام تشغيل مفتوح المصدر للبنية التحتية الرقمية.",
      btn: {
        label: 'الأعضاء',
        link: '/ar/community/member/',
      },
    },
  ],
};
