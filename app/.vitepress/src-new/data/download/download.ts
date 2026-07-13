import { computed } from 'vue';
import i18n from '~@/i18n';
import getOs from './get-os';

export default {
  ar: {
    COMMUNITY_LIST: [
      {
        NAME: 'openEuler 24.03 LTS SP4',
        DOWNLOAD_URL: 'https://repo.openeuler.org/24.03 LTS SP4/',
        DESC: 'openEuler 24.03 LTS SP4، المعتمد على kernel 6.6، هو امتداد محسّن مصمم خصيصًا لسيناريوهات الخادم والسحابة والذكاء الاصطناعي. يقدم هذا الإصدار ميزات وتحسينات جديدة، بما في ذلك التحسينات على النواة، وموثوقية UnifiedBus SuperPoD وإمكانية استخدامها، وتقسيم وحدات المعالجة العصبية، والاسترداد السريع لخدمات الاستدلال، وبيئات الحماية المعزولة E2B، والتشغيل والصيانة الذكيين (التشخيص والتعديل)، والمُجمِّعات، والآلات الافتراضية السرية (CVM). ويوفر تجربة جديدة تمامًا للمطورين والمستخدمين، ما يوسع نطاقه ليشمل مجالات أوسع.',
        RELEASE_DESC_URL:
          `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/24.03_LTS_SP4/server/releasenotes/releasenotes/introduction.html`,
        INSTALL_GUIDENCE_URL:
          `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/24.03_LTS_SP4/server/installation_upgrade/installation/installation_preparations.html`,
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        WHITE_PAPER: '/whitepaper/en/openEuler 24.03 LTS SP4 Technical White Paper.pdf',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        PUBLISH_DATE: '2026/06',
        LTS: true,
        VERSION: '24.03-LTS-SP4',
        PLANNED_EOL: '2027/03',
      },
      {
        NAME: 'openEuler Embedded 26.03',
        DOWNLOAD_URL: '',
        DESC: 'يُصدر openEuler Embedded 26.03، المدعوم من بنية الذكاء المتجسد IB-Robot الشاملة، صورًا لـ Hi3403 وHi3591 والأجهزة الأخرى. يقدم هذا الإصدار مخلبًا متجسدًا للتحكم الذاتي عالي الدقة، ويوحّد التكامل بين الكاميرات، وأجهزة LiDAR، والميكروفونات، وأجهزة الإدراك الأخرى عبر برنامج تشغيل ROS 2. وهو يدعم جمع بيانات التشغيل عن بُعد باستخدام وحدات تحكم الواقع الافتراضي والأجهزة المحمولة، ويستخدم tensormsg للتحويل الآمن بين الرسائل ومصفوفات متعددة الأبعاد لتشغيل خدمات الاستدلال على نموذج VLA والسياسة. بالإضافة إلى ذلك، يتولى مشغل موحد جدولة الحركة وتنفيذ المسار مع دعم التخطيط MoveIt 2. يتيح النظام، مدعومًا بتكوينات YAML، التبديل السلس بنقرة واحدة بين المحاكاة والبيئات المادية.',
        RELEASE_DESC_URL: '',
        INSTALL_GUIDENCE_URL: '',
        SEEK_HELP_URL: '',
        GET_ISO_URL: '',
        WHITE_PAPER: '',
        LIFE_CYCLE_URL: '',
        PUBLISH_DATE: '',
        LTS: true,
        VERSION: '26.03',
        PLANNED_EOL: '',
        notTag: true,
      },
      {
        NAME: 'openEuler 24.03 LTS SP3',
        DOWNLOAD_URL: 'https://repo.openeuler.org/24.03 LTS SP3/',
        DESC: 'إن openEuler 24.03 LTS SP3، القائم على Linux Kernel 6.6، يقدم الدعم لبنية UnifiedBus SuperPoD الرائدة. وبفضل تصميمه المخصص ليلائم أحمال تشغيل الخوادم والسحابة والذكاء الاصطناعي، فإنه يوفر أداءً فائقًا وقابلية تطوير للبنية الأساسية الرقمية من الجيل المتطور.',
        RELEASE_DESC_URL:
          `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/24.03_LTS_SP3/server/releasenotes/releasenotes/introduction.html`,
        INSTALL_GUIDENCE_URL:
          `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/24.03_LTS_SP3/server/installation_upgrade/installation/installation_preparations.html`,
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        WHITE_PAPER: '',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        PUBLISH_DATE: '2025/12',
        LTS: true,
        VERSION: '24.03-LTS-SP3',
        PLANNED_EOL: '2027/12',
      },
      {
        NAME: 'openEuler 25.09',
        DOWNLOAD_URL: 'https://repo.openeuler.org/25.09/',
        DESC: 'openEuler 25.09، المبني على Linux kernel 6.6، هو إصدار مبتكر مزود بميزات جديدة تشمل الخادم والسحابة والحافة والسيناريوهات المضمنة لتحسين تجربة المطور والمستخدم.',
        RELEASE_DESC_URL:
          `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/25.09/server/quickstart/releasenotes/introduction.html`,
        INSTALL_GUIDENCE_URL:
          `${import.meta.env.VITE_SERVICE_DOCS_URL}/en/docs/25.09/server/installation_upgrade/installation/installation_preparations.html`,
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: '/en/mirror/select/?version=25.09',
        WHITE_PAPER: '',
        PUBLISH_DATE: '2025/09',
        LTS: false,
        VERSION: '25.09',
        PLANNED_EOL: '2026/03',
      },
      {
        NAME: 'openEuler 24.03 LTS SP2',
        DOWNLOAD_URL: 'https://repo.openeuler.org/24.03 LTS SP2/',
        DESC: 'إن openEuler 24.03 LTS SP2، القائم على Linux kernel 6.6، مناسب لسيناريوهات الخادم والسحابة والحافة وعمليات النشر المضمنة. وبفضل الميزات الأفضل في فئتها، يوفر هذا الطراز تجربة جديدة تمامًا للمطورين والمستخدمين الذين ينتمون إلى صناعات متنوعة.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/24.03_LTS_SP2/server/releasenotes/releasenotes/introduction.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/24.03_LTS_SP2/server/installation_upgrade/installation/installation_preparations.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        WHITE_PAPER: '/whitepaper/en/openEuler 24.03 LTS SP2 Technical White Paper.pdf',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        PUBLISH_DATE: '2025/06',
        LTS: true,
        VERSION: '24.03-LTS-SP2',
        PLANNED_EOL: '2026/03',
      },
      {
        NAME: 'openEuler 25.03',
        DOWNLOAD_URL: 'https://repo.openeuler.org/25.03/',
        DESC: 'تم تصميم openEuler 25.03، وهو إصدار ابتكاري قائم على Linux kernel 6.6، خصوصًا لسيناريوهات الخادم والسحابة والحافة والسيناريوهات المضمنة. فهو يوفر مجموعة رائعة من الميزات والوظائف الجديدة المصممة لرفع مستوى التجربة للمطورين والمستخدمين عبر مختلف الصناعات.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/25.03/server/releasenotes/releasenotes/introduction.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/25.03/server/installation_upgrade/installation/installation-preparations.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=25.03`,
        WHITE_PAPER:
        '/whitepaper/en/openEuler 25.03 Technical White Paper.pdf',
        PUBLISH_DATE: '2025/03',
        LTS: false,
        VERSION: '25.03',
        PLANNED_EOL: '2025/09',
      },
      {
        NAME: 'openEuler 24.03 LTS SP1',
        DOWNLOAD_URL: 'https://repo.openeuler.org/24.03 LTS SP1/',
        DESC: 'تم تصميم openEuler 24.03 LTS SP1، وهو إصدار محسن من LTS 24.03 القائم على 6.6 kernel، لسيناريوهات الخوادم والسحابة والحوسبة الحدية وعمليات النشر المضمنة، ما يوفر ميزات ووظائف جديدة للمطورين والمستخدمين عبر المجالات المتنوعة.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/24.03_LTS_SP1/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/24.03_LTS_SP1/docs/Installation/Installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WHITE_PAPER:
          '/whitepaper/en/openEuler 24.03 LTS SP1 Technical White Paper.pdf',
        PUBLISH_DATE: '2024/12',
        LTS: true,
        VERSION: '24.03 LTS SP1',
        PLANNED_EOL: '2026/12',
      },
      {
        NAME: 'openEuler 24.09',
        DOWNLOAD_URL: 'https://repo.openeuler.org/24.09/',
        WHITE_PAPER: '/whitepaper/en/openEuler 24.09 Technical White Paper.pdf',
        DESC: 'openEuler 24.09, built on Linux kernel 6.6, is suited for server, cloud, edge, AI, and embedded deployments. With best-in-class features, it delivers brand-new experience to developers and users spanning diverse industries.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/24.09/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/24.09/docs/Installation/Installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=24.09`,
        PUBLISH_DATE: '2024/09',
        LTS: false,
        VERSION: '24.09',
        PLANNED_EOL: '2025/03',
      },
      {
        NAME: 'openEuler 22.03 LTS SP4',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-22.03-LTS-SP4/',
        DESC: 'openEuler openEuler 22.03 LTS SP4 is the patch version of openEuler 22.03 LTS, and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP4/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP4/docs/Installation/Installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WHITE_PAPER:
          '/whitepaper/en/openEuler 22.03 LTS SP4 Technical White Paper.pdf',
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=22.03-LTS-SP4`,
        PUBLISH_DATE: '2024/06',
        LTS: true,
        VERSION: '22.03-LTS-SP4',
        PLANNED_EOL: '2026/06',
      },
      {
        NAME: 'openEuler 24.03 LTS',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-24.03-LTS/',
        DESC: 'openEuler 24.03 LTS, built on Linux kernel 6.6, is suited for server, cloud, edge, AI, and embedded deployments. With best-in-class features, it delivers brand-new experience to developers and users spanning diverse industries.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/24.03_LTS/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/24.03_LTS/docs/Installation/Installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        WHITE_PAPER:
          '/whitepaper/en/openEuler 24.03 LTS Technical White Paper.pdf',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=24.03-LTS`,
        PUBLISH_DATE: '2024/05',
        LTS: true,
        VERSION: '24.03-LTS',
        PLANNED_EOL: '2026/05',
      },
      {
        NAME: 'openEuler 22.03 LTS SP3',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-22.03-LTS-SP3/',
        DESC: 'openEuler openEuler 22.03 LTS SP3 is the patch version of openEuler 22.03 LTS, and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP3/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP3/docs/Installation/installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WHITE_PAPER:
          '/whitepaper/en/openEuler 22.03 LTS SP3 Technical White Paper.pdf',
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=22.03-LTS-SP3`,
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP3/virtual_machine_img/',
        EDGE_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP3/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP3/embedded_img/',
        PUBLISH_DATE: '2023/12',
        LTS: true,
        VERSION: '22.03-LTS-SP3',
        PLANNED_EOL: '2025/12',
      },
      {
        NAME: 'openEuler 23.09',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-23.09/',
        DESC: 'openEuler 23.09 is an innovation version designed based on Linux kernel 6.4 and is suited for server, cloud, edge, and embedded scenarios. It provides a variety of new features and functions and brings brand-new experience to developers and users in diverse industries.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/23.09/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/23.09/docs/Installation/Installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WHITE_PAPER: '/whitepaper/en/openEuler 23.09 Technical White Paper.pdf',
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=23.09`,
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-23.09/virtual_machine_img/',
        EDGE_IMAGE: 'https://repo.openeuler.org/openEuler-23.09/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-23.09/embedded_img/',
        PUBLISH_DATE: '2023/09',
        LTS: false,
        VERSION: '23.09',
        PLANNED_EOL: '2024/03',
      },
      {
        NAME: 'openEuler 22.03 LTS SP2',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-22.03-LTS-SP2/',
        DESC: 'openEuler openEuler 22.03 LTS SP2 is the patch version of openEuler 22.03 LTS, and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP2/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP2/docs/Releasenotes/installing-the-os.html',
        WHITE_PAPER:
          '/whitepaper/en/openEuler 22.03 LTS SP2 Technical White Paper.pdf',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=22.03-LTS-SP2`,
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP2/virtual_machine_img/',
        EDGE_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP2/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP2/embedded_img/',
        PUBLISH_DATE: '2023/06',
        LTS: true,
        VERSION: '22.03-LTS-SP2',
        PLANNED_EOL: '2024/03',
      },
      {
        NAME: 'openEuler 23.03',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-23.03/',
        DESC: 'openEuler 23.03 uses Linux Kernel 6.1 to explore technologies, adapt hardware, and innovate basic technologies and upper-layer applications for future openEuler LTS versions built on Linux Kernel 6.x.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/23.03/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/23.03/docs/Releasenotes/installing-the-os.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WHITE_PAPER: '/whitepaper/en/openEuler 23.03 Technical White Paper.pdf',
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=23.03`,
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-23.03/virtual_machine_img/',
        EDGE_IMAGE: 'https://repo.openeuler.org/openEuler-23.03/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-23.03/embedded_img/',
        PUBLISH_DATE: '2023/03',
        LTS: false,
        VERSION: '23.03',
        PLANNED_EOL: '2023/09',
      },
      {
        NAME: 'openEuler 22.03 LTS SP1',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-22.03-LTS-SP1/',
        DESC: 'openEuler openEuler 22.03 LTS SP1 is the patch version of openEuler 22.03 LTS, and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP1/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS_SP1/docs/Releasenotes/installing-the-os.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=22.03-LTS-SP1`,
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP1/virtual_machine_img/',
        EDGE_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP1/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS-SP1/embedded_img/',
        PUBLISH_DATE: '2022/12',
        LTS: true,
        VERSION: '22.03-LTS-SP1',
        PLANNED_EOL: '2024/12',
      },
      {
        NAME: 'openEuler 22.09',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-22.09/',
        DESC: 'Unleashing diversified computing power, openEuler 22.09 innovates versatile scenarios, builds optimal porting capability, and interconnects with OpenHarmony.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/22.09/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/22.09/docs/Installation/installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=22.09`,
        SERVER_IMAGE: 'https://repo.openeuler.org/openEuler-22.09/ISO/',
        WHITE_PAPER: '/whitepaper/en/openEuler-22.09 Technical White Paper.pdf',
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-22.09/virtual_machine_img/',
        EDGE_IMAGE: 'https://repo.openeuler.org/openEuler-22.09/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-22.09/embedded_img/',
        PUBLISH_DATE: '2022/09',
        LTS: false,
        VERSION: '22.09',
        PLANNED_EOL: '2023/03',
      },
      {
        NAME: 'openEuler 22.03 LTS',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-22.03-LTS/',
        DESC: 'openEuler 22.03-LTS is based on the 5.10 kernel and supports all scenarios of server, cloud, edge and embedded',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/22.03_LTS/docs/Installation/installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=22.03-LTS`,
        GET_ISO_URL: 'https://repo.openeuler.org/',
        CLOUD_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS/virtual_machine_img/',
        EDGE_IMAGE: 'https://repo.openeuler.org/openEuler-22.03-LTS/edge_img/',
        EMBEDDEN_IMAGE:
          'https://repo.openeuler.org/openEuler-22.03-LTS/embedded_img/',
        PUBLISH_DATE: '2022/03',
        LTS: true,
        VERSION: '22.03-LTS',
        PLANNED_EOL: '2024/03',
      },
      {
        NAME: 'openEuler 20.03 LTS SP4',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-20.03-LTS-SP4/',
        DESC: 'openEuler 20.03 LTS SP3 is the patch version of openEuler 20.03 LTS, and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP4/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP4/docs/Installation/Installation.html',
        SEEK_HELP_URL: 'https://atomgit.com/openeuler/community-issue',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: '/en/other/lifecycle/',
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=20.03-LTS-SP4`,
        PUBLISH_DATE: '2023/12',
        LTS: true,
        VERSION: '20.03-LTS-SP4',
        PLANNED_EOL: '2025/11',
      },
      {
        NAME: 'openEuler 20.03 LTS SP3',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-20.03-LTS-SP3/',
        DESC: 'openEuler 20.03 LTS SP3 is the patch version of openEuler 20.03 LTS, and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP3/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP3/docs/Installation/Installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=20.03-LTS-SP3`,
        PUBLISH_DATE: '2021/12',
        LTS: true,
        VERSION: '20.03-LTS-SP3',
        PLANNED_EOL: '2023/12',
      },
      {
        NAME: 'openEuler 21.09',
        DOWNLOAD_URL: 'https://archives.openeuler.openatom.cn/openEuler-21.09/',
        DESC: 'openEuler 21.09 is an innovative version for all scenarios, including edge and embedded devices. It enhances server and cloud computing features, and incorporates key technologies including cloud-native scheduling algorithms for hybrid service deployments and the container operating system KubeOS.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/21.09/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/21.09/docs/Installation/installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://archives.openeuler.openatom.cn/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WHITE_PAPER:
          '/whitepaper/en/openEuler%2021.09%20%E6%8A%80%E6%9C%AF%E7%99%BD%E7%9A%AE%E4%B9%A6-en.pdf',
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=21.09`,
        PUBLISH_DATE: '2021/09',
        LTS: false,
        VERSION: '21.09',
        PLANNED_EOL: '2022/03',
      },
      {
        NAME: 'openEuler 20.03 LTS SP2',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-20.03-LTS-SP2/',
        DESC: 'openEuler 20.03 LTS SP2 is the patch version of openEuler 20.03 LTS,and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP2/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP2/docs/Installation/Installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=20.03-LTS-SP2`,
        PUBLISH_DATE: '2021/07',
        LTS: true,
        VERSION: '20.03-LTS-SP2',
        PLANNED_EOL: '2022/04',
      },
      {
        NAME: 'openEuler 21.03',
        DOWNLOAD_URL: 'https://archives.openeuler.openatom.cn/openEuler-21.03/',
        DESC: 'The openEuler 21.03 version is an innovative release for open scenarios,with a lifecycle of six months.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/21.03/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/21.03/docs/Installation/Installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://archives.openeuler.openatom.cn/',
        WHITE_PAPER: '/whitepaper/en/openEuler-21.03-Technical-White-Paper.pdf',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=21.03`,
        PUBLISH_DATE: '2021/03',
        LTS: false,
        VERSION: '21.03',
        PLANNED_EOL: '2021/09',
      },
      {
        NAME: 'openEuler 20.03 LTS SP1',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-20.03-LTS-SP1/',
        DESC: 'openEuler 20.03 LTS SP1 is the patch version of openEuler 20.03 LTS,and both versions have the same lifecycle.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/Installation/Installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=20.03-LTS-SP1`,
        PUBLISH_DATE: '2020/12',
        LTS: true,
        VERSION: '20.03-LTS-SP1',
        PLANNED_EOL: '2022/12',
      },
      {
        NAME: 'openEuler 20.09',
        DOWNLOAD_URL: 'https://archives.openeuler.openatom.cn/openEuler-20.09/',
        DESC: 'The openEuler 20.09 LTS version is an innovative release for open scenarios,with a lifecycle of six months.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/20.09/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/20.09/docs/Installation/Installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://archives.openeuler.openatom.cn/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=20.09`,
        PUBLISH_DATE: '2020/09',
        LTS: false,
        VERSION: '20.09',
        PLANNED_EOL: '2021/03',
      },
      {
        NAME: 'openEuler 20.03 LTS',
        DOWNLOAD_URL: 'https://repo.openeuler.org/openEuler-20.03-LTS/',
        DESC: 'The openEuler 20.03 LTS edition, with a four-year lifecycle, is a standard distribution that meets open scenario requirements, which has a lifecycle of four years.',
        RELEASE_DESC_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS/docs/Releasenotes/release_notes.html',
        INSTALL_GUIDENCE_URL:
          'https://docs.openeuler.org/en/docs/20.03_LTS/docs/Installation/Installation.html',
        SEEK_HELP_URL:
          'https://atomgit.com/openeuler/community-issue/blob/master/README.md',
        GET_ISO_URL: 'https://repo.openeuler.org/',
        LIFE_CYCLE_URL: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/other/lifecycle/`,
        WEBSITE_SELECT: `${import.meta.env.VITE_MAIN_DOMAIN_URL}/en/mirror/select/?version=20.03-LTS`,
        PUBLISH_DATE: '2020/03',
        LTS: true,
        VERSION: '20.03-LTS',
        PLANNED_EOL: '2021/03',
      },
    ],
  },
};

export const SCENARIO_LIST = new Map(
  [
    { key: '', value: '', labelKey: 'download.all' },
    { key: 'ISO', value: 'ISO', labelKey: 'download.SCENARIOS_ISO' },
    { key: 'edge_img', value: 'edge_img', labelKey: 'download.SCENARIOS_EDGE' },
    {
      key: 'virtual_machine_img',
      value: 'virtual_machine_img',
      labelKey: 'download.SCENARIOS_VIRTUAL',
    },
    {
      key: 'embedded_img',
      value: 'embedded_img',
      labelKey: 'download.SCENARIOS_EMBEDDED',
    },
    {
      key: 'DevStation',
      value: 'DevStation',
      labelKey: 'download.SCENARIOS_DEVSTATION',
    },
    // fix 字符串切换响应式丢失问题
  ].map((item) => [
    item.key,
    {
      value: item.value,
      label: computed(() => i18n.global.t(item.labelKey)),
    },
  ])
);

// 历史版本版本类型筛选
export const VERSION_LIST = [
  { value: 'ALL', labelKey: 'download.all' },
  { value: 'LTS', labelKey: 'download.filterLts' },
  { value: 'NEW', labelKey: 'download.filterInnovation' },
  //切换响应式丢失问题
].map((item) => {
  return {
    value: item.value,
    label: computed(() => i18n.global.t(item.labelKey)),
  };
});

export const archMap = new Map([
  [
    'x86_64',
    {
      value: 'x86_64',
      label: 'x86_64',
    },
  ],
  [
    'aarch64',
    {
      value: 'aarch64',
      label: 'aarch64',
    },
  ],
  [
    'arm32',
    {
      value: 'arm32',
      label: 'ARM32',
    },
  ],
  [
    'loongarch64',
    {
      value: 'loongarch64',
      label: 'LoongArch64',
    },
  ],
  [
    'riscv64',
    {
      value: 'riscv64',
      label: 'RISC-V',
    },
  ],
  [
    'power',
    {
      value: 'power',
      label: 'Power',
    },
  ],
  [
    'sw64',
    {
      value: 'sw64',
      label: 'SW64',
    },
  ],
]);

const anchorList = computed(() => {
  return [
    { title: i18n.global.t('download.community'), id: 'community-releases' },
    ...getOs[i18n.global.locale.value].map((item) => ({
      title: item.title,
      id: item.id,
    })),
    { title: i18n.global.t('download.getResource'), id: 'related-resources' },
    { title: i18n.global.t('download.support'), id: 'services-resources' },
  ];
});
export { anchorList };
