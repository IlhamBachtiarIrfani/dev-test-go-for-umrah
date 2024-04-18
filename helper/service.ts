export async function baseApiRequest<ResponseType = any>(
    url: string,
    method: string,
    data?: any
): Promise<ResponseType> {
    const options: RequestInit = {
        method,
        body: data
    };

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, options);

        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.status}`);
        }

        const response = await res.json();

        if (!response.success) {
            throw new Error(response.errors || "Request failed"); // Generic error
        }

        return response.data || response as ResponseType; // Type safe return
    } catch (error) {
        console.error(`API request failed (url: ${url}):`, error);
        throw error; // Re-throw for handling in calling code
    }
}