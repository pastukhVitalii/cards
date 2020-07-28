import React, {useState, useCallback} from "react";
import Input from "../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../n1-main/m1-ui/common/button/Button";


const Register = (props: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, [setEmail])

    const setPasswordCallback = useCallback((e) => {
        setPassword(e.currentTarget.value)
    }, [setPassword])


    let btnStyle = '' || 'primary';
    let inputStyle = '' || 'error';

    return (
        <>
            <div>
                <Input type={inputStyle}
                       placeholder={'Type your e-mail'}
                       value={email} onChange={setEmailCallback}/>

                <Input type={inputStyle}
                       placeholder={'Type your password'}
                       value={password}
                       onChange={setPasswordCallback}/>

                <Button type={btnStyle}
                        name={'Sign Up'}
                        spiner={false}
                        disable={false}
                        onClick={() => {}}/>

            </div>
        </>
    );
}

export default Register;