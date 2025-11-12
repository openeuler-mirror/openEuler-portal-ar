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
      ar: 'من المساهمين',
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'repos',
    vitalityLabel: {
      ar: 'من المستودعات'
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'sigs',
    vitalityLabel: {
      ar: 'من مجموعات الاهتمامات الخاصة'
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'users',
    vitalityLabel: {
      ar: 'من المستخدمين'
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'businessosv',
    vitalityLabel: {
      ar: 'من موردي أنظمة التشغيل'
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
