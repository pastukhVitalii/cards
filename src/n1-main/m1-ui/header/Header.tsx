import React from "react";
import {NavLink} from "react-router-dom";
import css from './Header.module.css';
import {login, newPass, profile, registration, restore} from "../routes/routes";

const Header = (props: any) => {
    return (
        <header>
            <div>
                <img className={css.logo}
                     src="https://pics.clipartpng.com/midle/Deck_of_Cards_PNG_Clip_Art_Image-2722.png" alt="cards"/>
            </div>
            <NavLink to={profile}> Profile </NavLink>
            <NavLink to={login}> Sign in </NavLink>
            <NavLink to={registration}> Sign up </NavLink>
            <NavLink to={restore}> Restore password </NavLink>
            <NavLink to={newPass}> New password </NavLink>
            <div className={css.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;