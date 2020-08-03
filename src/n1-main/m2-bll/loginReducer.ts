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
                                isAuth: true,
                                disableBtn: true
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


const setData = () => {
    return {
            type: LOGIN_SUCCESS,
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, any>;

type DispatchType = ThunkDispatch<AppStateType, unknown, any>;

//thunk
export const  signIn = (email: string, password: string, rememberMe:boolean): ThunkType => (dispatch: DispatchType) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                    dispatch(setData())
            })
}