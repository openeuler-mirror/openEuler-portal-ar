import { computed } from 'vue';
import { useData } from 'vitepress';

import sig from './sig';
import brand from './brand';
import common from './common';
import mooc from './learn';
import atune from './minisite/atune';
import bisheng from './minisite/bisheng';
import isula from './minisite/isula';
import secgear from './minisite/secgear';
import stratovirt from './minisite/stratovirt';
import showcase from './showcase';
import interaction from './interaction';
import live from './interaction/live';
import filter from './filter';
import contribution from './contribution';
import mailing from './mailing';
import osv from './support/osv';
import compatibility from './support/compatibility';
import cve from './support/cve';
import safetyBulletin from './support/safety-bulletin';
import about from './about';
import sky from './sky';
import group from './group';
import university from './university';
import cookie from './cookie';
import migration from './migration';
import faq from './faq';
import nestos from './nestos';

const i18n: { [key: string]: any } = {
  ar: {
    sig: sig.ar,
    brand: brand.ar,
    common: common.ar,
    mooc: mooc.ar,
    atune: atune.ar,
    bisheng: bisheng.ar,
    isula: isula.ar,
    secgear: secgear.ar,
    stratovirt: stratovirt.ar,
    showcase: showcase.ar,
    interaction: interaction.ar,
    live: live.ar,
    approve: osv.ar,
    compatibility: compatibility.ar,
    cve: cve.ar,
    safetyBulletin: safetyBulletin.ar,
    filter: filter.ar,
    contribution: contribution.ar,
    mailing: mailing.ar,
    about: about.ar,
    sky: sky.ar,
    group: group.ar,
    university: university.ar,
    cookie: cookie.ar,
    migration: migration.ar,
    faq: faq.ar,
    nestos: nestos.ar,
  },
};

export function useI18n() {
  return computed(() => i18n['ar']);
}

export default i18n;