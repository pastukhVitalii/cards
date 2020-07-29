import {registerApi} from "../m3-dal/registerApi";
import {Dispatch} from "redux";
import {InferActionTypes} from "./store";

type InitialStateType = typeof initialState;

const initialState = {
    success: false,
    error: ''
}

export const registrationReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'CARDS_REDUCER/REGISTER_SUCCESS': {
            return {
                ...state, success: action.success,
            }
        }
        case 'CARDS_REDUCER/REGISTER_ERROR': {
           return {
               ...state,  error: action.error
           }
        }
        default: {
            return state
        }
    }
}
// Thunk

export const signUp = (email: string, password: string) => async (dispatch: Dispatch<ActionType>, getState: any) => {
    debugger
    const res = await registerApi.signUp(email, password);
    if (res.error) {
        debugger
        dispatch(actions.registrationError(res.error));
        alert(res.error)
    }
    else {
        dispatch(actions.registrationSuccess(true));
        alert('you are registered')
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
    } as const),

}

/*export const getCounterSuccess = (counterValue: number) => {
    return {
        type: 'COUNTER_COUNTER_REDUCER/GET_COUNTER_SUCCESS',
        counterValue
    }
}
export const incCounterSuccess = (value: number) => {
    return {
        type: 'COUNTER_COUNTER_REDUCER/POST_COUNTER_SUCCESS',
        value
    }
}*/

// Thunk

/*export const getCounter = () => async (dispatch: Dispatch<ActionType>) => {
    try {
        const value = await counterApi.getCounterValue()
        dispatch(actions.getCounterSuccess(value))
    } catch (e) {
        console.log(e)
    }
}*/
/*
export const incCounter = () => async (dispatch: Dispatch<ActionType>, getState: () => AppStateType) => {
    let currentValue = getState().counter.value;
    let newValue = currentValue + 1;
    try {
        const value = await counterApi.incCounterValue(newValue)
        dispatch(actions.incCounterSuccess(value))
    } catch (e) {
        console.log(e)
    }
}*/
