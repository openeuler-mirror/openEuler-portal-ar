import card1 from '~@/assets/category/home/play-community/card-1.png';
import card2 from '~@/assets/category/home/play-community/card-2.png';
export const vitalityConfig = [
  {
    vitalityValue: 0,
    vitalityKey: 'contributors',
    vitalityLabel: {
      ar: 'مساهمًا',
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'repos',
    vitalityLabel: {
      ar: 'مستودعًا',
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'sigs',
    vitalityLabel: {
      ar: 'مجموعات للاهتمامات الخاصة',
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'users',
    vitalityLabel: {
      ar: 'مستخدمًا',
    },
  },
  {
    vitalityValue: 0,
    vitalityKey: 'businessosv',
    vitalityLabel: {
      ar: 'مورد أنظمة التشغيل',
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
        link: '/ar/community/contribution/detail.html',
      },
      textBtn: {
        label: 'عرض مجموعات للاهتمامات الخاصة (SIGs)',
        link: '/ar/sig/sig-list/',
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
