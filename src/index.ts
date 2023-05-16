import {ActivitiesAPI} from './api';

ActivitiesAPI('hi').establish_connection();

export function ActivitiesSDK(clientId: string) {
    function returnHello() : string {
        return `You used the clientId ${clientId}`
    };

    return {
        returnHello,
    }
}

module.exports = ActivitiesSDK;