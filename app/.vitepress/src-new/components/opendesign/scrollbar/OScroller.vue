<script setup lang="ts">
import { defineExpose, ref } from 'vue';
// @ts-ignore SFC default export is provided by env.d.ts
import OScrollbar from './OScrollbar.vue';

const props = defineProps({
  disabledX: { type: Boolean },
  disabledY: { type: Boolean },
  duration: { type: Number, default: 600 },
  showType: { type: String as () => 'always' | 'auto' | 'hover' | 'never', default: 'auto' },
  size: { type: String as () => 'medium' | 'small', default: 'medium' },
  direction: { type: String as () => 'ltr' | 'rtl', default: 'ltr' },
  autoUpdateOnScrollSize: { type: Boolean },
  wrapClass: { type: [String, Array, Object] },
});

const targetRef = ref<HTMLDivElement | null>(null);
function scrollTo(options: ScrollToOptions) {
  if (!targetRef.value) return;
  targetRef.value.scrollTo(options);
}

defineExpose({ scrollTo });
</script>

<template>
  <div class="o-scroller o-scrollbar-wrapper">
    <div
      ref="targetRef"
      class="o-scroller-container"
      :class="[
        { 'is-x-disabled': props.disabledX, 'is-y-disabled': props.disabledY },
        props.wrapClass
      ]"
    >
      <slot />
    </div>

    <OScrollbar
      :target="targetRef"
      :disabled-x="props.disabledX"
      :disabled-y="props.disabledY"
      :duration="props.duration"
      :direction="props.direction"
      :show-type="props.showType"
      :size="props.size"
      :auto-update-on-scroll-size="props.autoUpdateOnScrollSize"
    >
      <template #thumb>
        <slot name="thumb" />
      </template>
      <template #track>
        <slot name="track" />
      </template>
    </OScrollbar>
  </div>
</template>