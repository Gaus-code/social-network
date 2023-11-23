import React from "react";
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogs__avatar}>
            <div className={classes.dialogs__img}><svg fill="#a6d987" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#a6d987"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg></div>
            <div className={classes.dialog__shortMes}>
                <NavLink to={path}>
                    <p className={classes.dialogs__name}>{props.name}</p>
                    <p className={classes.dialogs__mes}>{props.message}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;