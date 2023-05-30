interface FetchDataOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: { [key: string]: string };
    body?: any;
}

interface FetchDataResult<T> {
    data?: T;
    error?: Error;
  }
  
  async function fetchData<T>(url: string, options?: FetchDataOptions): Promise<FetchDataResult<T>> {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorText = await response.text();
        return { error: new Error(`Failed to fetch data from ${url}. Server response: ${errorText}`) };
      }
  
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error: new Error(`Failed to fetch data from ${url}. Error: ${error.message}`) };
    }
  }
  

export { fetchData };