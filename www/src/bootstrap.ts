import './router';
import './hooks';
import * as icon from './assets/eagle.png';

import Oeamtc from './core/Core.vue';

new Oeamtc().$mount('#app');

window.cordova.plugins.backgroundMode.setDefaults({
    title: 'ÖAMTC Roadpatrol',
    icon: `file://dist/${icon}`,
    color: 'ffdc00',
    text: 'ÖAMTC Roadpatrol running...',
    hidden: true
});

window.cordova.plugins.backgroundMode.enable();
window.cordova.plugins.backgroundMode.overrideBackButton();

window.cordova.plugins.backgroundMode.on('activate', () => {
    window.cordova.plugins.backgroundMode.disableWebViewOptimizations();
});