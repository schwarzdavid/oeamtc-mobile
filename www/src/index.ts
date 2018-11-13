import Oeamtc from './core/Core.vue';

document.addEventListener('deviceready', () => {
    new Oeamtc().$mount('#app');
});