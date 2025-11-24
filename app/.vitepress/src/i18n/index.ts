import { computed } from 'vue';
import { useData } from 'vitepress';

import common from './common';
import showcase from './showcase';
import interaction from './interaction';
import filter from './filter';
import mailing from './mailing';
import cve from './support/cve';
import safetyBulletin from './support/safety-bulletin';
import about from './about';
import group from './group';
import cookie from './cookie';
import faq from './faq';

const i18n: { [key: string]: any } = {
  ar: {
    common: common.ar,
    showcase: showcase.ar,
    interaction: interaction.ar,
    cve: cve.ar,
    safetyBulletin: safetyBulletin.ar,
    filter: filter.ar,
    mailing: mailing.ar,
    about: about.ar,
    group: group.ar,
    cookie: cookie.ar,
    faq: faq.ar,
  },
};

export function useI18n() {
  return computed(() => i18n['ar']);
}

export default i18n;