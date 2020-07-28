import React from 'react';
import './Button.css';

const Button = (props) => {
  let loading = props.spiner === true ? <img
    src="https://media0.giphy.com/media/131tNuGktpXGhy/200w.webp?cid=ecf05e474d05d306344ab3d36c11ca3dd5479c7af938e93e&rid=200w.webp"
    alt=""/> : '';
  return (
    <button className={`button + ${props.type}`} onClick={props.onClick}>
      {loading}
      {props.name}
    </button>
  )
}

export default Button;
