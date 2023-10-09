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

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Adrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__menu}>
                    <div className={classes.dialogs__avatars}>
                        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    </div>
                </div>
                <div className={classes.dialogs__messages}>
                    <div className="messageContainer">
                        <p className="message">hello</p>
                    </div>
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