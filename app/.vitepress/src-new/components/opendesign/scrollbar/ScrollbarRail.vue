<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';

const emits = defineEmits<{
  (e: 'scroll', ratio: number): void;
}>();

const props = defineProps({
  direction: { type: String as () => 'x' | 'y', default: 'y' },
  thumbRate: { type: Number, default: 0 },
  offsetRate: { type: Number, default: 0 },
  notStepJump: { type: Boolean, default: false },
  size: { type: String as () => 'medium' | 'small', default: 'medium' },
  layout: { type: String as () => 'ltr' | 'rtl', default: 'ltr' },
  trackLength: { type: Number, default: 0 },
});

const isY = computed(() => props.direction === 'y');
const isRtl = computed(() => props.layout === 'rtl');

const barRef = ref<HTMLDivElement | null>(null);
const thumbRef = ref<HTMLDivElement | null>(null);

// ensure dragging state is declared before any watchers use it
const isDarggingBar = ref(false);
let startPos = 0;
let oldOffset = 0;

const trackLengthMeasured = ref(0);
const trackLength = computed(() => props.trackLength || trackLengthMeasured.value);
const thumbSize = computed(() => {
  const tl = trackLength.value;
  if (tl && props.thumbRate) {
    return Math.round(tl * props.thumbRate);
  }
  return 0;
});
const thumbSizeStyle = computed(() => `${thumbSize.value}px`);

const maxOffset = computed(() => trackLength.value - thumbSize.value);
const sizeProp = computed(() => (isY.value ? 'height' : 'width'));
const offsetProp = computed(() => (isY.value ? 'translateY' : 'translateX'));

const offset = ref(0);

watchEffect(() => {
  if (!isDarggingBar.value) {
    offset.value = Math.round(maxOffset.value * props.offsetRate);
  }
});

const offsetStyle = computed(() => {
  if (!isY.value && isRtl.value) {
    return `${offsetProp.value}(${maxOffset.value - offset.value}px)`;
  }
  return `${offsetProp.value}(${offset.value}px)`;
});

const thumbStyle = computed(() => ({
  [sizeProp.value]: thumbSizeStyle.value,
  transform: offsetStyle.value,
}));

function adjustOffset(pos: number) {
  if (pos < 0) return 0;
  if (pos > maxOffset.value) return maxOffset.value;
  return pos;
}

onMounted(() => {
  if (!barRef.value) return;
  const { offsetHeight, offsetWidth } = barRef.value;
  trackLengthMeasured.value = props.direction === 'x' ? offsetWidth : offsetHeight;
});

function onMouseMove(e: MouseEvent) {
  const pos = isY.value ? e.clientY : e.clientX;
  const delta = pos - startPos;
  const v = oldOffset + (isY.value ? delta : isRtl.value ? -delta : delta);
  const of = adjustOffset(v);
  if (of !== offset.value) {
    offset.value = of;
    emits('scroll', maxOffset.value ? offset.value / maxOffset.value : 0);
  }
}

function stopDrag() {
  isDarggingBar.value = false;
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('contextmenu', stopDrag);
}

function onThumbMouseDown(e: MouseEvent) {
  e.preventDefault();
  e.stopPropagation();
  isDarggingBar.value = true;
  startPos = isY.value ? e.clientY : e.clientX;
  oldOffset = offset.value;
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('contextmenu', stopDrag);
}

function onTrackClick(e: MouseEvent) {
  e.preventDefault();
  if (!thumbRef.value || !barRef.value) return;
  const pos = isY.value ? e.clientY : e.clientX;
  let v = 0;
  if (props.notStepJump) {
    const bc = barRef.value.getBoundingClientRect();
    v = pos - (isY.value ? bc.top : bc.left) - thumbSize.value / 2;
  } else {
    const bc = thumbRef.value.getBoundingClientRect();
    const isPlus = pos > (isY.value ? bc.top : bc.left);
    const stepDir = isPlus ? 1 : -1;
    const dirFactor = !isY.value && isRtl.value ? -1 : 1;
    v = offset.value + thumbSize.value * stepDir * dirFactor;
  }
  const of = adjustOffset(v);
  if (of !== offset.value) {
    offset.value = of;
    emits('scroll', maxOffset.value ? offset.value / maxOffset.value : 0);
  }
}

// observe rail size
let ro: ResizeObserver | null = null;
function onResize() {
  if (!barRef.value) return;
  const { offsetHeight, offsetWidth } = barRef.value;
  trackLengthMeasured.value = props.direction === 'x' ? offsetWidth : offsetHeight;
}

onMounted(() => {
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(onResize);
    if (barRef.value) ro.observe(barRef.value);
  }
});

onUnmounted(() => {
  if (ro && barRef.value) ro.unobserve(barRef.value);
});
</script>

<template>
  <div
    ref="barRef"
    class="o-scrollbar-rail"
    :class="[
      `o-scrollbar-${props.direction}`,
      `o-scrollbar-${props.size}`,
      { 'o-scrollbar-dragging': isDarggingBar }
    ]"
    @click="onTrackClick"
  >
    <div
      ref="thumbRef"
      class="o-scrollbar-thumb"
      :class="[
        `o-scrollbar-${props.direction}-thumb`,
        { [`o-scrollbar-${props.direction}-thumb-dragging`]: isDarggingBar }
      ]"
      :style="thumbStyle"
      @click.stop
      @mousedown="onThumbMouseDown"
    >
      <slot name="thumb" :direction="props.direction" :dragging="isDarggingBar">
        <div :class="[`o-scrollbar-${props.direction}-thumb-bar`, { 'is-dragging': isDarggingBar }]" />
      </slot>
    </div>
    <slot name="track" :direction="props.direction">
      <div class="o-scrollbar-track" :class="[`o-scrollbar-${props.direction}-track`]" />
    </slot>
  </div>
</template>