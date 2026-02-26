
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/miPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/miPortfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2221, hash: '043e7bb9c9887a25add57142c98d3567eb67236ded0fafdee2a898d858c6243c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: '0fb3c51542d03c7a30f92ad54b2cee33a74cd47d8840a9df90d73e4fc02c2a3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42972, hash: 'd9e3e1d256a59efa3ab72721230f06536aa6fb542539934807276ca351780d97', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZFR4KXDF.css': {size: 22380, hash: 'DUD3rHbC2+M', text: () => import('./assets-chunks/styles-ZFR4KXDF_css.mjs').then(m => m.default)}
  },
};
