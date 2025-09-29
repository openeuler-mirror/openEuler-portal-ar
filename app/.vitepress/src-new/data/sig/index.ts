import exchangeSigIcon from '~icons/sig/exchange-sig.svg';
import joinSigIcon from '~icons/sig/join-sig.svg';
import operateSigIcon from '~icons/sig/operate-sig.svg';

import lookingSomeoneIcon from '~icons/sig/looking-someone.svg';
import applyForIcon from '~icons/sig/apply-for.svg';
import communicateIcon from '~icons/sig/communicate.svg';
import approvedIcon from '~icons/sig/approved.svg';
import improveIcon from '~icons/sig/improve.svg';
import operateIcon from '~icons/sig/operate.svg';
import meetingGuide from '~icons/sig/sig-meeting.svg';
import roleDescription from '~icons/sig/role-description.svg';

import meetingGuideDark from '~icons/sig/sig-meeting.svg';
import roleDescriptionDark from '~icons/sig/role-description.svg';

import meetingGuide_bg from '~@/assets/category/sig/meeting-guide_bg.png';
import roleDescription_bg from '~@/assets/category/sig/role-description_bg.png';

import architecturesProcessorsKernelDrivers from '~icons/sig/architectures-processors-kernel-drivers.svg';
import basicFunctionsFeaturesTools from '~icons/sig/basic-functions-features-tools.svg';
import buildSystemsToolsDependencies from '~icons/sig/build-systems-tools-dependencies.svg';
import cloudNativeInfrastructure from '~icons/sig/cloud-native-infrastructure.svg';
import communityEcosystemDevelopment from '~icons/sig/community-ecosystem-development.svg';
import communityFunctionalOrganizations from '~icons/sig/community-functional-organizations.svg';
import communityInfrastructure from '~icons/sig/community-infrastructure.svg';
import desktopEnvironments from '~icons/sig/desktop-environments.svg';
import industrySolutionsApplications from '~icons/sig/industry-solutions-applications.svg';
import softwarePackageManagement from '~icons/sig/software-package-management.svg';
import toolchainsLanguagesRuntimes from '~icons/sig/toolchains-languages-runtimes.svg';
import universalMiddleware from '~icons/sig/universal-middleware.svg';
import versionRelease from '~icons/sig/version-release.svg';

export const welcomeJoin = [
  {
    icon: operateSigIcon,
    title: {
      ar: 'SIG Operations',
    },
    subtitle: {
      ar: 'An SIG is established for one or more specific technical topics. Core members of an SIG can manage each group, while SIG members collaborate to drive deliverable outcomes for the openEuler community.',
    },
  },
  {
    icon: exchangeSigIcon,
    title: {
      ar: 'SIG Communication',
    },
    subtitle: {
      ar: "You can find SIG information and contact details for any project in the README.md file of the SIG's code repository. We encourage active participation in SIG communications through mailing lists, public meetings, and other contact methods specified in README.md.",
    },
  },
  {
    icon: joinSigIcon,
    title: {
      ar: 'Contributing to SIGs',
    },
    subtitle: {
      ar: 'Each SIG maintains one or more projects on Gitee, with each project containing one or more repositories where SIG deliverables are stored. You can contribute to SIGs by submitting issues or pull requests, participating in discussions, conducting code reviews, and more. Refer to the <a href="/ar/community/contribution" target="_blank" rel="noopener noreferrer" class="underline-link">contribution guide</a> for details.',
    },
  },
];

export const aboutSig = [
  {
    icon: roleDescription,
    iconDark: roleDescriptionDark,
    title: {
      ar: 'SIG Member Roles',
    },
    subtitle: {
      ar: 'Each contributor assumes distinct roles and responsibilities within the openEuler community.',
    },
    path: {
      ar: '/ar/sig/role-description/',
    },
    backgroud: roleDescription_bg,
  },
  {
    icon: meetingGuide,
    iconDark: meetingGuideDark,
    title: {
      ar: '',
    },
    subtitle: {
      ar: '',
    },
    path: {
      ar: '',
    },
    backgroud: meetingGuide_bg,
  },
];

