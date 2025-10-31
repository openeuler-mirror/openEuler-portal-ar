<script setup lang="ts">
import './style/css.js';
import { computed, onMounted, onUnmounted, ref, toRefs, watchEffect, watch } from 'vue';
// @ts-ignore SFC default export is provided by env.d.ts
import ScrollbarRail from './ScrollbarRail.vue';

// props: keep parity with types.js
const props = defineProps({
  disabledX: { type: Boolean },
  disabledY: { type: Boolean },
  duration: { type: Number, default: 600 },
  showType: { type: String as () => 'always' | 'auto' | 'hover' | 'never', default: 'auto' },
  size: { type: String as () => 'medium' | 'small', default: 'medium' },
  direction: { type: String as () => 'ltr' | 'rtl', default: 'ltr' },
  autoUpdateOnScrollSize: { type: Boolean },
  target: { type: [String, Object] as unknown as () => string | HTMLElement | { value?: HTMLElement | null } | null, default: null },
});

const ScrollbarClass = { container: 'o-scrollbar-container' };
const isRtl = computed(() => props.direction === 'rtl');

let scrollTargetEl: HTMLElement | null = null; // element that scrolls
let scrollListenEl: HTMLElement | Window | null = null; // element to listen to scroll events
const rootRef = ref<HTMLDivElement | null>(null);

const hasY = ref(false);
const hasX = ref(false);
const hThumbRate = ref(0);
const vThumbRate = ref(0);
const hOffsetRate = ref(0);
const vOffsetRate = ref(0);
const isBody = ref(false);

const showXBar = ref(false);
const showYBar = ref(false);
let lastTop = -1;
let lastLeft = -1;
let xTimer: number | null = null;
let yTimer: number | null = null;

let ro: ResizeObserver | null = null;
let lastScrollWidth = -1;
let lastScrollHeight = -1;
const containerWidth = ref(0);
const containerHeight = ref(0);

function updateScrollbar() {
  if (!scrollTargetEl) return;
  const { clientWidth, clientHeight, scrollWidth, scrollHeight, scrollTop, scrollLeft } = scrollTargetEl;
  lastScrollWidth = scrollWidth;
  lastScrollHeight = scrollHeight;
  const maxH = Math.max(scrollWidth - clientWidth, 0);
  const maxV = Math.max(scrollHeight - clientHeight, 0);
  hThumbRate.value = scrollWidth ? clientWidth / scrollWidth : 0;
  vThumbRate.value = scrollHeight ? clientHeight / scrollHeight : 0;
  hOffsetRate.value = maxH ? (isRtl.value ? 1 - scrollLeft / maxH : scrollLeft / maxH) : 0;
  vOffsetRate.value = maxV ? scrollTop / maxV : 0;
  containerWidth.value = clientWidth;
  containerHeight.value = clientHeight;
  if (!props.disabledX) {
    hasX.value = clientWidth < scrollWidth;
  }
  if (!props.disabledY) {
    hasY.value = clientHeight < scrollHeight;
  }
  // keep bars visible in always mode
  if (props.showType === 'always') {
    showXBar.value = hasX.value;
    showYBar.value = hasY.value;
  }
}

function updateScrollbarByScrollSize() {
  if (!scrollTargetEl) return;
  const { scrollWidth, scrollHeight } = scrollTargetEl;
  if (lastScrollWidth !== scrollWidth || lastScrollHeight !== scrollHeight) {
    updateScrollbar();
  }
}

