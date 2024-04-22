// Importing the baseApiRequest function from the service helper module
import { baseApiRequest } from "@ilhamirfan/helper/service";

// Function definition for requesting a password reset
export async function requestForgotPassword(email: string) {
    // Creating URLSearchParams object with email parameter
    const forgotPasswordData = new URLSearchParams({ email: email });

    try {
        // Sending a POST request to the specified API endpoint with the email data
        const forgotPasswordResponse = await baseApiRequest("/hotel-business/forgot-password/request", "POST", forgotPasswordData);

        // Returning the response from the server
        return forgotPasswordResponse;
    } catch (error) {
        // If an error occurs, rethrowing it to be handled by the caller
        throw error;
    }
}
