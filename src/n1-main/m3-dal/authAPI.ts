import axios from "axios"

type CommonApiType = {
    email: string
    password: string
    rememberMe: boolean
}

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
    baseURL: "http://localhost:7542/1.0",
})

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return axiosInstance.post<ResponseLoginType>("/auth/login", {
            email: "sdcsc@dfvdf.com",
            password: "psdcsdcsdc2342",
            rememberMe: false})
            .then(r=> r.data)
    }
}