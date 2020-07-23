import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {restorePassReducer} from "./restorePassReducer";
import {profileReducer} from "./profileReducer";
import {newPassReducer} from "./newPassReducer";

let rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    restorePass: restorePassReducer,
    profile: profileReducer,
    newPass: newPassReducer
})

//export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(rootReducer);