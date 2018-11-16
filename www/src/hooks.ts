import {socket} from "./core/plugins/socket/lib";
import {events} from "./core/lib/Utils";
import router from './core/router';

const timeouts = [];

socket.on('trigger-call', tel => {
    window.cordova.plugins.backgroundMode.unlock();

    timeouts.push(setTimeout(() => {
        if (window.cordova.plugins.backgroundMode.isActive()) {
            window.cordova.plugins.notification.local.schedule({
                title: 'ÖAMTC Roadpatrol',
                text: `Call now: ${tel}`,
                foreground: true,
                vibrate: true
            });
        }
    }, 5000));

    makeCall(tel);
});

socket.on('mission:added', () => {
    if (window.cordova.plugins.backgroundMode.isActive()) {
        window.cordova.plugins.notification.local.schedule({
            title: 'ÖAMTC Roadpatrol',
            text: 'Neuer Auftrag',
            foreground: true,
            wakeup: true,
            vibrate: true,
            priority: 1
        });
    }
});

events.on('trigger-call', event => makeCall(event.data));

window.cordova.plugins.backgroundMode.on('deactivate', () => {
    window.cordova.plugins.notification.local.clearAll();

    timeouts.forEach(id => {
        clearTimeout(id);
    });
    timeouts.length = 0;
});

function makeCall(tel) {
    router.push({
        name: 'call',
        query: {
            tel
        }
    });
}