import {registerApi} from "../m3-dal/registerApi";
import {Dispatch} from "redux";
import {InferActionTypes} from "./store";

type InitialStateType = typeof initialState;

const initialState = {
    success: false,
    error: ''
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CARDS_REDUCER/REGISTER_SUCCESS': {
            return {
                ...state, success: action.success,
            }
        }
        case 'CARDS_REDUCER/REGISTER_ERROR': {
            return {
                ...state, error: action.error
            }
        }
        default: {
            return state
        }
    }
}
// Thunk

export const signUp = (email: string, password: string) => async (dispatch: Dispatch<ActionType>, getState: any) => {
    try {
        const res = await registerApi.signUp(email, password);
        dispatch(actions.registrationSuccess(true));
        alert('you are registered')
    } catch (e) {
        dispatch(actions.registrationError(e.response.data.error));
        alert(e.response.data.error)
    }
}

// Action

type ActionType = InferActionTypes<typeof actions>

const actions = {
    registrationSuccess: (success: boolean) => ({
        type: 'CARDS_REDUCER/REGISTER_SUCCESS',
        success
    } as const),
    registrationError: (error: string) => ({
        type: 'CARDS_REDUCER/REGISTER_ERROR',
        error
    } as const)
}
