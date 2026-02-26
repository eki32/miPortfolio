
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mi-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2222, hash: '1c0fafba0089962ac374589bb397306c2021759c278e30c117ffd45a9f976e2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: 'd3a679f13e43d0a58341e3165d8706052acaff037c5e648c5c942accf2b48202', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42973, hash: '7fe35052eb68e058c3a689c099defea1cf10bff7ab95d60244f367cb0f87935e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZFR4KXDF.css': {size: 22380, hash: 'DUD3rHbC2+M', text: () => import('./assets-chunks/styles-ZFR4KXDF_css.mjs').then(m => m.default)}
  },
};
