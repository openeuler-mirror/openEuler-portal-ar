<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useData, useRouter } from 'vitepress';

import { useI18n } from '@/i18n';

import AppRouterTemplate from '@/components/AppRouterTemplate.vue';

import banner from '@/assets/banner/banner-community.png';
import illustration from '@/assets/illustrations/technical-white-paper.png';

let lang = ref('ar');

const i18n = useI18n();
const userCaseData = computed(() => i18n.value.showcase);

const router = useRouter();

const bannerData = {
  bannerImg: banner,
  bannerTitle: computed(() => {
    return userCaseData.value.whitePaper;
  }),
  bannerIllustration: illustration,
};

const tabsData = reactive({
  tabPane: [
    {
      label: computed(() => {
        return userCaseData.value.technicalWhilePaper;
      }),
      name: 'technical-white-paper',
    },
    {
      label: computed(() => {
        return userCaseData.value.IndustryWhitePaper;
      }),
      name: 'industry-white-paper',
    },
  ],
});
function clickTab(val: string) {
  val === 'technical-white-paper'
    ? router.go(`/${lang.value}/showcase/technical-white-paper/`)
    : router.go(`/${lang.value}/showcase/industry-white-paper/`);
}
</script>
<template>
  <div class="layout-white-paper">
    <AppRouterTemplate
      :banner-data="bannerData"
      @click-tab="clickTab"
    />
    <Content />
  </div>
</template>

<style scoped lang="scss">
.layout-white-paper {
  direction: rtl;
}
</style>
