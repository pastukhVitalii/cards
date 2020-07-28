import React, {useCallback, useState} from "react";
import Input from "../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../n1-main/m1-ui/common/button/Button";
import {authAPI} from "../../../n1-main/m3-dal/authAPI"

type LoginPropsType ={

}

const Login = (props: any) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rememberMe, setRememberMe] = useState(false);


    const signIn = () => {
        authAPI.login(email, pass, rememberMe)
    }


    const setEmailCallBack = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, [setEmail]);

    const setPasswordCallBack = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, [setPass]);

    const setRememberMeBack = useCallback((e) => {
        setRememberMe(e.currentTarget.checked)
    }, [setRememberMe]);


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
                            <input type={'checkbox'} checked={rememberMe}/> Remember me
                        </label>
                    </div>
                    <div><a href="">Forgot?</a></div>
                    <Button type={btnStyle} name={'Login'} onClick={signIn}
                            spiner={false} disable={false}/> {/*primary danger loading*/}
                </form>

            </div>
        </>
    );
}

export default Login;