const tdks: {
  [path: string]: { title: string; description: string; keywords?: string };
} = {
  'showcase': {
    title: 'قصص النجاح',
    description:
      'Success stories and case studies of projects launched with openEuler.',
    keywords: 'success stories, case studies, open source, Linux os',
  },
  'showcase/technical-white-paper': {
    title: 'Technical White Papers',
    description:
      'Explore the key features and advancements of each openEuler realease.',
    keywords: 'white paper, Linux os, digital infrastructure, open source',
  },
  'security/security-bulletins': {
    title: 'CVEs | Security',
    description:
      'Get the latest CVE details and security patches. Stay protected with the openEuler vulnerability bulletin.',
    keywords: 'security advisories, CVE, vulnerability, Linux os, open source',
  },
  'interaction/news-list': {
    title: 'الأخبار',
    description:
      'Catch up with the latest developments, releases, and community updates from openEuler.',
    keywords: 'update, Linux os, news, open source, monthly bulletin',
  },
  'interaction/blog-list': {
    title: 'المدونات',
    description:
      'Gain in-depth knowledge and fresh perspectives on openEuler through our insightful blogs.',
    keywords: 'blogs, insight, Linux os, open source',
  },
  'monthly-bulletins': {
    title: 'النشرة الإخبارية الشهرية',
    description:
      "Stay connected with openEuler's monthly newsletter. Get the latest updates, news, and insights from the community delivered straight to you each month.",
    keywords: 'monthly bulletin, update, news, insight, open source',
  },
  'community/mailing-list': {
    title: 'القوائم البريدية',
    description:
      'Discuss and stay updated on Linux, cloud computing, and open source innovation through our mailing lists.',
    keywords: 'Linux, mailing list, cloud computing, open source, OS',
  },
  '#footer': {
    title: 'Social Media',
    description:
      'Follow us on social media for news, updates, and discussions on Linux, cloud computing, and open source innovation.',
    keywords: 'Linux, cloud, open source, social media, OS',
  },
  'community/organization': {
    title: 'بنية الحوكمة',
    description:
      "Explore the openEuler community's organizational structure, committees, and code of conduct.",
    keywords: 'OS, Linux, leadership, committee, open source community',
  },
  'community/member': {
    title: 'الأعضاء',
    description:
      'Discover the companies and organizations actively contributing code and shaping the future of openEuler.',
    keywords: 'OS, Linux, open source community, cloud, edge computing',
  },
  'download/?version=openEuler%2024.03%20LTS': {
    title: 'Download Community Edition',
    description:
      'Download the latest openEuler community edition. Find the perfect Linux distro for your deployments.',
    keywords: 'OS, Linux, cloud, open source software, server Linux',
  },
  'download/commercial-release': {
    title: 'تنزيل الإصدار التجاري',
    description:
      'Get the openEuler commercial editions. Download ISOs, find supported architectures, and explore vendor options.',
    keywords: 'OS, Linux, commercial, cloud, server Linux',
  },
  'other/brand': {
    title: 'العلامات التجارية',
    description:
      'Download openEuler logos and access brand guidelines. Get the resources you need to use and represent our open source OS.',
    keywords: 'OS, logo, trademark, brand, open source software',
  },
  'download': {
    title: 'تنزيل إصدار المنتدى',
    description:
      'Download the latest openEuler community release. Find the next go-to Linux distro for your deployments.',
    keywords: 'download, community, release, Linux distro, openEuler',
  },
  '/': {
    title: 'openEuler | نظام تشغيل البنية الأساسية الرقمية',
    description:
      'An open source OS run by the OpenAtom Foundation that builds a global community to enhance digital infrastructure and support diverse architectures.',
    keywords: 'openEuler, community, projects, developments, resources',
  },
  'security/cve': {
    title: 'الثغرات الأمنية ونقاط التعرض الشائعة | الأمان',
    description:
      'The list of Common Vulnerabilities and Exposures (CVEs) relevant to openEuler, helping you stay updated on security issues.',
    keywords: 'openEuler, CVE, security',
  },
  'security/cve/detail': {
    title: 'CVE Details | Security',
    description:
      'Stay informed about CVEs impacting openEuler. Access in-depth information to safeguard your projects.',
    keywords: 'CVEs, security, openEuler',
  },
  'docs': {
    title: 'مركز المستندات | المستندات',
    description:
      'openEuler docs',
    keywords: 'openEuler docs',
  },
};

export default tdks;
