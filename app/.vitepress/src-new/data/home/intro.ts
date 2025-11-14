

import computingArch_ar_pc from '~@/assets/category/home/intro/computing-arch_ar_pc.jpg';
import coverAll_ar_pc from '~@/assets/category/home/intro/cover-all_ar_pc.jpg';
import developmentTool_ar_pc from '~@/assets/category/home/intro/development-tool_ar_pc.jpg';

import computingArch_ar_mo from '~@/assets/category/home/intro/computing-arch_ar_mo.jpg';
import coverAll_ar_mo from '~@/assets/category/home/intro/cover-all_ar_mo.jpg';
import developmentTool_ar_mo from '~@/assets/category/home/intro/development-tool_ar_mo.jpg';

// 左侧icon
import computingArch_icon_light from '~@/assets/category/home/intro/computing-arch_light.png';
import coverAll_icon_light from '~@/assets/category/home/intro/cover-all_light.png';
import developmentTool_icon_light from '~@/assets/category/home/intro/development-tool_light.png';

import computingArch_icon_dark from '~@/assets/category/home/intro/computing-arch_dark.png';
import coverAll_icon_dark from '~@/assets/category/home/intro/cover-all_dark.png';
import developmentTool_icon_dark from '~@/assets/category/home/intro/development-tool_dark.png';
export default [
  {
    title: {
      ar: 'أجهزة متنوعة',
    },
    img: {
      ar: {
        pc: computingArch_ar_pc,
        mo: computingArch_ar_mo,
      },
    },
    icon: {
      light: computingArch_icon_light,
      dark: computingArch_icon_dark,
    },
    description: '全量组件原子化，构建服务自助化',
  },
  {
    title: {
      ar: 'تطبيقات لجميع السيناريوهات',
    },
    img: {
      ar: {
        pc: coverAll_ar_pc,
        mo: coverAll_ar_mo,
      },
    },
    icon: {
      light: coverAll_icon_light,
      dark: coverAll_icon_dark,
    },
    description: '一次开发，覆盖数字基础设施全场景',
  },
  {
    title: {
      ar: 'سلسلة أدوات التطوير',
    },
    img: {
      ar: {
        pc: developmentTool_ar_pc,
        mo: developmentTool_ar_mo,
      },
    },
    icon: {
      light: developmentTool_icon_light,
      dark: developmentTool_icon_dark,
    },
    description: '统一API跨多设备调用',
  },
];
