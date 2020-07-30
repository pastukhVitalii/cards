import axios from 'axios';



const instance = axios.create({
    baseURL: 'http://localhost:7542/1.0',
})

export const loginApi = {
    logIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post('/auth/login', {email, password, rememberMe})
        return response.data
    }
}