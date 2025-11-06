import { isClient } from '@opensig/opendesign';
/**
 * 获取当前的语言环境，目前只支持 ar
 * @returns {string} 
 */
export function getCurrentLocale() {
  return 'ar';
}

export function getArabicPluralForm(num: any) {
  const n = Number(num);
  // 处理零
  if (n === 0) {
    return 'zero';
  }
  
  // 处理1和2
  if (n === 1) {
    return 'one';
  }
  if (n === 2) {
    return 'two';
  }
  
  // 处理3-10（少数形式）
  if (n >= 3 && n <= 10) {
    return 'few';
  }
  
  // 处理11-99（多数形式）
  if (n >= 11 && n <= 99) {
    // 检查是否在11-99范围内且不是以1或2结尾
    const lastTwoDigits = n % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 99) {
      return 'many';
    }
  }
  
  // 处理100及以上的情况
  if (n >= 100) {
    const lastTwoDigits = n % 100;
    
    // 如果最后两位是00，使用other
    if (lastTwoDigits === 0) {
      return 'other';
    }
    
    // 如果最后两位在3-10之间，使用few
    if (lastTwoDigits >= 3 && lastTwoDigits <= 10) {
      return 'few';
    }
    
    // 如果最后两位在11-99之间，使用many
    if (lastTwoDigits >= 11 && lastTwoDigits <= 99) {
      return 'many';
    }
  }
  
  // 默认返回other
  return 'other';
}