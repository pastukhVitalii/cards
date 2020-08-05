import {authAPI} from "../m3-dal/authAPI";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";


const LOGIN_SUCCESS = "CARDS/LOGINREDUCER/LOGIN_SUCCESS"
const LOGIN_ERROR = "CARDS/LOGINREDUCER/LOGIN_ERROR"
const IS_FETCHING = "CARDS/LOGINREDUCER/IS_FETCHING"

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
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
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
const showError = (errorMessage: string) => {
    return {
        type: LOGIN_ERROR,
        errorMessage
    }
}
const preloader = (isFetching: boolean, isDisabled: boolean) => {
    return {
        type: IS_FETCHING,
        isFetching,
        isDisabled
    }
}


type ThunkType = ThunkAction<void, AppStateType, unknown, any>;

type DispatchType = ThunkDispatch<AppStateType, unknown, any>;

//thunk
export const signIn = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: DispatchType) => {
    dispatch(preloader(true, true))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginSuccsess())
            dispatch(preloader(false, false))
        }).catch((e) => {
        dispatch(showError(e.response.data.error))
    })
}