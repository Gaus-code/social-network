import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__menu}>
                    <div className={classes.dialogs__avatars}>
                        <div className={classes.dialogs__avatar}>
                            <div className={classes.dialogs__img}></div>
                            <div className={classes.dialog__shortMes}>
                                <p className={classes.dialogs__name}>Name Surname</p>
                                <p className={classes.dialogs__mes}>Hey!</p>
                            </div>
                        </div>
                        <div className={classes.dialogs__avatar}>
                            <div className={classes.dialogs__img}></div>
                            <div className={classes.dialog__shortMes}>
                                <p className={classes.dialogs__name}>Name Surname</p>
                                <p className={classes.dialogs__mes}>Whats up?</p>
                            </div>
                        </div>
                        <div className={classes.dialogs__avatar}>
                            <div className={classes.dialogs__img}></div>
                            <div className={classes.dialog__shortMes}>
                                <p className={classes.dialogs__name}>Name Surname</p>
                                <p className={classes.dialogs__mes}>I love you!!!</p>
                            </div>
                        </div>
                        <div className={classes.dialogs__avatar}>
                            <div className={classes.dialogs__img}></div>
                            <div className={classes.dialog__shortMes}>
                                <p className={classes.dialogs__name}>Name Surname</p>
                                <p className={classes.dialogs__mes}>What are the tasks???</p>
                            </div>
                        </div>
                        <div className={classes.dialogs__avatar}>
                            <div className={classes.dialogs__img}></div>
                            <div className={classes.dialog__shortMes}>
                                <p className={classes.dialogs__name}>Name Surname</p>
                                <p className={classes.dialogs__mes}>you're a piece of shit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.dialogs__messages}>
                    <form className={classes.dialogs__form}>
                        <input type="text" placeholder="enter your message" />
                        <button className={classes.sendMessage} type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;