import React, {useCallback, useState} from "react";
import Input from "../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../n1-main/m1-ui/common/button/Button";
import {logIn} from "../../../n1-main/m2-bll/loginReducer";
import {useDispatch} from "react-redux";

const Login = (props: any) => {

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [rememberMe, setRememberMe] = useState(false);


    const dispatch = useDispatch();
    const signIn =  useCallback(() => {
        dispatch(logIn(email, pass, rememberMe))
    }, [email, pass, rememberMe])


    const setEmailCallBack = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail]);

    const setPasswordCallBack = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
    }, [setPass]);


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
                            <input type={'checkbox'} checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/> Remember me
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