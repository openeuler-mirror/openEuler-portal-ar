import roleDescCommitter from '~@/assets/category/sig/role-desc-committer.jpg';
import roledescContributor from '~@/assets/category/sig/role-desc-contributor.jpg';
import roleDescMaintainer from '~@/assets/category/sig/role-desc-maintainer.jpg';
import iconContributor from '~icons/sig/icon-contributor.svg';
import iconHadContributor from '~icons/sig/icon-had-contributor.svg';

import roleDescCommitterMb from '~@/assets/category/sig/role-desc-committer-mb.jpg';
import roledescContributorMb from '~@/assets/category/sig/role-desc-contributor-mb.jpg';
import roleDescMaintainerMb from '~@/assets/category/sig/role-desc-maintainer-mb.jpg';
import contributorTitle from '~@/assets/category/sig/contributor-title.png';
import committerTitle from '~@/assets/category/sig/committer-title.png';
import maintainerTitle from '~@/assets/category/sig/maintainer-title.png';
import contributorTitleMb from '~@/assets/category/sig/contributor-title-mb.png';
import committerTitleMb from '~@/assets/category/sig/committer-title-mb.png';
import maintainerTitleMb from '~@/assets/category/sig/maintainer-title-mb.png';

import contributorPoint from '~@/assets/category/sig/contributor-point.png';
import contributorLight from '~@/assets/category/sig/contributor-light.png';
import contributorMbLight from '~@/assets/category/sig/contributor-mb-light.png';
import contributorDark from '~@/assets/category/sig/contributor-dark.png';
import contributorMbDark from '~@/assets/category/sig/contributor-mb-dark.png';

import committerPoint from '~@/assets/category/sig/committer-point.png';
import committeLight1 from '~@/assets/category/sig/committer-light1.png';
import committerDark1 from '~@/assets/category/sig/committer-dark1.png';
import committerMbLight1 from '~@/assets/category/sig/committer-mb-light1.png';
import committerMbDark1 from '~@/assets/category/sig/committer-mb-dark1.png';
import committerLight2 from '~@/assets/category/sig/committer-light2.png';
import committerDark2 from '~@/assets/category/sig/committer-dark2.png';
import committerMbLight2 from '~@/assets/category/sig/committer-mb-light2.png';
import committerMbDark2 from '~@/assets/category/sig/committer-mb-dark2.png';

import maintainerPoint from '~@/assets/category/sig/maintainer-point.png';
import maintainerLight from '~@/assets/category/sig/maintainer-light.png';
import maintainerDark from '~@/assets/category/sig/maintainer-dark.png';
import maintainerMbLight1 from '~@/assets/category/sig/maintainer-mb-light1.png';
import maintainerMbDark1 from '~@/assets/category/sig/maintainer-mb-dark1.png';
import maintainerMbLight2 from '~@/assets/category/sig/maintainer-mb-light2.png';
import maintainerMbDark2 from '~@/assets/category/sig/maintainer-mb-dark2.png';

export const communityMember = {
  title: {
    ar: 'Community Roles',
  },
  subtitle: {
    ar: 'In the openEuler community, most roles operate within the scope of Special Interest Groups (SIGs). While maintainers and committers have identical permissions on Gitee, they differ primarily in their SIG governance responsibilities, as outlined below.',
  },
  viewDetail: {
    ar: 'Learn More',
  },
  types: [
    {
      bg: roledescContributor,
      bgMb: roledescContributorMb,
      imgTitle: contributorTitle,
      imgTitleMb: contributorTitleMb,
      name: {
        ar: 'Contributor',
      },
      responsibilitiy: {
        ar: 'Responsibilities: Key contributors to SIGs and projects, serving as primary developers and issue resolvers for code repositories',
      },
      href:'contributor'
    },
    {
      bg: roleDescCommitter,
      bgMb: roleDescCommitterMb,
      imgTitle: committerTitle,
      imgTitleMb: committerTitleMb,
      name: {
        ar: 'Committer',
      },
      responsibilitiy: {
        ar: 'Responsibilities: Stewards of designated SIG repositories, acting as primary custodians who review contributions from other members',
      },
      requirement: {
        ar: 'Requirements: Active SIG contributors with extensive experience and willingness to dedicate time to review activities',
      },
      href:'committer'
    },
    {
      bg: roleDescMaintainer,
      bgMb: roleDescMaintainerMb,
      imgTitle: maintainerTitle,
      imgTitleMb: maintainerTitleMb,
      name: {
        ar: 'Maintainer',
      },
      responsibilitiy: {
        ar: 'Responsibilities: SIG leaders, coordinators, and strategic planners responsible for guiding SIG development and evolution, potentially serving as project owners',
      },
      requirement: {
        ar: 'Requirements: Seasoned professionals with strong sense of responsibility, exceptional technical expertise, and proven management skills',
      },
      href:'maintainer'
    },
  ],
  cards: [
    {
      icon: iconContributor,
      name: {
        ar: 'New Contributor',
      },
      desc: {
        ar: 'Welcome to join the community. Start contributing by referring to: <a href="https://gitee.com/openeuler/community/blob/master/zh/contributors/README.md" target="_blank" rel="noopener noreferrer" class="underline-link">contribution guidience</a>',
      },
    },
    {
      icon: iconHadContributor,
      name: {
        ar: 'Existing Community Member',
      },
      desc: {
        ar: `Existing community members must adhere to the <a href="https://gitee.com/openeuler/community/blob/master/code-of-conduct_en.md" target="_blank" rel="noopener noreferrer" class="underline-link">openEuler Community Code of Conduct</a> and <a href="https://gitee.com/openeuler/community/blob/master/zh/technical-committee/governance/openEuler%E7%A4%BE%E5%8C%BA%E5%BC%80%E5%8F%91%E8%A1%8C%E4%B8%BA%E8%A7%84%E8%8C%83.md" target="_blank" rel="noopener noreferrer" class="underline-link">openEuler Community Code of Conduct for Development</a>, demonstrate familiarity with SIG structures, roles, policies, software tools, and conventions, along with relevant technical and/or documentation skills. Refer to the following content for detailed expectations, responsibilities, and requirements for community roles.`,
      },
    },
  ],
};

