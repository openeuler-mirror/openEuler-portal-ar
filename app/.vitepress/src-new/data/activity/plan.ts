import apply from '~@/assets/category/event/overview/apply.png';
import appapplicationReviewly from '~@/assets/category/event/overview/application-review.png';
import hold from '~@/assets/category/event/overview/hold.png';
import material1 from '~@/assets/category/event/overview/material1.jpg';
import material2 from '~@/assets/category/event/overview/material2.jpg';

import applyDark from '~@/assets/category/event/overview/apply-dark.png';
import appapplicationReviewlyDark from '~@/assets/category/event/overview/application-review-dark.png';
import holdDark from '~@/assets/category/event/overview/hold-dark.png';

import IconOpensource from '~icons/event/icon-opensource.svg';
import IconDeveloper from '~icons/event/icon-developer.svg';
import IconCollege from '~icons/event/icon-college.svg';
import IconRelease from '~icons/event/icon-release.svg';

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

export const yearPlanData = {
  ar: {
    opensource: {
      title: 'Open Source Summits',
      id: 'opensource',
      icon: IconOpensource,
      events: [
        { month: '1' },
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
        { month: '3' },
        { month: '4' },
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
        { month: '7' },
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
        { month: '10' },
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
      id: 'ecology',
      icon: IconOpensource,
      events: [
        { month: '1' },
        { month: '2' },
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
        { month: '5' },
        { month: '6' },
        { month: '7' },
        { month: '8' },
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
        { month: '11' },
        { month: '12' },
      ],
    },
  },
};

export const applyData = {
  ar: []
};
