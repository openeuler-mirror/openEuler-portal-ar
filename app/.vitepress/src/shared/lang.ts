export function getNewPath(lang: string, path: string) {
  const newLang = lang === 'ar' ? 'en' : 'ar';
  return path.replace(`/${lang}/`, `/${newLang}/`);
}
