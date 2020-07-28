import React, {useCallback, useState} from "react";
import Input from "../../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../../n1-main/m1-ui/common/button/Button";
import { useDispatch } from "react-redux";

const RegisterV = (props: any) => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, [setEmail]);

    const setPasswordCallback = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, [setPass]);

    const dispatch = useDispatch();
    /*const signUpCallback = useCallback(
        () => dispatch(signUp(email, pass)),
        [email, pass, dispatch]
    );*/

    let inputEmailStyle = '' || 'error';
    let inputPassStyle = '' || 'error';
    let btnStyle = '' || 'primary';

    return (
        <>
            <div >
                Sigin up
                <Input type={inputEmailStyle} placeholder={'e-mail'} value={email} onChange={setEmailCallback}/>
                <Input type={inputPassStyle} placeholder={'password'} value={pass} onChange={setPasswordCallback}/>
                <Button type={btnStyle} name={'Login'} spiner={false} disable={false} onClick={{/*signUpCallback*/}} />
            </div>
        </>
    );
}

export default RegisterV;