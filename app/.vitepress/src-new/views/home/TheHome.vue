<script lang="ts" setup>
import { computed, onMounted } from 'vue';

import AOS from 'aos';

import { useScreen } from '~@/composables/useScreen';
import ContentWrapper from '~@/components/ContentWrapper.vue';

import HomeBanner from './HomeBanner.vue';
import HomeDisplayZone from './HomeDisplayZone.vue';
import HomeIntro from './HomeIntro.vue';
import HomePlayCommunity from './HomePlayCommunity.vue';
import HomeShowCase from './HomeShowCase.vue';
import HomePartner from './HomePartner.vue';
import HomeTrend from './HomeTrend.vue';
import HomeFriendlyCommunity from './HomeFriendlyCommunity.vue';

const { isPhone, isPadV } = useScreen();

const verticalPadding = computed(() => {
  if (isPhone.value) {
    return ['32px', '0'];
  } else if (isPadV.value) {
    return ['32px', '0'];
  } else {
    return ['0', '0'];
  }
});
onMounted(() => {
  AOS.init({
    offset: 50,
    duration: 800,
    delay: 100,
    once: true,
  });
});
</script>
<template>
  <div class="home">
    <HomeBanner />
    <ContentWrapper :vertical-padding="verticalPadding">
      <HomeDisplayZone data-aos="fade-up" class="home-display-zone" />
    </ContentWrapper>
    <HomeIntro data-aos="fade-up" />
    <ContentWrapper :vertical-padding="['0', '0']">
      <HomePlayCommunity data-aos="fade-up" />
    </ContentWrapper>
    <HomeShowCase data-aos="fade-up" />
    <HomeTrend data-aos="fade-up" />
    <HomeFriendlyCommunity data-aos="fade-up" />
    <ClientOnly>
      <HomePartner />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.home {
  direction: rtl;
}
.home-display-zone {
  margin-top: -41px;
  @include respond-to('<=pad_v') {
    margin-top: 0;
  }
}

:deep(h3) {
  @include display3;
  font-weight: 500;
  color: var(--o-color-info1);
  text-align: center;
  margin-top: var(--o-gap-section);
}
.home {
  overflow: hidden;
  background-color: var(--o-color-fill1);

  background-image: linear-gradient(
    180deg,
    #f3f3f5 0%,
    #dae1f2 40%,
    #ebeffc 79%,
    rgb(243, 243, 245) 100%
  );
  background-position: 0 480px;
  background-size: 100% 60%;
  background-repeat: no-repeat;
}
[data-o-theme='dark'] {
  .home {
    background-image: linear-gradient(
      180deg,
      #1a1a1c 0%,
      #0c0f1c 35%,
      #141b2e 52%,
      rgba(26, 26, 28, 0.04) 100%
    );
  }
}
</style>
