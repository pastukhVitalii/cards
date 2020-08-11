import React, {useEffect} from "react";
import css from './Packs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import Button from "../../../../n1-main/m1-ui/common/button/Button";
import {NavLink} from "react-router-dom";
import {getPacksTh} from "../p2-bll/packsReducer";

type OwnPropsType = {
    getPacks: () => void;
}

const Packs = React.memo((props: OwnPropsType) => {

    console.log('packs render');
    const token = useSelector((state: AppStateType) => state.login.token);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacksTh(token))
    }, [token, dispatch])

    const {cardPacks} = useSelector((store: AppStateType) => store.packs);

    let delPacksOnClick = () => {
        alert('delete')
    }

    let btnStyle = '' || 'primary';

    let packsArr = cardPacks.map(p => {
        return <tr>
            <td className={css.column}>{p.name}</td>
            <td className={css.column}>{p.grade}</td>
            <td className={css.columnOpt}>
                <Button name={'delete'} type={btnStyle} small={true} disable={true} onClick={delPacksOnClick}/>
                <Button name={'update'} type={btnStyle} small={true} disable={true} onClick={delPacksOnClick}/>
                <NavLink to='/'> Cards </NavLink>
                <NavLink to='/'> Learn </NavLink>
            </td>
        </tr>
    })
    return (
        <>
            <div className={css.mainContent}>
                <div>Packs page</div>
                <table className={css.table}>
                    <tr>
                        <td className={css.column}>Packs</td>
                        <td className={css.column}>Grade</td>
                        <td className={css.columnOpt}>Option</td>
                    </tr>
                    {packsArr}
                </table>
            </div>
        </>
    );
});

export default Packs;