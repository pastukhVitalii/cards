import React from "react";
import css from './Packs.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import Button from "../../../../n1-main/m1-ui/common/button/Button";
import {packs} from "../../../../n1-main/m1-ui/routes/routes";
import {NavLink} from "react-router-dom";

type OwnPropsType = {
    email: string;
    pass: string;

}

const Packs = React.memo((props: OwnPropsType) => {

    console.log('packs render');

    const {packs} = useSelector((store: AppStateType) => store.packs);

    let delPacksOnClick = () => {
        alert('delete')
    }

    let btnStyle = '' || 'primary';

    let packsArr = packs.map(p => {
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