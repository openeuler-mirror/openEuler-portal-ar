import { computed, ref } from 'vue';
import { createI18n, type I18nOptions } from 'vue-i18n';
import { useData } from 'vitepress';

// 公共模块
import response from './response';
import cookie from './cookie';
import header from './header';
import footer from './footer';
import common from './common';
import search from './search';
// 业务
import talentAssessment from './talent-assessment';
import contactUs from './contact-us';
import home from './home';
import download from './download';
import safetyBulletin from './safety-bulletin';
import cve from './cve';
import eventOverview from './event-overview';
import usergroup from './user-group';
import intelligence from './intelligence';
import sig from './sig';
import mailing from './mailing';
import onlineMeeting from './online-meeting';
import defectCenter from './defect-center';
import brand from './brand'

import { getCurrentLocale } from '~@/utils/locale';

const datetimeFormats: I18nOptions['datetimeFormats'] = {
  ar: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    },
  },
};

const messages = {
  ar: {
    // 公共模块
    response: response.ar,
    cookie: cookie.ar,
    header: header.ar,
    footer: footer.ar,
    common: common.ar,
    search: search.ar,

    // 业务
    talent: talentAssessment.ar,
    contact: contactUs.ar,
    home: home.ar,
    download: download.ar,
    safetyBulletin: safetyBulletin.ar,
    cve: cve.ar,
    eventOverview: eventOverview.ar,
    usergroup: usergroup.ar,
    intelligence: intelligence.ar,
    sig: sig.ar,
    mailing: mailing.ar,
    onlineMeeting: onlineMeeting.ar,
    defectCenter: defectCenter.ar,
    brand: brand.ar,
  }
};

const locale = getCurrentLocale();

const i18n = createI18n({
  globalInjection: true,
  locale,
  legacy: false,
  fallbackLocale: 'ar',
  messages,
  datetimeFormats,
});

// TODO: 使用composables的 useLocale,对象放在 data 里面
export function useI18n() {
  let lang = ref('ar');
  return computed(() => messages[lang.value]);
}

export default i18n;
