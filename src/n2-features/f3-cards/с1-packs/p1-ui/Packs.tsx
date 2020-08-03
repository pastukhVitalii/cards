import React from "react";
import css from './Packs.module.css'

const Packs = React.memo((props)=> {

    console.log('packs render');


    return (
        <>
            <div>
                <div>Packs page</div>
                <div className={css.table_header}>
                    <div>Name packs</div>
                    <div>Grade</div>
                </div>
                <div>
                    <div className={css.table_header}>

                    </div>
                </div>

            </div>
        </>
    );
});

export default Packs;