export const contributor = {
  id: 'contributor',
  title: {
    ar: 'Contributor',
  },
  subtitle: {
    ar: [`Contributors are continuously active members within the openEuler community who engage with openEuler through various means including code contributions, documentation creation, project development, community maintenance, issue resolution, and participation in meetings and events, thereby driving the community's ongoing growth.`],
  },
  cardPointBg: contributorPoint,
  cards: [
    {
      bg: contributorLight,
      bgDark: contributorDark,
      bgMb: contributorMbLight,
      bgMbDark: contributorMbDark,
      title: {
        ar: 'Requirement',
      },
      desc: {
        ar: '',
      },
      points: {
        ar: [
          'Registered member on Gitee',
          'Contribute to SIG or community in many ways, including but not limited to: Submitting or reviewing PR(Pull Request) on Gitee; Documenting or commenting issues on Gitee; Participating in SIG or community discussions.',
          'Read <a href="https://gitee.com/openeuler/community/blob/master/zh/contributors/README.md" target="_blank" rel="noopener noreferrer" class="underline-link">Contribution Guideline</a>',
          'Join one or more SIGs',
        ],
      },
    },
    {
      bg: contributorLight,
      bgDark: contributorDark,
      bgMb: contributorMbLight,
      bgMbDark: contributorMbDark,
      title: {
        ar: 'Responsibility and Powers',
      },
      desc: {
        ar: '',
      },
      notice: {
        ar: `Note: Contributors should actively take part in code review and if they'd like to help more, strive to be a Committer of SIG.`,
      },
      points: {
        ar: [
          'Respond to assigned issues and PR(Pull Request)',
          'Contributed code should satisfy the criteria described below: Well tested; Passing the test correctly and completely; Resolving subsequent errors or problems.',
          `Agree PR by executing '/ lgtm'`,
          'Assign issue or PR, ask members to comment by execting/assign @username',
          'Run PR test automatically. /ok-to-test is not necessary',
          'Operate the PR with needs-ok-to-test label by execting /ok-to-test and close PR by execting /close.',
        ],
      },
    },
  ],
};

