/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default async function makeApiCall(url, meta = {}) {
    const {
        method = 'GET', headers = {}, queryParams = {}, data = {},
    } = meta;

    try {
        // Create a new URL object to append query parameters
        const urlObj = new URL(url);

        // Append query parameters to the URL
        Object.entries(queryParams).forEach(([key, value]) => {
            urlObj.searchParams.append(key, value);
        });

        const requestOptions = {
            method,
            headers: new Headers(headers),
            body: method !== 'GET' ? JSON.stringify(data) : undefined,
        };

        // Make the API call using the Fetch API
        const response = await fetch(urlObj.toString(), requestOptions);

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status} - ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type') || '';

        // If the response contains JSON data, return it as an object
        if (contentType.includes('application/json')) {
            return response.json();
        }

        // If the response doesn't contain JSON data, return the response text
        return response.text();
    } catch (error) {
        console.error('Error making API call:', error.message);
        return null;
    }
}
