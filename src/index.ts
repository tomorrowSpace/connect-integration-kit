import {ConnectAPI} from './api';
import {fetchData} from './utils'

ConnectAPI('').establish_connection();

function IntegrationTools(clientId: string) {
    function requestAuthentication(): any {
        
    }

    return {
        requestAuthentication,
    };
}

export = IntegrationTools;
