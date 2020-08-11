import axios from "axios"

type ResponseLoginType = {
    email: string
    name: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    success: boolean

}

const axiosInstance = axios.create({
    baseURL: "http://localhost:7542/1.0"
})

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return axiosInstance.post<ResponseLoginType>("/auth/login/", {
            email,
            password,
            rememberMe})
            .then(res => {
                return res
            })
    }
}