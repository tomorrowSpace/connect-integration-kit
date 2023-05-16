"use strict";
const api_1 = require("./api");
const utils_1 = require("./utils");
(0, api_1.ConnectAPI)('').establish_connection();
function IntegrationTools(clientId) {
    function requestAuthentication() {
        (0, utils_1.fetchData)('https://connect.tspacemeta.com/internal/registerCard', { method: 'GET' }).then(data => {
            return data;
        });
    }
    return {
        requestAuthentication,
    };
}
module.exports = IntegrationTools;
//# sourceMappingURL=index.js.map