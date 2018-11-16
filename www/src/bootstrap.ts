import './router';
import './hooks';

import Oeamtc from './core/Core.vue';

new Oeamtc().$mount('#app');

window.cordova.plugins.backgroundMode.setDefaults({
    title: 'ÖÄMTC Roadpatrol',
    icon: 'icon-36-hdpi',
    color: 'ff0000',
    text: 'Some example text',
    hidden: true
});

window.cordova.plugins.backgroundMode.enable();

window.cordova.plugins.backgroundMode.on('activate', () => {
    window.cordova.plugins.backgroundMode.disableWebViewOptimizations();
});