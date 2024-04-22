// Importing the baseApiRequest function from the service helper module
import { baseApiRequest } from "@ilhamirfan/helper/service";

// Function definition for handling user login requests
export async function requestLogin(email: string, password: string) {
    // Creating URLSearchParams object with email and password parameters
    const loginData = new URLSearchParams({ email: email, password: password });

    try {
        // Sending a POST request to the specified API endpoint with the login data
        const loginResponse = await baseApiRequest("/hotel-business/login", "POST", loginData);

        // If the login attempt is unsuccessful, throwing an error with the error message received from the server
        if (!loginResponse.success) {
            throw Error(loginResponse.errors);
        }

        // Returning the user's data if the login attempt is successful
        return loginResponse.data;
    } catch (error) {
        // Handling different types of errors
        if (error instanceof Error) {
            // Switching based on the error message received from the server
            switch (error.message) {
                case "Data not found.":
                    throw new Error("Your data is not found. Please make sure you have entered correct credentials!");
                case "Wrong password.":
                    throw new Error("Your password is incorrect!");
                default:
                    // If the error message is not recognized, rethrowing the error
                    throw error;
            }
        } else {
            // If the error is not an instance of Error (unexpected error), rethrowing the error
            throw error;
        }
    }
}
