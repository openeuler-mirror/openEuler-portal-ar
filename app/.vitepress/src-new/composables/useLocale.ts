import { computed, watch, type WritableComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '~@/i18n';
import { isClient, isUndefined } from '@opensig/opendesign';

import type { LocaleT } from '~@/@types/type-locale';

export const useLocale = () => {
  const { t } = useI18n();
  const locale = useI18n().locale as WritableComputedRef<LocaleT>;
  const $t = t;


  watch(
    () => {
      if (!isClient) {
        return;
      }
      document.documentElement.lang = 'ar';
    },
    {
      immediate: true,
    }
  );

  // 语言切换
  const changeLocale = (lang?: LocaleT) => {
    if (locale.value === lang) {
      return;
    }

    const language = isUndefined(lang) ? 'ar' : lang;
    i18n.global.locale.value = language;
    locale.value = language;
  };

  return {
    t,
    $t,
    locale,
    changeLocale,
  };
};
