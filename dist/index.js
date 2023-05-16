"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesSDK = void 0;
function ActivitiesSDK(clientId) {
    function returnHello() {
        return `You used the clientId ${clientId}`;
    }
    ;
    return {
        returnHello,
    };
}
exports.ActivitiesSDK = ActivitiesSDK;
module.exports = ActivitiesSDK;
//# sourceMappingURL=index.js.map