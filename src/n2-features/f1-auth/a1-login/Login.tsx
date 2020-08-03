import React, {useCallback, useState} from "react";
import Input from "../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../n1-main/m1-ui/common/button/Button";
import {useDispatch, useSelector} from "react-redux";
import { signIn } from "../../../n1-main/m2-bll/loginReducer";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import { Redirect } from "react-router-dom";

const Login = (props: any) => {

    const {error, errorMessage, isAuth, disableBtn} = useSelector((state: AppStateType) => state.login)

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [rememberMe, setRememberMe] = useState(false);


    const setEmailCallBack = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, [setEmail]);

    const setPasswordCallBack = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, [setPass]);

    const setRememberMeCallBack = useCallback((e) => {
        setRememberMe(e.currentTarget.checked)
    }, [setRememberMe]);

    const dispatch = useDispatch();
    const signInCallback = useCallback(
        () => dispatch(signIn(email, pass, rememberMe)),
        [email, pass, rememberMe, dispatch]
    );

    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    let btnStyle = '' || 'primary';
    let inputStyle = '' || 'error';
    return (
        <>
            <div>
                <form action="">
                    <div>
                        <Input type={inputStyle} placeholder={'e-mail'} value={email} onChange={setEmailCallBack}/>
                    </div>
                    <div>
                        <Input type={inputStyle} placeholder={'password'} value={pass} onChange={setPasswordCallBack}/>
                    </div>
                    <div>
                        <label>
                            <input type={'checkbox'} checked={rememberMe} onClick={setRememberMeCallBack}/> Remember me
                        </label>
                    </div>
                    <div><a href="">Forgot?</a></div>
                    <Button type={btnStyle} name={'Login'} onClick={signInCallback}
                            spiner={false} disable={disableBtn}/> {/*primary danger loading*/}
                </form>

            </div>
        </>
    );
}

export default Login;