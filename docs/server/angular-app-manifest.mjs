
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
    'index.csr.html': {size: 2221, hash: '4c8afe3949599a656554e1c32a9594239327d326335d0793dde99afff29682fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: '6f28dd0ac725642b2b60ee922319abceea7f89b7947f076ac0e7080b09d3bd8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42970, hash: 'b68b0b5743b7cd71fd0ec53b368c5ea6ceadabce6848455e12768c878abcc431', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZFR4KXDF.css': {size: 22380, hash: 'DUD3rHbC2+M', text: () => import('./assets-chunks/styles-ZFR4KXDF_css.mjs').then(m => m.default)}
  },
};
