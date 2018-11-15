import router from './core/router';
import CallComponent from './pages/PhoneCall.vue';

router.addRoutes([
    {
        name: 'call',
        path: '/call',
        component: CallComponent
    }
]);