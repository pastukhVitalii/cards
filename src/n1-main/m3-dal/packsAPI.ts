import axios from "axios"

type PackType = {
    _id: string;
    user_id: string;
    name: string;
    path: string;
    grade: number;
    shots: number;
    type: string;
    rating: number;
    more_id: string;
    created: string;
    updated: string;
}

export type PacksStateType = {
    cardPacks: PackType[];
    success: boolean;
    token: string;
    error: string;
}

const instance = axios.create({
    baseURL: 'http://localhost:7542/1.0'
})

export const packsApi = {
    getPacks: async (token: string) => {
        const response = await instance.get<PacksStateType>(`/cards/pack?token=${token}`);
        return response.data;
    }
}