export const committer = {
  id: 'committer',
  title: {
    ar: 'Committer',
  },
  subtitle: {
    ar: ['Reviewers are core contributors who possess code merge privileges and serve as stewards of code repositories, ensuring code quality while bearing significant responsibility for project advancement.', 'Reviewers are specified in the "Committer" entries in the sig-info.yaml file in SIG repositories.'],
  },
  cardPointBg: committerPoint,
  cards: [
    {
      bg: committeLight1,
      bgDark: committerDark1,
      bgMb: committerMbLight1,
      bgMbDark: committerMbDark1,
      title: {
        ar: 'Requirement',
      },
      desc: {
        ar: '',
      },
      points: {
        ar: [
          'Have worked in openEuler for At least 3 months as contributors',
          'Participated in at least 6 PR reviews as the main reviewer',
          'Review or merge at least 30 PR into the code repo',
          'Being Familiar with code repo',
          'Can be self-nominated or nominated by the committers or maintainer of the SIG',
        ],
      },
    },
    {
      bg: committerLight2,
      bgDark: committerDark2,
      bgMb: committerMbLight2,
      bgMbDark: committerMbDark2,
      title: {
        ar: 'Responsibility and Privilege',
      },
      desc: {
        ar: '',
      },
      points: {
        ar: [
          'Review PR：Review the PR submitted by contributor. The review can refer to community coding suggestions and <a href="https://gitee.com/openeuler/security-committee/blob/master/guide/SecureCoding_en.md" target="_blank" rel="noopener noreferrer" class="underline-link">openEuler Secure Coding Guide</a>.',
          'Distribute and deal with problems:Please refer to <a href="https://gitee.com/openeuler/community/blob/master/en/contributors/issue-submit.md" target="_blank" rel="noopener noreferrer" class="underline-link">Issue Submission and Handling Guide</a>.',
          `Tracking dependency issues：In the development branch, software package's dependencies in the SIG may be broken due to the software package updates in other SIG. At this time, the Committer will receive an alert. Then, the committer should try to rebuild the software package. Because dependency problem may prevent users from updating the system, the build team will also participates in rebuilding packages that have dependency issues, but the Maintainer should not rely on these works.`,
          'Notify SIG that may be affected due to interface changes：Because other SIGs or projects rely on software package of this SIG, changes to the package interface may affect them. Maintainer should review the dependency impact caused by decision changes. Then Maintainer should announce and send alert emails of API or ABI changes. Those work should be completed at least one week before the change occurs, and all SIGs that may be affected should be notified. For detailed informationes please refer to <a href="https://www.openeuler.org/en/sig/role-description/" target="_blank" rel="noopener noreferrer" class="underline-link">API Change Notification Process</a>.',
          'Update and maintain package version：Follow the startegy of <a href="https://www.openeuler.org/en/sig/role-description/" target="_blank" rel="noopener noreferrer" class="underline-link">Software Package Update Quality Control Policies</a> and complete the package update.',
          'Collaborate with upstream community, including: Push all changes to upstream community; Participate in upstream community mailing list; Get the account of the Bug Tracker of the upstream community, and track the important bugs of the upstream community; Push serious errors to upstream community for help For further information, please refer to <a href="https://www.openeuler.org/en/sig/role-description/" target="_blank" rel="noopener noreferrer" class="underline-link">Upstream Software Package Management Suggestions</a>',
          'Collaborate with test team including: When you submit the software packages, the information how to debug and classify the packages should be provided to QA for problem classification; Provide basic functional test cases for regression testing; When you update the software package, the test cases related to fixed problems in the update package should be provided to QA',
        ],
      },
    },
  ],
};

export const maintainer = {
  id: 'maintainer',
  title: {
    ar: 'Maintainer',
  },
  subtitle: {
    ar: ['Maintainers serve as managers, leaders, and strategic planners of SIGs, spearheading the review, updates, and fixes of code to ensure stability and compatibility, making them pivotal figures in the project ecosystem. Maintainers hold all the responsibilities and authorities that reviewers possess. Additionally, maintainers are responsible for technical roadmap planning and both internal and external coordination efforts for their SIGs.', 'Maintainers are specified in the "Maintainer" entries in the sig-info.yaml file in SIG repositories.'],
  },
  cardPointBg: maintainerPoint,
  cards: [
    {
      bg: maintainerLight,
      bgDark: maintainerDark,
      bgMb: maintainerMbLight1,
      bgMbDark: maintainerMbDark1,
      title: {
        ar: 'Requirement',
      },
      desc: {
        ar: '',
      },
      points: {
        ar: [
          'At least 3 months as committer',
          'Participated in at least 12 PR reviews as the main reviewer',
          'Review or merge at least 30 basic PR into the code repo',
          'Being familiar with code repo',
          'Could be self-nominated or nominated by sub-project Maintainer, and there is no objection from other sub-project Maintainers.',
        ],
      },
    },
    {
      bg: maintainerLight,
      bgDark: maintainerDark,
      bgMb: maintainerMbLight2,
      bgMbDark: maintainerMbDark2,
      title: {
        ar: 'Responsibility and Powers',
      },
      desc: {
        ar: '',
      },
      points: {
        ar: [
          'Work out technical roadmap for SIG project：Including planning the SIG technical direction, roadmap, solution of software architecture evolution',
          'Prepare release plan for SIG project: Make key requirements and release plans for project;Participate in community PM activities and coordinate SIG initiatives to match community release milestone schedules',
          'Participate in community coordination activities：As a representative of SIG, Maintainer should attend the meetings and activites organized by Technical committee or the Community Council',
          'Organize SIG meetings：Regularly organize SIG meetings and make decisions on contentious issues within SIG',
        ],
      },
    },
  ],
};
