// `.content/**/*.yaml` 中多语言字段用 `_ar` 后缀。
// foldI18n 将 `_ar` 后缀字段提升为无后缀基线字段，并移除其他语言（如 `_zh` / `_en`）的遗留字段。
//
// 例：{ title: '...', title_ar: '...' }
//   ar → { title: '...(ar)' }

export type Lang = 'ar';

const CUR_SUFFIX = '_ar';
const OTHER_SUFFIXES = ['_zh', '_en'] as const;

export function foldI18n<T>(data: T, lang: Lang = 'ar'): T {
  if (Array.isArray(data)) {
    return data.map((item) => foldI18n(item, lang)) as unknown as T;
  }
  if (!isPlainObject(data)) return data;

  const out: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data)) {
    if (OTHER_SUFFIXES.some((suffix) => key.endsWith(suffix))) continue;
    if (key.endsWith(CUR_SUFFIX)) {
      out[key.slice(0, -CUR_SUFFIX.length)] = foldI18n(value, lang);
    } else {
      out[key] = foldI18n(value, lang);
    }
  }
  return out as T;
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
