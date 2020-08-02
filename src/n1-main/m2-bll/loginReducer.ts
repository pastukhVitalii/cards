import {authAPI} from "../m3-dal/authAPI";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {act} from "react-dom/test-utils";

const LOGIN_SUCCESS = "CARDS/LOGINREDUCER/LOGIN_SUCCESS"
const LOGIN_ERROR = "CARDS/LOGINREDUCER/LOGIN_ERROR"

type InitialStateType = typeof initialState;

export const initialState = {
        error: "",
        errorMessage: "",
        isAuth: false,
        disableBtn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
        switch (action.type) {
                case LOGIN_SUCCESS: {
                        return {
                                ...state,
                                isAuth: action.isAuth
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

//action

type SetDataType = {
        type: typeof LOGIN_SUCCESS
        email: string
        password: string
        rememberMe:boolean
}

const setData = (email: string, password: string, rememberMe:boolean): SetDataType => {
    return {
            type: LOGIN_SUCCESS,
            isAuth: true
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, SetDataType>;

type DispatchType = ThunkDispatch<AppStateType, unknown, SetDataType>;
//thunk
export const  signIn = (email: string, password: string, rememberMe:boolean): ThunkType => (dispatch: DispatchType) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                    dispatch(setData(isAuth))
            })
}