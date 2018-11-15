import './router';
import './hooks';

import Oeamtc from './core/Core.vue';

document.addEventListener('deviceready', () => {
    new Oeamtc().$mount('#app');
}, false);