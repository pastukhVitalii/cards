import {authAPI} from "../m3-dal/authAPI";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const LOGIN_SUCCESS = "CARDS/LOGINREDUCER/LOGIN_SUCCESS"
const LOGIN_ERROR = "CARDS/LOGINREDUCER/LOGIN_ERROR"

type InitialStateType = typeof initialState;

export const initialState = {
    errorMessage: "",
    isAuth: false,
    isDisabled: false,
    isFetching: false
}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                isDisabled: true,
                isFetching: true
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                isAuth: action.isAuth,
                errorMessage: action.errorMessage,
            }
        }
        default: {
            return state
        }
    }
}


const loginSuccsess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}
const showError = () => {
    return {
        type: LOGIN_ERROR,
        errorMessage: "smth wrong"
    }
}
const disableBtn = (isDisabled: boolean) => {

}

type ThunkType = ThunkAction<void, AppStateType, unknown, any>;

type DispatchType = ThunkDispatch<AppStateType, unknown, any>;

//thunk
export const signIn = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: DispatchType) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginSuccsess())
        }).catch((e) => {
        // if()
        dispatch(showError())
    })
}