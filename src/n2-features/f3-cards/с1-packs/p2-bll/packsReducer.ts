import {Dispatch} from "redux";
import {InferActionTypes} from "../../../../n1-main/m2-bll/store";

type InitialStateType = typeof initialState;

const initialState = {
    packs: [
        {
            name: 'first pack',
            grade: '10',
            pack:{}
        },
        {
            name: 'second pack',
            grade: '7',
            pack:{}
        }
    ]
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    return state
    /*switch (action.type) {
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
    }*/
}
// Thunk

export const signUp = (email: string, password: string) => async (dispatch: Dispatch<ActionType>, getState: any) => {

    // dispatch((actions.setPacks()))
    /*try {
        const res = await registerApi.signUp(email, password);
        dispatch(actions.registrationSuccess(true));
        alert('you are registered')
    } catch (e) {
        dispatch(actions.registrationError(e.response.data.error));
        alert(e.response.data.error)
    }*/
}

// Action

type ActionType = InferActionTypes<typeof actions>

const actions = {
    setPacks: () => ({
        type: 'PACKS_REDUCER/SET_PACKS'
    } as const)
}
