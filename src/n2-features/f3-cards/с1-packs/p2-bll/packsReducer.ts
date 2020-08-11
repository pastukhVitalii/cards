import {Dispatch} from "redux";
import {InferActionTypes} from "../../../../n1-main/m2-bll/store";
import {packsApi} from "../../../../n1-main/m3-dal/packsAPI";

type InitialStateType = typeof initialState;

const initialState = {
    cardPacks: [
        {
            name: 'first pack',
            grade: '10',
            pack: {}
        },
        {
            name: 'second pack',
            grade: '7',
            pack: {}
        }
    ]
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'PACKS_REDUCER/SET_PACKS': {
            return {
                ...state, cardPacks: action.cardPacks,
            }
        }
        default: {
            return state
        }
    }
}
// Thunk

export const getPacksTh = (token: string): any  => async (dispatch: Dispatch<ActionType>) => {
    // try take token from getState
    let response = await packsApi.getPacks(token);
    dispatch(actions.getPacks(response.cardPacks))
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
    getPacks: (cardPacks: Array<any>) => ({
        type: 'PACKS_REDUCER/SET_PACKS',
        cardPacks
    } as const)
}
