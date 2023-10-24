import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogs__avatar}>
            <div className={classes.dialogs__img}></div>
            <div className={classes.dialog__shortMes}>
                <NavLink to={path}>
                    <p className={classes.dialogs__name}>{props.name}</p>
                    <p className={classes.dialogs__mes}>HEY!</p>
                </NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message_container}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    

    let dialodsElements = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = props.messagesData.map (m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__menu}>
                    <div className={classes.dialogs__avatars}>
                        {dialodsElements}
                    </div>
                </div>
                <div className={classes.dialogs__messages}>
                    {messagesElements}
                    <form className={classes.dialogs__form}>
                        <input className={classes.input} type="text" placeholder="enter your message" />
                        <button className={classes.sendMessage} type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;