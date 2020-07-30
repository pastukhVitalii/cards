import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../../n1-main/m1-ui/common/button/Button";
import {signUp} from "../../../../n1-main/m2-bll/registrationReducer";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import { Redirect } from "react-router-dom";
import {login} from "../../../../n1-main/m1-ui/routes/routes";

const RegisterV = (props: any) => {

    const [email, setEmail] = useState<string>('pastuh3@gmail.com');
    const [pass, setPass] = useState<string>('!Asd1234');

    const setEmailCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail]);

    const setPasswordCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
    }, [setPass]);

    const dispatch = useDispatch();
    const signUpCallback = useCallback(
        () => dispatch(signUp(email, pass)),
        [email, pass, dispatch]
    );

    const error = useSelector((state: AppStateType) => state.registration.error)


    let inputEmailStyle = '' || 'error';
    let inputPassStyle = '' || 'error';
    let btnStyle = '' || 'primary';

    return (
        <>
            <div >
                {error ? <Redirect to={login}/> : false}
                Sigin up
                <Input type={inputEmailStyle} placeholder={'e-mail'} value={email} onChange={setEmailCallback} />
                <Input type={inputPassStyle} placeholder={'password'} value={pass} onChange={setPasswordCallback} />
                <Button type={btnStyle} name={'Login'} spiner={false} disable={false} onClick={signUpCallback} />
            </div>
        </>
    );
}

export default RegisterV;