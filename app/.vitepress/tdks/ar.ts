const tdks: {
  [path: string]: { title: string; description: string; keywords?: string };
} = {
  'showcase': {
    title: 'قصص النجاح',
    description:
      'قصص النجاح ودراسات الحالة للمشاريع التي تم إطلاقها باستخدام openEuler.',
    keywords: 'success stories, case studies, open source, Linux os',
  },
  'showcase/technical-white-paper': {
    title: 'الأوراق البيضاء التقنية',
    description:
      'استكشف الميزات الرئيسية والتطورات في كل إصدار من إصدارات openEuler.',
    keywords: 'white paper, Linux os, digital infrastructure, open source',
  },
  'security/security-bulletins': {
    title: 'CVEs | الأمان',
    description:
      'احصل على أحدث تفاصيل الثغرات الأمنية (CVEs) والتصحيحات الأمنية. ابقَ محميًا من خلال نشرة نقاط الضعف في openEuler.',
    keywords: 'security advisories, CVE, vulnerability, Linux os, open source',
  },
  'interaction/news-list': {
    title: 'الأخبار',
    description:
      'اطلع على أحدث التطورات والإصدارات وتحديثات المجتمع من openEuler.',
    keywords: 'update, Linux os, news, open source, monthly bulletin',
  },
  'interaction/blog-list': {
    title: 'المدونات',
    description:
      'اكتسب معرفة متعمقة ووجهات نظر جديدة حول openEuler من خلال مدوناتنا الثاقبة.',
    keywords: 'blogs, insight, Linux os, open source',
  },
  'monthly-bulletins': {
    title: 'النشرة الشهرية',
    description:
      'ابقَ على تواصل عبر النشرة الشهرية لـ openEuler. احصل على أحدث التحديثات والأخبار والرؤى من المجتمع، تُرسل إليك مباشرةً كل شهر.',
    keywords: 'monthly bulletin, update, news, insight, open source',
  },
  'community/mailing-list': {
    title: 'القوائم البريدية',
    description:
      'ناقش وابقَ على اطلاع على أحدث التطورات في Linux والحوسبة السحابية والابتكار مفتوح المصدر من خلال القائمة البريدية لموقع openEuler في الشرق الأوسط.',
    keywords: 'Linux, mailing list, cloud computing, open source, OS',
  },
  '#footer': {
    title: 'Social Media',
    description:
      'Follow us on social media for news, updates, and discussions on Linux, cloud computing, and open source innovation.',
    keywords: 'Linux, cloud, open source, social media, OS',
  },
  'community/organization': {
    title: 'الهيكل الإداري',
    description:
      'استكشف الهيكل التنظيمي لمجتمع openEuler، ولجانه، ومدونة قواعد السلوك.',
    keywords: 'OS, Linux, leadership, committee, open source community',
  },
  'community/member': {
    title: 'الأعضاء',
    description:
      'اكتشف الشركات والمؤسسات التي تساهم بنشاط في الشفرة البرمجية وتشكّل مستقبل openEuler.',
    keywords: 'OS, Linux, open source community, cloud, edge computing',
  },
  'download/?version=openEuler%2024.03%20LTS': {
    title: 'تنزيل إصدار المجتمع',
    description:
      'قم بتنزيل أحدث إصدار لمجتمع openEuler. ابحث عن توزيعة لينكس الرئيسية التالية لعمليات النشر لديك.',
    keywords: 'OS, Linux, cloud, open source software, server Linux',
  },
  'download/commercial-release': {
    title: 'تحميل الإصدار التجاري',
    description:
      'احصل على الإصدارات التجارية من openEuler. قم بتنزيل ملفات ISO، واكتشف البنى المدعومة، واستكشف خيارات البائعين.',
    keywords: 'OS, Linux, commercial, cloud, server Linux',
  },
  'other/brand': {
    title: 'العلامات التجارية',
    description:
      'قم بتنزيل شعارات openEuler والوصول إلى إرشادات العلامة التجارية. احصل على الموارد التي تحتاجها لاستخدام نظام التشغيل مفتوح المصدر الخاص بنا وتمثيله.',
    keywords: 'OS, logo, trademark, brand, open source software',
  },
  'download': {
    title: 'تنزيل إصدار المجتمع',
    description:
      'قم بتنزيل أحدث إصدار لمجتمع openEuler. ابحث عن توزيعة لينكس الرئيسية التالية لعمليات النشر لديك.',
    keywords: 'download, community, release, Linux distro, openEuler',
  },
  '/': {
    title: 'نظام تشغيل البنية التحتية الرقمية',
    description:
      'openEuler هو نظام تشغيل مفتوح المصدر تُديره مؤسسة OpenAtom، ويبني مجتمعًا عالميًا لتعزيز البنية التحتية الرقمية ودعم البنى المتنوعة.',
    keywords: 'openEuler, community, projects, developments, resources',
  },
  'security/cve': {
    title: 'CVEs | الأمان',
    description:
      'قائمة الثغرات والتعرضات الشائعة (CVEs) ذات الصلة بـ openEuler، مما يساعدك على البقاء على اطلاع دائم بالقضايا الأمنية.',
    keywords: 'openEuler, CVE, security',
  },
  'security/cve/detail': {
    title: 'CVE Details | Security',
    description:
      'Stay informed about CVEs impacting openEuler. Access in-depth information to safeguard your projects.',
    keywords: 'CVEs, security, openEuler',
  },
  'docs': {
    title: 'مركز التوثيق | الوثائق',
    description:
      'وثائق openEuler',
    keywords: 'openEuler docs',
  },
};

export default tdks;
