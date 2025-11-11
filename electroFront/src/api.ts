const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function apiRequest<T>(
    url: string,
    options?: RequestInit
) : Promise<T> {
    
    const response = await fetch(`${API_BASE_URL}${url}`, {
        headers: {
            "content-type": "application/json",
        },
        ...options,
    }); 
    
    if(!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || `API request failed with status ${response.status}`);
    }
    
    return response.json() as Promise<T>;
}