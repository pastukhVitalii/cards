import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const SET_DATA = "CARDS/LOGINREDUCER/SET_DATA"
type InitialStateType = typeof initialState;

const initialState = {}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe
            }
        }

        default: {
            return state
        }
    }
}

//action

type SetDataType = {
    type: typeof SET_DATA
    email: string
    password: string
    rememberMe: boolean
}

const setData = (email: string, password: string, rememberMe: boolean): SetDataType => {
    return {
        type: SET_DATA,
        email,
        password,
        rememberMe
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, SetDataType>;

type DispatchType = ThunkDispatch<AppStateType, unknown, SetDataType>;
//thunk
export const signIn = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: DispatchType) => {
    /*authAPI.login(email, password, rememberMe)
        .then(data => {
            dispatch(setData(email, password, rememberMe))
        })*/
}
