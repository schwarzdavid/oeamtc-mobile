import {socket} from "./core/plugins/socket/lib";
import {events} from "./core/lib/Utils";
import router from './core/router';

import * as icon from './assets/eagle.png';

socket.on('trigger-call', tel => {
    if (window.cordova.plugins.backgroundMode.isActive()) {
        window.cordova.plugins.notification.local.schedule({
            title: 'ÖAMTC Roadpatrol',
            text: `Call now: ${tel}`,
            foreground: true,
            vibrate: true,
            wakeup: true,
            priority: 1,
            icon: `file://dist/${icon}`
        });
    }

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
            priority: 1,
            icon: `file://dist/${icon}`
        });
    }
});

events.on('trigger-call', event => makeCall(event.data));

window.cordova.plugins.backgroundMode.on('deactivate', () => {
    window.cordova.plugins.notification.local.clearAll();
});

function makeCall(tel) {
    router.push({
        name: 'call',
        query: {
            tel
        }
    });
}