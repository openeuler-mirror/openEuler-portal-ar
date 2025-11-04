import { markRaw } from 'vue';

import Summit from '~@/assets/category/header/summit.png';
import IconOutLink from '~icons/app/icon-out-link.svg';
import IconArrowRight from '~icons/app-new/icon-header-next.svg';

import annualReport2024 from '~@/assets/category/header/annual-report-2024.jpg';

const TAG_TYPE = {
  HOT: 'الرائجة',
  NEW: 'جديد',
};

const OutLink = markRaw(IconOutLink);
const ArrowRight = markRaw(IconArrowRight);

export default {
  NAV_ROUTER: [
    {
      NAME: 'تنزيل',
      ID: 'download',
      CHILDREN: [
        {
          NAME: 'الحصول على openEuler',
          CHILDREN: [
            {
              NAME: 'openEuler 25.09',
              DESCRIPTION:
                'جرب الابتكارات المضمنة للخادم والسحابة والحافة القائمة على نظام Linux kernel 6.6.',
              TAG: TAG_TYPE.NEW,
              URL: '/ar/download/#openEuler 25.09',
            },
            {
              NAME: 'openEuler 24.03 LTS SP2',
              DESCRIPTION:
                'إصدار 24.03 LTS SP2 المحسن على نظام kernel 6.6. تجربة أفضل للمستخدمين والمطورين.',
              TAG: TAG_TYPE.NEW,
              URL: '/ar/download/#openEuler 24.03 LTS SP2',
            },
            {
              NAME: 'openEuler 24.03 LTS SP1',
              DESCRIPTION:
                'إصدار 24.03 LTS SP1 المحسن على نظام kernel 6.6. تجربة أفضل للمستخدمين والمطورين.',
              TAG: null,
              URL: '/ar/download/#openEuler 24.03 LTS SP1',
            },
            {
              NAME: 'المزيد',
              DESCRIPTION:
                'احصل على openEuler من السحابات العامة أو صور الحاويات.',
              TAG: null,
              URL: '/ar/download/#get-openeuler',
            },
          ],
        },
        {
          NAME: 'إصدارات أخرى',
          CHILDREN: [
            {
              NAME: 'الإصدارات التجارية',
              DESCRIPTION: 'الإصدارات التجارية لكل من x86 وArm وRISC-V.',
              URL: '/ar/download/commercial-release/',
            },
          ],
        },
        {
          NAME: 'موارد ذات صلة',
          CHILDREN: [
            {
              NAME: 'النسخ الاحتياطية',
              DESCRIPTION: 'جميع مواقع النسخ الاحتياطية لـ openEuler.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/list/`,
            },
            {
              NAME: 'مستودع',
              DESCRIPTION: "مستودع إصدارات مجتمع openEuler.",
              URL: 'https://repo.openeuler.openatom.cn/',
            },
          ],
        },
      ],
      SHORTCUT: [
        {
          NAME: 'الإصدارات التاريخية',
          URL: '/ar/download/archive/',
        },
        {
          NAME: 'دورة حياة openEuler',
          URL: `${
            import.meta.env.VITE_MAIN_DOMAIN_URL
          }/en/other/lifecycle/`,
        },
        {
          NAME: 'دليل تثبيت openEuler 24.03 LTS SP2',
          URL: `${
            import.meta.env.VITE_SERVICE_DOCS_URL
          }/en/docs/24.03_LTS_SP2/server/installation_upgrade/installation/installation_preparations.html`,
        },
        {
          NAME: 'دليل تثبيت openEuler 25.03',
          URL: `${
            import.meta.env.VITE_SERVICE_DOCS_URL
          }/en/docs/25.03/server/installation_upgrade/installation/installation-preparations.html`,
        },
        {
          NAME: 'المستندات التقنية الفنية',
          URL: '/ar/showcase/technical-white-paper/',
        },
      ],
    },
    {
      NAME: 'تطوير',
      ID: 'development',
      CHILDREN: [
        {
          NAME: 'مساهمة',
          CHILDREN: [
            {
              NAME: 'مجموعات للاهتمامات الخاصة (SIGs)',
              DESCRIPTION: 'استكشف مجموعات للاهتمامات الخاصة (SIGs) المتنوعة.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/sig/sig-list/`,
            },
            {
              NAME: 'CLA',
              DESCRIPTION:
                'وقع اتفاقية CLA لحماية عملك—تتوفر خيارات متعددة!',
              URL: 'https://clasign.osinfra.cn/sign/gitee_openeuler-1611298811283968340',
              ICON: OutLink,
            },
            {
              NAME: 'دليل المساهمة',
              DESCRIPTION:
                'تعرف على كيفية المشاركة والتأثير في مجتمعنا.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/community/contribution/`,
            },
          ],
        },
        {
          NAME: 'إنشاء',
          CHILDREN: [
            {
              NAME: 'EulerMaker',
              DESCRIPTION:
                'خدمة إنشاء مفتوحة وموحدة للتطوير المبسط.',
              URL: 'https://eulermaker.compass-ci.openeuler.openatom.cn/',
              ANALYTICSNAME: 'eulermaker',
            },
            {
              NAME: 'مستودع مستخدم openEuler',
              DESCRIPTION:
                'منصة استضافة وتوزيع الطرود سهلة الاستخدام.',
              URL: 'https://eur.openeuler.openatom.cn/coprs/',
            },
            {
              NAME: 'إرسال حزمة',
              DESCRIPTION:
                'ساهم بحزم البرامج بكفاءة في المجتمع.',
              URL: `${
                import.meta.env.VITE_SERVICE_SOFTWARE_PKG_URL
              }/en/package`,
            },
          ],
        },
        {
          NAME: 'الإصدار',
          CHILDREN: [
            {
              NAME: 'OEPKGS',
              DESCRIPTION: 'مستودع ملحق تابع لطرف ثالث لـ openEuler.',
              URL: 'https://oepkgs.net/en-CN',
              ICON: OutLink,
            },
          ],
        },
        {
          NAME: 'تحليل',
          CHILDREN: [
            {
              NAME: 'Pkgship',
              DESCRIPTION:
                'Aأداة للاستعلام عن معلومات حزمة نظام التشغيل والتبعيات بسهولة.',
              URL: import.meta.env.VITE_SERVICE_PKGMANAGE_URL,
              ANALYTICSNAME: 'pkgship',
            },
          ],
        },
        {
          NAME: 'المشاريع',
          CHILDREN: [
            {
              NAME: 'A-Tune',
              DESCRIPTION: 'محرك موالفة ذكي يعمل بالذكاء الاصطناعي.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/projects/atune/`,
            },
            {
              NAME: 'iSula',
              DESCRIPTION: 'حل الحاوية.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/projects/isula/`,
            },
            {
              NAME: 'secGear',
              DESCRIPTION:
                'إطار عمل حوسبة سرية لبناء تطبيقات آمنة.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/projects/secgear/`,
            },
            // {
            //   NAME: 'StratoVirt',
            //   DESCRIPTION:
            //     'شاشة جهاز افتراضي من فئة المؤسسات لمراكز البيانات السحابية.',
            //   URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/projects/stratovirt/`,
            // },
            // {
            //   NAME: 'BiSheng JDK',
            //   DESCRIPTION: 'جهاز Java افتراضي عالي الأداء.',
            //   URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/projects/bishengjdk/`,
            // },
            // {
            //   NAME: 'openEuler Intelligence',
            //   DESCRIPTION: 'منصة نموذج لغة كبيرة مدعومة بواسطة openEuler.',
            //   URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/projects/intelligence/`,
            // },
          ],
        },
      ],
      SHORTCUT: [],
    },
    {
      NAME: 'مستند',
      ID: 'document',
      CHILDREN: [
        {
          NAME: 'مستند',
          CHILDREN: [
            {
              NAME: 'مركز المستندات',
              DESCRIPTION:
                'موردك الأساسي لسيناريوهات الخدمة المختلفة واستخدام الأدوات.',
              TAG: TAG_TYPE.HOT,
              URL: `/ar/docs/`,
            },
            {
              NAME: 'البدء السريع',
              DESCRIPTION:
                'تعلّم أساسيات المجتمع في 10 دقائق، وابنِ وانمُ بسرعة.',
              TAG: TAG_TYPE.HOT,
              URL: `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/24.03_LTS_SP2/server/quickstart/quickstart/quick_start.html`,
            },
            {
              NAME: 'دليل التثبيت',
              DESCRIPTION:
                'تعليمات تفصيلية لتثبيت openEuler.',
              URL: `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/24.03_LTS_SP2/server/installation_upgrade/installation/installation_preparations.html`,
            },
            {
              NAME: 'الأسئلة الشائعة',
              DESCRIPTION: 'احصل على إجابات عن الأسئلة الشائعة وتلميحات استكشاف الأخطاء وإصلاحها.',
              URL: `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/common/faq/general/general_faq.html`,
            },
            {
              NAME: 'دليل تطوير الوثائق',
              DESCRIPTION: 'اكتشف كيف يمكنك الإسهام في تطوير الوثائق.',
              URL: `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/common/contribute/directory_structure_introductory.html`,
            },
          ],
        },
      ],
      SHORTCUT: [],
    },
    {
      NAME: 'تعلُّم',
      ID: 'learn',
      CHILDREN: [
        {
          NAME: 'التدريب',
          CHILDREN: [
            {
              NAME: 'إرشادات تعليمية',
              DESCRIPTION:
                'سلسلة من برامج الفيديو التعليمية لـ openEuler لمساعدتك على البدء.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/learn/mooc/`,
            },
          ],
        },
      ],
      SHORTCUT: [],
    },
    {
      NAME: 'دعم',
      ID: 'approve',
      CHILDREN: [
        {
          NAME: 'التوافق',
          CHILDREN: [
            {
              NAME: 'قائمة التوافق',
              DESCRIPTION:
                'تحقق من توافق الأجهزة والبرامج مع openEuler.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/compatibility/`,
            },
          ],
        },
        {
          NAME: 'الترحيل',
          CHILDREN: [
            {
              NAME: 'الترحيل إلى openEuler',
              DESCRIPTION: 'Gأدلة للترحيل إلى openEuler.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/migration/`,
            },
          ],
        },
        {
          NAME: 'الأمان',
          CHILDREN: [
            {
              NAME: 'مركز الأمان',
              DESCRIPTION:
                'تتبع أحدث نقاط الضعف الأمنية والتحذيرات الأمنية والمزيد غير ذلك.',
              URL: '/ar/security/security-bulletins/',
            },
            {
              NAME: 'مركز الأخطاء',
              DESCRIPTION: 'اكتشف إصلاحات الأخطاء.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/security/bug-bulletins/`,
            },
          ],
        },
      ],
      SHORTCUT: [
        {
          NAME: 'مقدمة شاملة لاختبار توافق أجهزة openEuler',
          URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/compatibility/hardware/`,
        },
        {
          NAME: 'الحصول على x2openEuler',
          URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/migration/download/`,
        },
        {
          NAME: 'ممارسات الترحيل',
          URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/migration/user-cases/`,
        },
        {
          NAME: 'الأسئلة الشائعة',
          URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/faq/`,
        },
      ],
    },
    {
      NAME: 'المجتمع',
      ID: 'community',
      CHILDREN: [
        {
          NAME: 'نبذة',
          CHILDREN: [
            {
              NAME: 'الحوكمة',
              DESCRIPTION: 'أعضاء لجان openEuler.',
              URL: '/ar/community/organization/',
            },
            {
              NAME: 'مدونة السلوك',
              DESCRIPTION: "مدونة سلوك openEuler.",
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/community/conduct/`,
            },
            {
              NAME: 'الأعضاء',
              DESCRIPTION:
                'الشركات والمؤسسات المساهمة في openEuler.',
              URL: '/ar/community/member/',
            },
            {
              NAME: 'الإحصاءات',
              DESCRIPTION:
                'ابحث عن الإحصاءات وشاهد كيف يزدهر مجتمع openEuler.',
              URL: `${import.meta.env.VITE_SERVICE_DATASTAT_URL}/en/overview`,
            },
            {
              NAME: 'تواصل معنا',
              DESCRIPTION: 'تواصل معنا عبر البريد الإلكتروني أو تابعنا على وسائل التواصل الاجتماعي.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/contact-us/`,
            },
            {
              NAME: 'قصص النجاح',
              DESCRIPTION:
                'استكشف كيفية استخدام openEuler في مختلف الصناعات.',
              URL: '/ar/showcase/',
            },
            {
              NAME: 'المستندات التقنية',
              DESCRIPTION:
                'رؤى متعمقة في التفاصيل التقنية والتطبيقات الخاصة بكل إصدار.',
              URL: '/ar/showcase/technical-white-paper/',
            },
          ],
        },
        {
          NAME: 'تفاعل معنا',
          CHILDREN: [
            {
              NAME: 'المنتدى',
              DESCRIPTION: 'شارك المعرفة واسأل أي شيء ولنجد الحلول معًا.',
              URL: `${import.meta.env.VITE_SERVICE_FORUM_URL}/?locale=en`,
            },
            {
              NAME: 'القوائم البريدية',
              DESCRIPTION:
                'ناقش تقنية openEuler والتقدم المحرز في قوائمنا البريدية.',
              URL: '/ar/community/mailing-list/',
            },
            {
              NAME: 'QuickIssue',
              DESCRIPTION:
                'يمكنك إرسال وتتبع قضايا المجتمع بسرعة وسهولة.',
              URL: `${import.meta.env.VITE_SERVICE_QUICKISSUE_URL}/en/issues/`,
            },
          ],
        },
      ],
      SHORTCUT: [],
    },
    {
      NAME: 'التحديث باستمرار',
      ID: 'update',
      WITH_PICTURE: true,
      CHILDREN: [
        {
          NAME: 'الأنشطة',
          CHILDREN: [
            {
              NAME: 'تقويم المجتمع',
              DESCRIPTION:
                "ابق على اطلاع بالأحداث والمؤتمرات والإصدارات الرئيسية لـ openEuler.",
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/interaction/event-list/`,
            },
            {
              NAME: 'الأحداث',
              DESCRIPTION:
                'قابل openEuler وتواصل مع المجتمع في كل حدث رئيسي.',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/interaction/summit-list/summit2025/`,
            },
            {
              NAME: 'دعوة لبرنامج X',
              DESCRIPTION:
                'كن من محترفي openEuler القيّمين أو ساهم في الدروس التقنية!',
              URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/community/program/`,
            },
          ],
        },
        {
          NAME: 'الأخبار والمدونات',
          CHILDREN: [
            {
              NAME: 'الأخبار',
              DESCRIPTION:
                'تابع آخر التطورات والإصدارات وتحديثات المجتمع.',
              URL: '/ar/interaction/news-list/',
            },
            {
              NAME: 'المدونات',
              DESCRIPTION:
                'اكتسب معرفة متعمقة ووجهات نظر جديدة حول openEuler.',
              URL: '/ar/interaction/blog-list/',
            },
            {
              NAME: 'النشرات الشهرية',
              DESCRIPTION: "ما الجديد في مجتمع openEuler.",
              URL: '/ar/monthly-bulletins/',
            },
          ],
        },
      ],
      SHORTCUT: [
        {
          NAME: 'مؤتمر نظام التشغيل وقمة openEuler لعام 2025',
          PICTURE: Summit,
          DESCRIPTION:
            'Operating systems form the backbone of digital and intelligent industry transformation. openEuler, an open source operating system born in China for digital infrastructure, has emerged as a key player in the global open source landscape. Over the past five years, its market presence was steadily increasing. And openEuler has been continuously driving innovations in OS for AI and AI for OS, accelerating digital transformation, and fostering a thriving ecosystem though industry-wide collaboration.',
          REMARK: '14-15 نوفمبر 2025 | بكين',
          TYPE: 'PICTURE',
          URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/interaction/summit-list/summit2025/`,
        },
      ],
    },
  ],
  USER_CENTER: 'User Center',
  MESSAGE_CENTER: 'Message Center',
  LOGOUT: 'Logout',
  CODE: 'التعليمة البرمجية',
  QUICKLINK: 'رابط سريع',
  SEARCH: {
    BROWSEHISTORY: 'History',
    CLEAN: 'Clean up',
    TOPSEARCH: 'الأكثر بحثًا',
    CHANGE: 'Change',
    PLEACHOLDER: 'يُرجى إدخال المحتوى',
    PLEACHOLDER_EXTEND: 'يُرجى إدخال المحتوى',
    TEXT: 'بحث',
  },
  SOURCE_CODE: [
    {
      NAME: 'مصادر التعليمات البرمجية',
      PATH: 'https://gitee.com/openeuler',
      ICON: OutLink,
    },
    {
      NAME: 'مصادر الحزمة',
      PATH: 'https://gitee.com/src-openeuler',
      ICON: OutLink,
    },
    {
      NAME: 'نسخة احتياطية على GitHub',
      PATH: 'https://github.com/openeuler-mirror',
      ICON: OutLink,
    },
  ],
};
