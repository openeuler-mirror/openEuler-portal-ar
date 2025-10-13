import opensource from '@/assets/category/year-plan/opensource.png';
import opensoucrceTitle from '@/assets/category/year-plan/opensource-title.png';
import ecology from '@/assets/category/year-plan/ecology.png';
import ecologyTitle from '@/assets/category/year-plan/ecology-title.png';
import developer from '@/assets/category/year-plan/developer.png';
import developerTitle from '@/assets/category/year-plan/developer-title.png';
import college from '@/assets/category/year-plan/college.png';
import collegeTitle from '@/assets/category/year-plan/college-title.png';
import edition from '@/assets/category/year-plan/edition.png';
import editionTitle from '@/assets/category/year-plan/edition-title.png';

export const yearPlanData = {
  ar: {
    opensource: {
      title: 'Open Source Summits',
      contentBg: opensource,
      titleBg: opensoucrceTitle,
      id: 'opensource',
      events: [
        {
          month: '2',
          actives: [
            {
              location: 'Brussels,Belgium',
              activeName: 'FOSDEM',
              href: 'https://fosdem.org/2025/',
            },
          ],
        },
        {
          month: '5',
          actives: [
            {
              location: 'Paris, France',
              activeName: 'RISC-V Summit Europe',
              href: 'https://riscv-europe.org/summit/2025/',
            },
            {
              location: 'Lisbon, Portugal',
              activeName: 'Linaro Connect 2025',
              href: 'https://www.linaro.org/connect/',
            },
          ],
        },
        {
          month: '6',
          actives: [
            {
              location: 'Hong Kong, China',
              activeName: 'KubeCon + CloudNativeCon China',
              href: 'https://events.linuxfoundation.org/kubecon-cloudnativecon-china/',
            },
          ],
        },
        {
          month: '8',
          actives: [
            {
              location: 'Amsterdam, Netherlands',
              activeName: 'Open Source Summit Europe',
              href: 'https://events.linuxfoundation.org/open-source-summit-europe/',
            },
            {
              location: 'Amsterdam, Netherlands',
              activeName: 'AI_dev: Open Source GenAI & ML Summit Europe',
              href: 'https://events.linuxfoundation.org/ai-dev-europe/',
            },
          ],
        },
        {
          month: '9',
          actives: [
            {
              location: 'China',
              activeName: 'OpenAtom Open Source Eco-Conference 2025',
            },
            {
              location: 'Milan,Italy',
              activeName: 'KVM Forum',
              href: 'https://kvm-forum.qemu.org/2025/',
            },
          ],
        },
        {
          month: '11',
          actives: [
            {
              location: 'China',
              activeName: 'Operating System Conference &openEuler Summit 2025',
            },
          ],
        },
        {
          month: '12',
          actives: [
            {
              location: 'Tokyo, Japan',
              activeName: 'OSS & AI_Dev Japan',
              href: 'https://events.linuxfoundation.org/ai-dev-japan-2025/',
            },
          ],
        },
      ],
    },
    ecology: {
      title: 'Ecosystem Tech Conferences',
      contentBg: ecology,
      titleBg: ecologyTitle,
      id: 'ecology',
      events: [
        {
          month: '3',
          actives: [
            {
              location: 'Beijing, China',
              activeName: 'KCD Beijing 2025',
              href: 'https://community.cncf.io/events/details/cncf-kcd-beijing-presents-kcd-beijing-2025/',
            },
          ],
        },
        {
          month: '4',
          actives: [
            {
              location: 'Hangzhou, China',
              activeName: 'openEuler Developer Day 2025',
            },
          ],
        },
        {
          month: '9',
          actives: [
            {
              location: 'China',
              activeName: 'CID 2025',
            },
          ],
        },
        {
          month: '10',
          actives: [
            {
              location: 'Changsha, China',
              activeName: "1024 Programmers' Day",
            },
            {
              location: 'China',
              activeName: 'CLK 2025',
            },
          ],
        },
      ],
    },
  }
} as any;
export const editionData = {
  title: {
    ar: 'Release Plan',
  },
  contentBg: edition,
  titleBg: editionTitle,
  id: 'edition',
  actives: [
    {
      time: '3.30',
      content: '25.03',
      month: 3,
    },
    {
      time: '6.30',
      content: '24.03 LTS SP2',
      month: 6,
    },
    {
      time: '9.30',
      content: '25.09',
      month: 9,
    },
    {
      time: '12.31',
      content: '24.03 LTS SP3',
      month: 12,
    },
  ],
};
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