function onScroll() {
  if (!scrollTargetEl) return;
  const { scrollLeft, scrollWidth, scrollTop, scrollHeight, clientWidth, clientHeight } = scrollTargetEl;
  if (lastScrollWidth !== scrollWidth || lastScrollHeight !== scrollHeight) {
    updateScrollbar();
  }
  const maxH2 = Math.max(scrollWidth - clientWidth, 0);
  const maxV2 = Math.max(scrollHeight - clientHeight, 0);
  hOffsetRate.value = maxH2 ? (isRtl.value ? 1 - scrollLeft / maxH2 : scrollLeft / maxH2) : 0;
  vOffsetRate.value = maxV2 ? scrollTop / maxV2 : 0;
  if (props.showType !== 'always') {
    if (lastLeft >= 0) {
      showXBar.value = scrollLeft !== lastLeft;
      if (xTimer) window.clearTimeout(xTimer);
      xTimer = window.setTimeout(() => {
        showXBar.value = false;
        xTimer = null;
      }, props.duration);
    }
    lastLeft = scrollLeft;
    if (lastTop >= 0) {
      showYBar.value = scrollTop !== lastTop;
      if (yTimer) {
        window.clearTimeout(yTimer);
        yTimer = null;
      }
      yTimer = window.setTimeout(() => {
        showYBar.value = false;
      }, props.duration);
    }
    lastTop = scrollTop;
  } else {
    // always mode: keep bars visible when axes exist
    showXBar.value = hasX.value;
    showYBar.value = hasY.value;
    lastLeft = scrollLeft;
    lastTop = scrollTop;
  }
}

function resolveHtmlElement(target: any): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    if (!target) return resolve(null);
    // body
    if (target === 'body') return resolve(document.body as HTMLElement);
    // string selector
    if (typeof target === 'string') {
      resolve(document.querySelector(target) as HTMLElement | null);
      return;
    }
    // ref object or HTMLElement
    const el = (target as any).value ?? target;
    if (el instanceof HTMLElement) return resolve(el);
    resolve(null);
  });
}

function init() {
  if (!scrollTargetEl) return;
  scrollTargetEl.classList.add(ScrollbarClass.container);
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => updateScrollbar());
    ro.observe(scrollTargetEl);
  }
  updateScrollbar();
  // ensure RTL starts at rightmost position
  if (isRtl.value) {
    const { scrollWidth, clientWidth } = scrollTargetEl;
    const maxH = Math.max(scrollWidth - clientWidth, 0);
    if (maxH > 0 && scrollTargetEl.scrollLeft === 0) {
      scrollTargetEl.scrollLeft = maxH;
      updateScrollbar();
    }
  }
  scrollListenEl = isBody.value ? window : scrollTargetEl;
  scrollListenEl.addEventListener('scroll', onScroll, { passive: true } as any);
}

function updateScrollbarOnIdle() {
  if (ro && scrollTargetEl) {
    ro.disconnect();
    ro = new ResizeObserver(() => updateScrollbarByScrollSize());
    ro.observe(scrollTargetEl);
  }
}

function cancelUpdateScrollbarOnIdle() {
  if (ro && scrollTargetEl) {
    ro.disconnect();
    ro = new ResizeObserver(() => updateScrollbar());
    ro.observe(scrollTargetEl);
  }
}

const { target } = toRefs(props);

// helpers to safely rebind and cleanup when target changes
let stopInnerRefWatch: (() => void) | null = null;
function detach() {
  if (scrollTargetEl) {
    scrollTargetEl.classList.remove(ScrollbarClass.container);
  }
  if (ro) {
    ro.disconnect();
    ro = null;
  }
  if (scrollListenEl) {
    scrollListenEl.removeEventListener('scroll', onScroll as any);
    scrollListenEl = null;
  }
  lastTop = -1;
  lastLeft = -1;
  if (xTimer) { window.clearTimeout(xTimer); xTimer = null; }
  if (yTimer) { window.clearTimeout(yTimer); yTimer = null; }
  scrollTargetEl = null;
  isBody.value = false;
}
function attachTo(el: HTMLElement) {
  detach();
  if (el === document.body) {
    isBody.value = true;
    scrollTargetEl = document.documentElement;
  } else {
    scrollTargetEl = el;
  }
  init();
}

// initialize/reattach whenever target changes; support string selector, ref, or HTMLElement
watch(() => target.value as any, (t) => {
  if (stopInnerRefWatch) { stopInnerRefWatch(); stopInnerRefWatch = null; }
  detach();
  if (!t) return;
  if (typeof t === 'string') {
    const el = t === 'body' ? document.body : document.querySelector(t) as HTMLElement | null;
    if (el) attachTo(el);
    return;
  }
  const maybeRef = t as any;
  if (maybeRef && 'value' in maybeRef && !(maybeRef instanceof HTMLElement)) {
    stopInnerRefWatch = watch(() => (maybeRef as { value: HTMLElement | null }).value, (el) => {
      if (el) attachTo(el);
    }, { immediate: true });
    return;
  }
  if (t instanceof HTMLElement) {
    attachTo(t as HTMLElement);
  }
}, { immediate: true });

