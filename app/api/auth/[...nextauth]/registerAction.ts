// Importing the baseApiRequest function from the service helper module
import { baseApiRequest } from "@ilhamirfan/helper/service";

// Function definition for handling user registration requests
export async function requestRegister(email: string, password: string, firstName: string, lastName: string, userName: string, phone: string) {
    // Creating URLSearchParams object with registration data
    const registerData = new URLSearchParams({
        email: email,
        firstname: firstName,
        lastname: lastName,
        username: userName,
        phone: phone,
        password: password
    });

    try {
        // Sending a POST request to the specified API endpoint with the registration data
        const registerResponse = await baseApiRequest("/hotel-business/store", "POST", registerData);

        // Returning the response received from the server
        return registerResponse;
    } catch (error) {
        // If an error occurs during the API request, throwing the error
        throw error;
    }
}
