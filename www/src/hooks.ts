import {socket} from "./core/plugins/socket/lib";
import {events} from "./core/lib/Utils";
import router from './core/router';

socket.on('trigger-call', makeCall);
events.on('trigger-call', event => makeCall(event.data));

function makeCall(tel){
    router.push({
        name: 'call',
        query: {
            tel
        }
    });
}