export async function baseApiRequest<ResponseType = any>(
    url: string, // URL of the API endpoint
    method: string, // HTTP method for the request
    data?: any // Optional data payload for the request
): Promise<ResponseType> { // Promise that resolves with the response data
    const options: RequestInit = { // Configure request options
        method, // Set HTTP method
        body: data // Set request body (if provided)
    };

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, options); // Perform API request

        if (!res.ok) { // Check if response status indicates failure
            throw new Error(`Network response was not ok: ${res.status}`); // Throw error for non-2xx status
        }

        const response = await res.json(); // Parse response JSON

        return response as ResponseType; // Return response data with type safety
    } catch (error) { // Catch any errors that occur during the request
        console.error(`API request failed (url: ${url}):`, error); // Log error to console
        throw error; // Re-throw error for handling in calling code
    }
}
