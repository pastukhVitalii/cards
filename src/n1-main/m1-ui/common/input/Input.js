import React from 'react';
import './Input.css';

const Input = (props) => {
    // let errorClass = this.props.state.error ? 'error' : '';
    return (
      <div className='input'>
        <input type="text" placeholder= {props.placeholder}
               className={props.type}
               value={props.value}
               onChange={props.onChange}
               autoFocus={true}/>
               {/*<input type="text" placeholder='Write name'
               className={css[errorClass]}
               onKeyPress={this.props.onKeyPress}
               onChange={this.props.changeTitle}
               value={this.props.state.title}
               autoFocus={true}/>*/}
      </div>
    );
}

export default Input;

//className={this.props.title === ''? 'error': ''}
