const endpoint_url = 'https://api.tspacemeta.com';
const ws_endpoint_url = "wss://api.tspacemeta.com";

function ActivitiesAPI(authToken: string) {
    function establish_connection() {
        return "Yes"
    }

    return {
        establish_connection
    }
}

export {ActivitiesAPI};