export const applicationProcess = [
  {
    icon: lookingSomeoneIcon,
    process: {
      ar: 'Find',
    },
    detail: {
      ar: 'Find two or three people with shared goals in the openEuler community, whether as an individual or company, to discuss and set up a SIG that will maintain software packages in a specific technical area within the openEuler community or launch incubation projects.',
    },
  },
  {
    icon: applyForIcon,
    process: {
      ar: 'Apply',
    },
    detail: {
      ar: 'Create an application file on Gitee and initiate a pull request (PR) according to the procedure for setting up a SIG. Make an appointment for attending the Technical Committee (TC) meeting.',
    },
  },
  {
    icon: communicateIcon,
    process: {
      ar: 'Discuss',
    },
    detail: {
      ar: 'At the regular TC meeting, discuss and reach an agreement on the technical scope and maintenance objectives of the SIG.',
    },
  },
  {
    icon: approvedIcon,
    process: {
      ar: 'Approve',
    },
    detail: {
      ar: 'The TC approves the establishment of the SIG. The corresponding PR is merged into the code repository, and the infrastructure automatically establishes the corresponding repository.',
    },
  },
  {
    icon: operateIcon,
    process: {
      ar: 'Operate',
    },
    detail: {
      ar: 'The SIG starts to operate. Members use the mailing list and regular meetings for discussion and operation.',
    },
  },
  {
    icon: improveIcon,
    process: {
      ar: 'Improve',
    },
    detail: {
      ar: 'The TC periodically reviews the SIG operation and provides guidance.',
    },
  },
];

export const landscapeIconMap = new Map([
  [
    'Basic Functions/Features/Tools',
    {
      icon: basicFunctionsFeaturesTools,
      color: {
        light: '#009ce5',
        dark: '#2fb2ea',
      },
    },
  ],
  [
    'Architectures/Processors/Kernel/Drivers',
    {
      icon: architecturesProcessorsKernelDrivers,
      color: {
        light: '#A129C',
        dark: '#BB55D1',
      },
    },
  ],
  [
    'buildSystemsToolsDependencies',
    {
      icon: buildSystemsToolsDependencies,
      color: {
        light: '#fa7305',
        dark: '#fb8f2b',
      },
    },
  ],
  [
    'Cloud Native Infrastructure',
    {
      icon: cloudNativeInfrastructure,
      color: {
        light: '#00b385',
        dark: '#27c298',
      },
    },
  ],
  [
    'Community Ecosystem Development',
    {
      icon: communityEcosystemDevelopment,
      color: {
        light: '#007af0',
        dark: '#3197f3',
      },
    },
  ],
  [
    'Community Functional Organizations',
    {
      icon: communityFunctionalOrganizations,
      color: {
        light: '#3d14bf',
        dark: '#7c64d9',
      },
    },
  ],
  [
    'Community Infrastructure',
    {
      icon: communityInfrastructure,
      color: {
        light: '#1f3fb3',
        dark: '#6183d1',
      },
    },
  ],
  [
    'Desktop Environments',
    {
      icon: desktopEnvironments,
      color: {
        light: '#A7C900',
        dark: '#B1d42a',
      },
    },
  ],
  [
    'Industry Solutions/Applications',
    {
      icon: industrySolutionsApplications,
      color: {
        light: '#e00070',
        dark: '#e62e84',
      },
    },
  ],
  [
    'Software Package Management',
    {
      icon: softwarePackageManagement,
      color: {
        light: '#70b31b',
        dark: '#8ac23e',
      },
    },
  ],
  [
    'Toolchains/Languages/Runtimes',
    {
      icon: toolchainsLanguagesRuntimes,
      color: {
        light: '#00A7B3',
        dark: '#27BAC2',
      },
    },
  ],
  [
    'Universal Middleware',
    {
      icon: universalMiddleware,
      color: {
        light: '#f0bc00',
        dark: '#f5ca50',
      },
    },
  ],
  [
    'Version Release',
    {
      icon: versionRelease,
      color: {
        light: '#e78900',
        dark: '#eca52f',
      },
    },
  ],
]);
