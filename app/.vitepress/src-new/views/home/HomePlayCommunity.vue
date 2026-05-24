<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { OButton, OIcon, OLink } from '@opensig/opendesign';

import { useLocale } from '~@/composables/useLocale';
import { useScreen } from '~@/composables/useScreen';

import { useCommon } from '@/stores/common';

import { playCommunity, vitalityConfig } from '~@/data/home/play-community';

import { getStatistic, getDownloadTotal } from '@/api/api-search';

import logo from '~@/assets/category/home/play-community/logo.png';
import floorBg from '~@/assets/category/home/play-community/floor-bg.png';
import floorBgDark from '~@/assets/category/home/play-community/floor-bg_dark.png';
import cube from '~@/assets/category/home/play-community/cube.png';
import cubeDark from '~@/assets/category/home/play-community/cube_dark.png';
import click from '~@/assets/category/home/play-community/click.png';
import vitality from '~@/assets/category/home/play-community/vitality.svg';
import blue from '~@/assets/category/home/play-community/blue_light.png';
import blueDark from '~@/assets/category/home/play-community/blue_dark.png';
import IconChevronLeft from '~icons/app-new/icon-chevron-left.svg';

import { type VitalityValueT } from '~@/@type/type-home';
import { useI18n } from 'vue-i18n';

const { locale } = useLocale();
const { isPhone, lePadV, leLaptop } = useScreen();

const vitalityData = ref<VitalityValueT>();

const { theme } = storeToRefs(useCommon());

onMounted(async () => {
    const [statisticRes, downloadRes] = await Promise.all([
      getStatistic(),
      getDownloadTotal()
    ]);
    
    const data = statisticRes?.data || {};
    const users = downloadRes?.data || {};
    
    vitalityData.value = {
      contributors: data.contributor_all,
      repos: data.repo_all,
      sigs: data.sig_all,
      users: users.total_count,
      businessosv: data.osv_all,
    };
});

// ------------埋点------------
const { t } = useI18n();
</script>

<template>
  <div class="home-play-community">
    <i18n-t class="play-community-title" keypath="home.playCommunity" tag="h3">
      <template #openEuler>
        <img class="logo" :src="logo" />
      </template>
      <template #click>
        <div class="click">
          <img :src="click" />
          <div class="click-bg"></div>
        </div>
      </template>
    </i18n-t>
    <div class="play-intro">
      <p class="play-intro-text">{{ $t('home.playIntro') }}</p>
      <div class="get-os">
        <img @click.stop="" :src="theme === 'light' ? blue : blueDark" />
      </div>
    </div>
    <div class="play-cards">
      <div class="card-item" v-for="card in playCommunity[locale]">
        <div class="card-top" :style="{ backgroundImage: `url(${card.bg})` }">
          {{ card.title }}
        </div>
        <div class="card-bottom">
          <p class="card-intro" :title="card.intro">
            {{ card.intro }}
          </p>
          <div class="btn-box">
            <a :href="card.btn.link" target="_blank" rel="noopener noreferrer">
              <OButton
                :size="lePadV ? 'medium' : 'large'"
                color="primary"
              >
                {{ card.btn.label }}
              </OButton>
            </a>
            <OLink
              v-if="card.textBtn"
              :href="card.textBtn.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ card.textBtn.label }}
              <OIcon>
                <IconChevronLeft></IconChevronLeft>
              </OIcon>
            </OLink>
          </div>
        </div>
      </div>
    </div>
    <div class="vitality">
      <div class="vitality-text">
        <div class="text">
          {{ $t('home.communityVitality') }}
        </div>
        <img :src="vitality" />
      </div>
      <div class="vitality-data">
        <div
          v-for="item in vitalityConfig"
          :key="item.vitalityKey"
          class="data-item"
        >
          <div v-if="vitalityData" class="value">
            {{ vitalityData[item.vitalityKey] }}
          </div>
          <div class="label">
            {{ item.vitalityLabel?.['ar'] }}
          </div>
        </div>
      </div>
      <OLink
        :href="`https://datastat.openeuler.org/en/overview`"
        :style="{ '--link-color': 'rgba(255, 255, 255, 0.8)' }"
        class="vitality-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('home.viewDetails') }}
        <template #suffix>
          <OIcon>
            <IconChevronLeft></IconChevronLeft>
          </OIcon>
        </template>
      </OLink>
    </div>
    <img class="cube" :src="theme === 'light' ? cube : cubeDark" />
    <img class="floor-bg" :src="theme === 'light' ? floorBg : floorBgDark" />
  </div>
