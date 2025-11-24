<script setup lang="ts">
import { useData, useRouter } from 'vitepress';
import type { Component } from 'vue';
import { computed, onMounted, watch, ref } from 'vue';

import ar from 'element-plus/es/locale/lang/ar';

//opendesign 国际化
import AR from './i18n/opendesign-ar.js'

import { isClient, OScroller, OConfigProvider } from '@opensig/opendesign';

import AppHeader from '~@/components/header/AppHeader.vue';
// import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '~@/components/AppFooter.vue';
import LayoutShowcase from '@/layouts/LayoutShowcase.vue';
import LayoutAboutUs from '@/layouts/LayoutAboutUs.vue';
import LayoutDownload from './layouts/LayoutDownload.vue';
import LayoutSecurity from './layouts/LayoutSecurity.vue';
import LayouWhitePaper from '@/layouts/LayouWhitePaper.vue';

import CookieNotice from '~@/components/CookieNotice.vue';

import AppTour from '~@/components/AppTour.vue';

import categories from '@/data/common/category';
import { useLocale } from '~@/composables/useLocale';
import { hideNssRoutes } from './data/common/nss';

const { changeLocale } = useLocale();
const { frontmatter } = useData();
const router = useRouter();
let lang = ref("ar")
const elLocale = computed(() => {
  return lang.value === 'ar' ? ar : ar;
});

const compMapping: {
  [name: string]: Component;
} = {
  showcase: LayoutShowcase,
  'about-us': LayoutAboutUs,
  download: LayoutDownload,
  security: LayoutSecurity,
  'white-paper': LayouWhitePaper,
};

const isCustomLayout = computed(() => {
  return (
    !!frontmatter.value.category &&
    categories.indexOf(frontmatter.value.category) !== -1
  );
});

const comp = computed(() => {
  return compMapping[frontmatter.value.category];
});

// 是否添加footer 边距
const isDocs = computed(() => {
  return (
    frontmatter.value.category === 'about-us' ||
    frontmatter.value.category === 'wiki'
  );
});

const isReport = computed(() => {
  return frontmatter.value.category === 'report';
});
// ----------------------------- new ----------------------------

const showNss = computed(() => {
  return !hideNssRoutes.some(route => router?.route?.path?.includes(route));
})

watch(
  () => lang.value,
  () => {
    changeLocale('ar');
  },
  {
    immediate: true,
  }
);

onMounted(() => {
});
</script>

<template>
  <template v-if="!isReport">
    <AppHeader />
    <OConfigProvider :locale="AR">
      <el-config-provider :locale="elLocale">
        <main :class="frontmatter.class ? frontmatter.class : ''">
          <component :is="comp" v-if="isCustomLayout" ></component>
          <Content v-else />
        </main>
      </el-config-provider>
    </OConfigProvider>
    <CookieNotice />
    <AppFooter :class="{ 'is-docs': isDocs }" :lang="lang" />
  </template>
  <ClientOnly v-else>
    <Content v-if="isReport" />
  </ClientOnly>
</template>

<style lang="scss" scoped>
// TODO: 导航高度使用变量
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.o-scroller {
  height: 100vh;
  background-color: var(--o-color-fill1);
  --scrollbar-height: calc(100vh - var(--layout-header-height) * 2 - 10px);
  :deep(.o-scroller-container) {
    scroll-padding-top: var(--layout-header-height);
  }
}

main {
  position: relative;
  min-height: calc(100vh - 259px);
  background-color: var(--o-color-fill1);
  padding-top: 80px;
  &::after {
    content: '';
    display: table;
  }
  @include respond-to('<=pad_v') {
    padding-top: 48px;
  }
  &.download-page {
    @media (max-width: 1100px) {
      overflow: visible;
    }
  }
}
.is-docs {
  margin-right: 300px;
  @media (max-width: 1100px) {
    margin-right: 0;
  }
}
</style>

<style lang="scss">
#app {
  --layout-content-max-width: 1544px;
  --layout-content-padding: 64px;
  --layout-header-height: 80px;

  @include respond-to('<=laptop') {
    --layout-content-max-width: 100%;
    --layout-content-padding: 40px;
  }

  @include respond-to('<=pad') {
    --layout-content-padding: 32px;
  }

  @include respond-to('phone') {
    --layout-content-padding: 24px;
  }
}
</style>
