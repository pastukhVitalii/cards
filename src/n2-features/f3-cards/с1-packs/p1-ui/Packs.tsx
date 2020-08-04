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
        return <div className={css.packsRow}>
            <div className={css.nameColumn}>{p.name}</div>
            <div className={css.gradeColumn}>{p.grade}</div>
            <div><Button name={'delete'} type={btnStyle} disable={true} onClick={delPacksOnClick}/>
                <Button name={'update'} type={btnStyle} disable={true} onClick={delPacksOnClick}/>
                <NavLink to='/'> Cards </NavLink>
                <NavLink to='/'> Learn </NavLink></div>
        </div>
    })
    return (
        <>
            <div className={css.mainContent}>
                <div>Packs page</div>
                <div className={css.tableHeader}>
                    <div className={css.gradeColumn}>Name packs</div>
                    <div className={css.gradeColumn}>Grade</div>
                    <div>Options</div>
                </div>
                <div>
                    <div className={css.tableBody}>
                        {packsArr}
                    </div>
                </div>

            </div>
        </>
    );
});

export default Packs;