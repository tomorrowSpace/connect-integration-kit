"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api_1 = require("./api");
const utils_1 = require("./utils");
(0, api_1.ConnectAPI)('').establish_connection();
function IntegrationTools(clientId) {
    function requestAuthentication() {
    }
    function fetchUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isNaN(parseInt(userId)))
                throw new Error("Invalid userId: userId must be a number.");
            if (parseInt(userId) < 1)
                throw new Error("Invalid userId: userId must be greater than or equal to 1.");
            const url = 'https://connect.tspacemeta.com/api/user';
            const body = { userId: userId };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            };
            const result = yield (0, utils_1.fetchData)(url, options);
            if (result.error) {
                console.error('Error:', result.error);
            }
            else {
                return result.data;
            }
        });
    }
    return {
        requestAuthentication,
        fetchUser
    };
}
module.exports = IntegrationTools;
//# sourceMappingURL=index.js.map