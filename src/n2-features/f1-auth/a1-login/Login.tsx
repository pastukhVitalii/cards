import React from "react";
import Input from "../../../n1-main/m1-ui/common/input/Input";
import Button from "../../../n1-main/m1-ui/common/button/Button";

const Login = (props: any) => {

    const onClick = () => {
        alert('fdgfhf')
    }
    const onChange = () => {

    }

    let btnStyle ='' || 'primary';
    let inputStyle ='' || 'error';
    return (
        <>
            <div >
                <Input type={inputStyle} placeholder={'placeholder'} value={null} onChange={onChange}/>
                <Button type={btnStyle} name={'name'}  onClick={onClick} spiner={true}/> {/*primary danger loading*/}
            </div>
        </>
    );
}

export default Login;