</template>

<style lang="scss" scoped>
.home-play-community {
  position: relative;
  z-index: 1;
  .play-community-title {
    position: relative;
    display: flex;
    align-items: center;
    text-align: right;
    width: fit-content;
    .logo {
      padding: 0 16px;
      height: 100%;
      max-height: 48px;
      @include respond-to('<=laptop') {
        height: 32px;
      }
      @include respond-to('phone') {
        height: 24px;
        padding: 0 8px;
      }
    }
    .click {
      // position: absolute;
      // right: 0;
      // bottom: 0;
      // transform: translateX(calc(100% + 40px));
      transform: translateX(calc(100% - 70px)) scaleX(-1);
      img {
        height: 66px;
      }
      .click-bg {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 138px;
        height: 90px;
        background: rgba(255, 238, 201, 0.55);
        filter: blur(50px);
      }
      @include respond-to('<=laptop') {
        transform: translateX(calc(100% - 40px)) scaleX(-1);
        img {
          height: 44px;
        }
      }
      @include respond-to('phone') {
        transform: translateX(calc(100% - 24px)) scaleX(-1);
        img {
          height: 38px;
        }
      }
    }
  }
  .play-intro {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 8px;
    color: var(--o-color-info2);
    @include text1;
    border-bottom: 4px solid transparent;
    padding-bottom: 24px;
    border-image: linear-gradient(90deg, #95b2fb 0%, #002fa7 100%) 1;

    @include respond-to('<=laptop') {
      .o-btn {
        flex-shrink: 0;
        margin-left: 24px;
      }
    }
    @include respond-to('<=pad_v') {
      padding-bottom: 12px;
      .play-intro-text {
        max-width: 480px;
      }
    }
    @include respond-to('phone') {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 0;
      border: none;
    }

    @include respond-to('phone') {
      .o-btn {
        margin-left: 0;
        margin-top: 12px;
      }
    }
    .get-os {
      position: relative;
      img {
        top: 0;
        left: 0;
        transform: translate(-50%, -65%);
        position: absolute;
        width: 330px;
        z-index: -1;
        @include respond-to('phone') {
          display: none;
        }
      }
    }
  }

  .play-cards {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    @include respond-to('<=laptop') {
      margin-top: 24px;
      gap: 24px;
    }
    @include respond-to('<=pad_v') {
      margin-top: 12px;
      gap: 16px;
    }
    @include respond-to('phone') {
      grid-template-columns: repeat(1, 1fr);
      max-width: 100%;
      gap: 12px;
    }
    .card-item {
      display: flex;
      flex-direction: column;
      background-color: var(--o-color-fill2);
      border-radius: var(--o-radius-xs);
      .card-top {
        font-weight: 500;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 54px 32px 44px;
        color: var(--o-color-white);
        text-align: right;
        @include h1;
        @include respond-to('<=laptop') {
          padding: 32px 24px;
        }
        @include respond-to('<=pad_v') {
          padding: 24px 16px;
        }
        @include respond-to('phone') {
          padding: 16px 18px;
        }
      }
      .card-bottom {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 32px;
        height: 100%;
        text-align: right;
        @include respond-to('<=laptop') {
          padding: 24px;
        }
        @include respond-to('<=pad_v') {
          padding: 16px;
        }
        @include respond-to('phone') {
          padding: 12px 16px;
        }
        .card-intro {
          @include text-truncate(2);
          @include text1;
          color: var(--o-color-info2);
          word-break: break-word;
        }
        .btn-box {
          margin-top: 32px;
          @include text1;
          a {
            & + a {
              margin-right: 16px;
            }
          }
          @include respond-to('<=laptop') {
            margin-top: 24px;
          }
          @include respond-to('<=pad_v') {
            margin-top: 16px;
          }
          @include respond-to('phone') {
            margin-top: 12px;
            a {
              & + a {
                margin-right: 12px;
              }
            }
          }
        }
      }
    }
  }
  .vitality {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    padding: 22px 32px;
    width: 100%;
    color: var(--o-color-white);
    background-size: 100% 100%;
    border-radius: var(--o-radius-xs);
    background-image: url(~@/assets/category/home/play-community/vitality-bg_light.png);
    @include respond-to('<=laptop') {
      margin-top: 24px;
    }
    @include respond-to('pad_h') {
      margin-top: 24px;
      padding: 12px 16px;
    }
    @include respond-to('pad_h') {
      margin-top: 24px;
      padding: 12px 16px;
    }
    @include respond-to('<=pad_v') {
      padding: 12px 16px;
      flex-direction: column;
      margin-top: 12px;
      background-image: url(~@/assets/category/home/play-community/vitality-bg_light_mo.png);
    }
    .vitality-text {
      display: flex;
      @include h1;
      align-items: center;
      font-weight: 500;
      @media screen and (max-width: 1000px) {
        font-size: 16px;
        line-height: 24px;
      }
      @include respond-to('<=pad_v') {
        width: 100%;
      }
      img {
        margin-left: 12px;
        width: 56px;
        @include respond-to('<=laptop') {
          margin-left: 8px;
        }
        @include respond-to('pad_h') {
          margin-left: 8px;
          width: 24px;
        }
        @include respond-to('<=pad_v') {
          width: 100%;
          width: 24px;
        }
      }
    }
    .vitality-data {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;
      margin-right: 52px;
      @include respond-to('<=laptop') {
        margin-right: 16px;
      }
      @include respond-to('<=pad_v') {
        justify-content: flex-start;
        margin-right: 0;
        margin-top: 12px;
        flex-wrap: wrap;
      }
      .data-item {
        display: block;
        position: relative;
        text-align: right;

        &::before {
          content: '';
          position: absolute;
          right: -8px;
          width: 2px;
          height: 100%;
          background-image: linear-gradient(
            180deg,
            #4374f2 3%,
            rgba(67, 116, 242, 0.27) 100%
          );
        }
        @include respond-to('<=pad_v') {
          padding-right: 16px;
          margin-right: 32px;
          &:nth-child(1) {
            margin-right: 0;
            padding-right: 0;
            &::before {
              display: none;
            }
          }
          &::before {
            right: -2px;
          }
        }
        @media (min-width: 640px) and (max-width: 781px) {
          margin-right: 24px;
          &:nth-child(4) {
            margin-left: 40px;
          }
          &:nth-child(5) {
            margin-right: 0;
            padding-right: 0;
            margin-left: 40px;
            margin-top: 12px;
            &::before {
              display: none;
            }
          }
        }
        @media (min-width: 627px) and (max-width: 639px) {
          margin-right: 24px;
          &:nth-child(5) {
            margin-right: 0;
            padding-right: 0;
            margin-left: 40px;
            margin-top: 12px;
            &::before {
              display: none;
            }
          }
        }
        @media (min-width: 557px) and (max-width: 626px) {
          margin-right: 24px;
          &:nth-child(5) {
            margin-right: 0;
            padding-right: 0;
            margin-left: 40px;
            margin-top: 12px;
            &::before {
              display: none;
            }
          }
        }
        @media (min-width: 517px) and (max-width: 556px) {
          margin-right: 24px;
          &:nth-child(5) {
            margin-right: 0;
            padding-right: 0;
            margin-left: 40px;
            margin-top: 12px;
            &::before {
              display: none;
            }
          }
        }
        @media (min-width: 488px) and (max-width: 516px) {
          margin-right: 24px;
          &:nth-child(2) {
            margin-right: 42px;
          }
          &:nth-child(3) {
            margin-left: 40px;
          }
          &:nth-child(4) {
            margin-right: 0;
            padding-right: 0;
            margin-top: 12px;
            &::before {
              display: none;
            }
          }
          &:nth-child(n+4) {
            margin-top: 12px;
          }
        }
        @media (min-width: 467px) and (max-width: 487px) {
          margin-right: 24px;
          &:nth-child(2) {
            margin-right: 45px;
          }
          &:nth-child(3) {
            margin-left: 40px;
          }
          &:nth-child(4) {
            margin-right: 0;
            padding-right: 0;
            &::before {
              display: none;
            }
          }
          &:nth-child(n+4) {
            margin-top: 12px;
          }
        }
        @media (min-width: 427px) and (max-width: 466px) {
          margin-right: 24px;
          &:nth-child(2) {
            margin-right: 45px;
          }
          &:nth-child(4) {
            margin-right: 0;
            padding-right: 0;
            &::before {
              display: none;
            }
          }
          &:nth-child(n+4) {
            margin-top: 12px;
          }
        }
        @media screen and (max-width: 426px) {
          margin-right: 24px;
          &:nth-child(2) {
            margin-right: 103px;
            margin-left: 40px;
          }
          &:nth-child(3),
          &:nth-child(5) {
            margin-right: 0;
            padding-right: 0;
            &::before {
              display: none;
            }
          }
          &:nth-child(5) {
            margin-left: 40px;
          }
          &:nth-child(n+4) {
            margin-top: 12px;
          }
        }
        @media screen and (max-width: 391px) {
          &:nth-child(2),
          &:nth-child(5) {
            margin-left: 0;
          }

        }
        @media screen and (max-width: 369px) {
          margin-right: 12px;
          &:nth-child(2) {
            margin-right: 90px;
          }
        }
        .value {
          color: var(--o-color-primary2);
          @include display3;
        }
        .label {
          margin-top: 4px;
          @include text1;
          color: rgba(255, 255, 255, 0.8);
          @include respond-to('<=pad') {
            margin-top: 2px;
          }
        }
      }
    }
    .vitality-btn {
      margin-right: 32px;
      display: flex;
      align-items: center;
      @include text1;
      @include hover {
        color: var(--o-color-primary2);
      }
      @include respond-to('pad_h') {
        margin: 0 0 0 0;
      }
      @include respond-to('<=pad_v') {
        margin: 16px 0 0 0;
      }
    }
  }
  .cube {
    position: absolute;
    top: -47px;
    right: -35px;
    width: 145px;
    z-index: -1;
    @include respond-to('laptop') {
      width: 145px;
      top: -47px;
      right: -30px;
    }
    @include respond-to('<=pad_v') {
      width: 46px;
      top: -20px;
      right: -12px;
    }
    @include respond-to('phone') {
      width: 46px;
      top: -20px;
      right: -12px;
    }
  }
  .floor-bg {
    position: absolute;
    top: calc(-1 * var(--o-gap-section));
    right: -185px;
    width: 900px;
    z-index: -1;
    @include respond-to('<=laptop') {
      width: 60%;
      right: 0;
    }
  }
}
[data-o-theme='dark'] {
  .home-play-community {
    .vitality {
      background-image: url(~@/assets/category/home/play-community/vitality-bg_dark_pc.png);
      @include respond-to('<=pad_v') {
        background-image: url(~@/assets/category/home/play-community/vitality-bg_dark_mo.png);
      }
    }
  }
  .click-bg {
    opacity: 0.2;
  }
}
.o-link {
  --link-icon-size: 24px;
  @include respond-to('<=pad_v') {
    --link-icon-size: 16px;
  }
}
</style>
