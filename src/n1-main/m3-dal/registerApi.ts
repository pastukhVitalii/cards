import axios from "axios";

export type SignUpDataType = {
    success: boolean;
    error: string;
}

const instance = axios.create({
    baseURL: 'http://localhost:7542/1.0'
})

export const registerApi = {
    /*signUp(email: string, password: string) {
        debugger
        return instance.post<RegistrationType>('/auth/register', {email, password})
            .then(response => {
                    debugger
                    response.data
                }
            )
    }*/

    signUp: async (email: string, password: string) => {
        const response = await instance.post<SignUpDataType>('/auth/register', {email, password});
        return response.data;
    }
}

