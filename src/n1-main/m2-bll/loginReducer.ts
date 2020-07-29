import {authAPI} from "../m3-dal/authAPI"


const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
type InitialStateType = typeof initialState;

const initialState = {

}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

//ActionCr
export const setLoginData = (email: string, password: string, rememberMe: boolean) => ({
    type: SET_LOGIN_DATA, payload:
        {email, password, rememberMe}
});

//ThunkCr
export const signIn = (email: string, password: string, rememberMe: boolean) => (dispatch: any, getState: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            dispatch(setLoginData(email, password, rememberMe))
        })
}
