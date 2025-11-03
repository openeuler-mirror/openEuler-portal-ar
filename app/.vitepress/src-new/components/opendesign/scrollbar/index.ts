import type { App } from 'vue';
// @ts-ignore SFC default export is provided by env.d.ts
import OScroller from './OScroller.vue';
// @ts-ignore SFC default export is provided by env.d.ts
import OScrollbar from './OScrollbar.vue';
import './style/index.scss';

export { OScroller, OScrollbar };

export const ScrollbarPlugin = {
  install(app: App) {
    app.component('OScroller', OScroller as any);
    app.component('OScrollbar', OScrollbar as any);
  },
};