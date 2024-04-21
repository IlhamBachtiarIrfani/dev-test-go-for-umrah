import { baseApiRequest } from "@ilhamirfan/helper/service";

export async function requestForgotPassword(email: string) {
    const forgotPasswordData = new URLSearchParams({ email: email });

    try {
        const forgotPasswordResponse = await baseApiRequest("/hotel-business/forgot-password/request", "POST", forgotPasswordData);

        return forgotPasswordResponse;
    } catch (error) {
        throw error;
    }
}