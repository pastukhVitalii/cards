import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {restorePassReducer} from "./restorePassReducer";
import {profileReducer} from "./profileReducer";
import {newPassReducer} from "./newPassReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    restorePass: restorePassReducer,
    profile: profileReducer,
    newPass: newPassReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(rootReducer, applyMiddleware(thunk));