onUnmounted(() => {
  if (ro) ro.disconnect();
  if (scrollListenEl) scrollListenEl.removeEventListener('scroll', onScroll as any);
});

const isPhonePad = computed(() => window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
const isShowScrollbar = ref(props.showType === 'always');

watchEffect(() => {
  isShowScrollbar.value = props.showType === 'always';
  if (props.showType === 'always') {
    if (props.autoUpdateOnScrollSize) updateScrollbarOnIdle();
  } else {
    cancelUpdateScrollbarOnIdle();
  }
});

function onWrapperHoverIn() {
  if (props.showType === 'hover') {
    isShowScrollbar.value = true;
  }
}
function onWrapperHoverOut() {
  if (props.showType === 'hover') {
    isShowScrollbar.value = false;
  }
  if (scrollTargetEl) {
    const { scrollWidth, scrollHeight } = scrollTargetEl;
    if (lastScrollWidth !== scrollWidth || lastScrollHeight !== scrollHeight) {
      updateScrollbar();
    }
  }
}

function onBarHoverIn(d: 'x' | 'y') {
  if (d === 'x') showXBar.value = true;
  if (d === 'y') showYBar.value = true;
}
function onBarHoverOut(d: 'x' | 'y') {
  if (d === 'x') showXBar.value = false;
  if (d === 'y') showYBar.value = false;
}

function onHBarScroll(ratio: number) {
  if (!scrollTargetEl) return;
  const { scrollWidth, clientWidth } = scrollTargetEl;
  const maxH = Math.max(scrollWidth - clientWidth, 0);
  const left = isRtl.value ? (1 - ratio) * maxH : ratio * maxH;
  scrollTargetEl.scrollTo({ left });
}
function onVBarScroll(ratio: number) {
  if (!scrollTargetEl) return;
  const { scrollHeight, clientHeight } = scrollTargetEl;
  const maxV = Math.max(scrollHeight - clientHeight, 0);
  scrollTargetEl.scrollTo({ top: ratio * maxV });
}

// expose update
defineExpose({ update: updateScrollbar });
</script>

<template>
  <div
    ref="rootRef"
    class="o-scrollbar"
    :class="[
      `o-scrollbar-${props.size}`,
      {
        'o-scrollbar-auto-show': props.showType === 'auto',
        'o-scrollbar-always-show': props.showType === 'always',
        'o-scrollbar-hover-show': props.showType === 'hover' && !isPhonePad,
        'o-scrollbar-show': isShowScrollbar,
        'o-scrollbar-both': hasX && hasY,
        'o-scrollbar-show-x': showXBar,
        'o-scrollbar-show-y': showYBar,
        'o-scrollbar-to-body': isBody,
      }
    ]"
    @mouseenter="onWrapperHoverIn"
    @mouseleave="onWrapperHoverOut"
  >
    <template v-if="props.showType !== 'never'">
      <ScrollbarRail
        v-if="hasX && !props.disabledX"
        :size="props.size"
        direction="x"
        :layout="props.direction"
        :thumb-rate="hThumbRate"
        :offset-rate="hOffsetRate"
        :track-length="containerWidth"
        @scroll="onHBarScroll"
        @mouseenter="onBarHoverIn('x')"
        @mouseleave="onBarHoverOut('x')"
      >
        <template #thumb>
          <slot name="thumb" />
        </template>
        <template #track>
          <slot name="track" />
        </template>
      </ScrollbarRail>

      <ScrollbarRail
        v-if="hasY && !props.disabledY"
        direction="y"
        :size="props.size"
        :layout="props.direction"
        :thumb-rate="vThumbRate"
        :offset-rate="vOffsetRate"
        :track-length="containerHeight"
        @scroll="onVBarScroll"
        @mouseenter="onBarHoverIn('y')"
        @mouseleave="onBarHoverOut('y')"
      >
        <template #thumb>
          <slot name="thumb" />
        </template>
        <template #track>
          <slot name="track" />
        </template>
      </ScrollbarRail>
    </template>
  </div>
</template>