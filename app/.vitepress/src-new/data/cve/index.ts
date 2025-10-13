export const statusMap = new Map([
  [
    'all',
    {
      value: '',
      label: {
        ar: 'الكل',
      },
      tag: {
        ar: '',
      },
    },
  ],
  [
    'Fixed',
    {
      value: 'Fixed',
      label: {
        ar: 'ثابت',
      },
      tag: {
        ar: 'This vulnerability affects openEuler releases, and a fix has been released.',
      },
    },
  ],
  [
    'Unaffected',
    {
      value: 'Unaffected',
      label: {
        ar: 'غير متأثر',
      },
      tag: {
        ar: 'This vulnerability does not affect openEuler releases and does not need to be fixed or updated.',
      },
    },
  ],
  [
    'Affected',
    {
      value: 'Affected',
      label: {
        ar: 'متأثر',
      },
      tag: {
        ar: 'This vulnerability affects openEuler releases, and a fix is being prepared.',
      },
    },
  ],
  [
    'Under Investigation',
    {
      value: 'Under Investigation',
      label: {
        ar: 'قيد التحقيق',
      },
      tag: {
        ar: 'The openEuler security team is analyzing and evaluating the impact of this vulnerability on openEuler releases and has not yet confirmed if openEuler releases are affected.',
      },
    },
  ],
]);

export const REASON = [
  {
    value: '',
    label: {
      ar: 'الكل',
    },
  },
  {
    value: 'will fix',
    label: {
      ar: 'سيتم الإصلاح',
    },
  },
  {
    value: 'none_available-Vulnerabilities are still analyzing',
    label: {
      ar: 'لا تزال نقاط الضعف الأمنية قيد التحليل',
    },
  },
  {
    value: 'none_available-No solution or patch',
    label: {
      ar: 'لا يوجد حل أو تصحيح',
    },
  },
  {
    value: 'none_available-To be fixed through an upgraded version',
    label: {
      ar: 'يتعين الإصلاح عبر الترقية',
    },
  },
  {
    value: 'no_fix_planned-Out of support scope',
    label: {
      ar: 'خارج نطاق الدعم',
    },
  },
  {
    value: 'no_fix_planned-Will not fix',
    label: {
      ar: 'لن يتم الإصلاح',
    },
  },
  {
    value: 'component_not_present',
    label: {
      ar: 'المكون غير موجود',
    },
  },
  {
    value: 'inline_mitigations_already_exist',
    label: {
      ar: 'عمليات التخفيف المضمنة موجودة بالفعل',
    },
  },
  {
    value: 'vulnerable_code_cannot_be_controlled_by_adversary',
    label: {
      ar: 'لا يمكن التحكم في الرمز المعرض للخطر',
    },
  },
  {
    value: 'vulnerable_code_not_in_execute_path',
    label: {
      ar: 'الرمز المعرّض للخطر غير موجود في مسار التنفيذ',
    },
  },
  {
    value: 'vulnerable_code_not_present',
    label: {
      ar: 'الرمز المعرّض للخطر غير موجود',
    },
  },
];

export const glossaryList = [
  {
    status: 'Fixed',
    description: {
      ar: 'This vulnerability affects openEuler releases, and a fix has been released.',
    },
  },
  {
    status: 'متأثر',
    description: {
      ar: 'This vulnerability affects openEuler releases, and a fix is being prepared.',
    },
  },
  {
    status: 'Vulnerabilities are still analyzing',
    description: {
      ar: 'A fix is being prepared.',
    },
  },
  {
    status: 'No solution or patch',
    description: {
      ar: 'No fix or patch is available.',
    },
  },
  {
    status: 'To be fixed through an upgraded version',
    description: {
      ar: 'A fix for this vulnerability will be included in a future version update.',
    },
  },
  {
    status: 'Out of support scope',
    description: {
      ar: 'The packages or versions affected by this vulnerability are not within the support scope of openEuler. You are advised to adopt available mitigations or upgrade to supported packages or versions based on the impact scope evaluated by openEuler.',
    },
  },
  {
    status: 'Will not fix',
    description: {
      ar: 'Although this vulnerability affects openEuler releases, the openEuler security team has decided not to fix it at this time after analysis and evaluation.\nSuggestions:',
    },
    listAr: [
      'Upgrade your OS to an openEuler release that includes a fix for this vulnerability or is not affected by it.',
      'If a mitigation is available for this vulnerability, consider applying it.',
      'Provide feedback to us outlining why a fix is necessary.',
    ],
  },
  {
    status: 'غير متأثر',
    description: {
      ar: 'This vulnerability does not affect openEuler releases and does not need to be fixed or updated.',
    },
  },
  {
    status: 'Component_not_present',
    description: {
      ar: 'openEuler releases do not include components affected by this vulnerability.',
    },
  },
  {
    status: 'Inline_mitigations_already_exist',
    description: {
      ar: 'openEuler releases have incorporated control or mitigations.',
    },
  },
  {
    status: 'Vulnerable code cannot be controlled',
    description: {
      ar: 'Attackers cannot successfully exploit the vulnerable code in openEuler releases.',
    },
  },
  {
    status: 'Vulnerable code not in execute path',
    description: {
      ar: 'Vulnerable code in openEuler releases is not on the execution path.',
    },
  },
  {
    status: 'Vulnerable code not present',
    description: {
      ar: 'openEuler releases do not contain the vulnerable code',
    },
  },
  {
    status: 'Under Investigation',
    description: {
      ar: 'The openEuler security team is analyzing and evaluating the impact of this vulnerability on openEuler releases and has not yet confirmed if openEuler releases are affected.',
    },
  },
];
