export const typeMap = new Map([
  [
    'Low',
    {
      value: 'Low',
      label: {
        ar: 'Low',
      },
      score: '0.01-3.9',
    },
  ],
  [
    'Medium',
    {
      value: 'Medium',
      label: {
        ar: 'Medium',
      },
      score: '4.0-6.9',
    },
  ],
  [
    'High',
    {
      value: 'High',
      label: {
        ar: 'High',
      },
      score: '7.0-8.9',
    },
  ],
  [
    'Critical',
    {
      value: 'Critical',
      label: {
        ar: 'Critical',
      },
      score: '9.0-10.0',
    },
  ],
]);

export const securityNoticeNos = [
  'openEuler-SA-2023-1487',
  'openEuler-SA-2023-1489',
  'openEuler-SA-2023-1504',
  'openEuler-SA-2023-1505',
];

// 从2020年开始生成年份
const currentYear = new Date().getFullYear();
const queryYears = [] as string[];
const YEAR = 2020;
for (let year = currentYear; year >= YEAR; year--) {
  queryYears.push(year.toString());
}
queryYears.unshift('');

export { queryYears };
