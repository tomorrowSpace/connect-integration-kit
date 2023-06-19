import { error } from 'console';
import { ConnectAPI } from './api';
import { fetchData } from './utils'

ConnectAPI('').establish_connection();

function IntegrationTools(clientId: string) {
    function requestAuthentication(): any {

    }

    async function fetchUser(userId: string): Promise<any> {
      if (isNaN(parseInt(userId))) throw new Error("Invalid userId: userId must be a number.");
      if (parseInt(userId) < 1) throw new Error("Invalid userId: userId must be greater than or equal to 1.");
      
      
        const url = 'https://connect.tspacemeta.com/api/user';
        const body = { userId: userId };
        const options : any = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        };
      
        const result = await fetchData(url, options);
      
        if (result.error) {
          console.error('Error:', result.error);
        } else {
          return result.data;
        }
    }

    return {
        requestAuthentication,
        fetchUser
    };
}

export = IntegrationTools;
