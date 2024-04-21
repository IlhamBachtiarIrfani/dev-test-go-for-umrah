import { baseApiRequest } from "@ilhamirfan/helper/service";

export async function requestLogin(email: string, password: string) {
    const loginData = new URLSearchParams({ email: email, password: password });

    try {
        const loginResponse = await baseApiRequest("/hotel-business/login", "POST", loginData);

        if (!loginResponse.success) {
            throw Error(loginResponse.errors)
        }

        console.log(loginResponse);

        return loginResponse.data;
    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {
                case "Data not found.":
                    throw new Error("Your data is not found. please make sure u have correct credentials!")
                case "Wrong password.":
                    throw new Error("Your password is incorrect!");
                default:
                    throw error;
            }
        } else {
            throw error;
        }
    }
}