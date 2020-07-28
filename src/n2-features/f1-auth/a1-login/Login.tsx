import React, {useState} from "react";
import Input from "../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../n1-main/m1-ui/common/button/Button";

const Login = (props: any) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rememberMe, setRememberMe] = useState(false);


    const onClick = () => {
        alert('fdgfhf')
    }
    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const handlePassChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleRememberMeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    let btnStyle ='' || 'primary';
    let inputStyle ='' || 'error';
    return (
        <>
            <div>
                <Input type={inputStyle} placeholder={'placeholder'} value={email} onChange={handleEmailChange}/>
                <Input type={inputStyle} placeholder={'placeholder'} value={password} onChange={handlePassChange}/>
                <div><input type='checkbox' checked={rememberMe} onChange={handleRememberMeChange}/>Remember me</div>
                <Button type={btnStyle} name={'name'}  onClick={onClick} spiner={true}/> {/*primary danger loading*/}
            </div>
        </>
    );
}

export default Login;