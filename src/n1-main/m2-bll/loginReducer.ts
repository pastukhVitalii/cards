import {loginApi} from "../m3-dal/loginApi";
import {Dispatch} from "redux";
import {InferActionTypes} from "./store";

type InitialStateType = typeof initialState;

const initialState = {
    isAuth: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CARDS_REDUCER/LOGIN_SUCCESS':
            return {
                ...state,
                isAuth: true
            }
        case 'CARDS_REDUCER/LOGIN_ERROR':
            return {
                ...state,
                isAuth: true
            }
        default:
            return state
    }

}

//Actions
type ActionsType = InferActionTypes<typeof actions>

const actions = {
    logInSuccess: () => ({
        type: 'CARDS_REDUCER/LOGIN_SUCCESS'
    }),
    logInError: () => ({
        type: 'CARDS_REDUCER/LOGIN_ERROR'
    })
}


// ThunkCreator
export const logIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await loginApi.logIn(email, password, rememberMe)
        dispatch(actions.logInSuccess())
        alert('succsess')
        console.log(res)
    } catch (e) {
        dispatch(actions.logInError())
        alert(e)
    }
}