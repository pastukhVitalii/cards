import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../../n1-main/m1-ui/common/button/Button";
import {signUp} from "../../../../n1-main/m2-bll/registrationReducer";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {login} from "../../../../n1-main/m1-ui/routes/routes";
import { Redirect } from "react-router-dom";

type OwnPropsType = {
    email: string;
    pass: string;
    setEmail: () => void;
    setPass: () => void;
}

const RegisterV = React.memo((props: OwnPropsType)=> {

    console.log('register render');

    const [email, setEmail] = useState('pastuh3@gmail.com');
    const [pass, setPass] = useState('!Asd1234');

    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, [setEmail]);

    const setPasswordCallback = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, [setPass]);

    const dispatch = useDispatch();
    const signUpCallback = useCallback(
        () => dispatch(signUp(email, pass)),
        [email, pass, dispatch]
    );

    const error = useSelector((state: AppStateType) => state.registration.error);
    const success = useSelector((state: AppStateType) => state.registration.success);
    if(success) {
        return <Redirect to={login}/>
    }

    let inputEmailStyle = error || '';
    let inputPassStyle = error || '';
    let btnStyle = '' || 'primary';

    return (
        <>
            <div>
                Sigin up
                {error? <div>{error}</div>: ''}
                <Input type={inputEmailStyle} placeholder={'e-mail'} value={email} onChange={setEmailCallback} />
                <Input type={inputPassStyle} placeholder={'password'} value={pass} onChange={setPasswordCallback} />
                <Button type={btnStyle} name={'Login'} spiner={false} disable={false} onClick={signUpCallback} />
            </div>
        </>
    );
});

export default RegisterV;