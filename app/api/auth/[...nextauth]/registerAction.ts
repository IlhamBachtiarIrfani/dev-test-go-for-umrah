import { baseApiRequest } from "@ilhamirfan/helper/service";

export async function requestRegister(email: string, password: string, firstName: string, lastName: string, userName: string, phone: string) {
    const registerData = new URLSearchParams({
        email: email,
        firstname: firstName,
        lastname: lastName,
        username: userName,
        phone: phone,
        password: password
    });

    try {
        const registerResponse = await baseApiRequest("/hotel-business/store", "POST", registerData);

        return registerResponse;
    } catch (error) {
        throw error;
    }
}