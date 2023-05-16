interface FetchDataOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: { [key: string]: string };
    body?: any;
}

async function fetchData<T>(url: string, options?: FetchDataOptions): Promise<T> {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`oh noooo, there was an error fetching data from ${url}!`);
    }
    const data = await response.json();
    return data as T;
}

export { fetchData };