import React from "react";
import loading from "../../../assets/Spinner_blue.svg"

let Preloader = (props: any) => {
    return <>
        <img src={loading}/>
        loading...
    </>

}

export default Preloader