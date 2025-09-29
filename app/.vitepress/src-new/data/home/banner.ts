import download_pc from '~@/assets/category/home/banner/download/pc.jpg';
import download_pad from '~@/assets/category/home/banner/download/pad.jpg';
import download_mb_en from '~@/assets/category/home/banner/download/banner-mb-en.jpg';
import { argv } from 'node:process';

export default {
  ar: [
    {
      bg_pc: download_pc,
      bg_pad: download_pad,
      bg_mb: download_mb_en,
      bg_text: '',
      bg_theme: 'light',
      title: 'الحصول على openEuler',
      subtitle: 'اعثر على جميع الموارد في مكان واحد.',
      btn: 'عرض المزيد',
      href: '/ar/download',
      isBlank: true,
      pc_text_width: '658px',
      pc_text_height: '158px',
      pad_text_width: '395px',
      pad_text_height: '95px',
    },
  ]
};
