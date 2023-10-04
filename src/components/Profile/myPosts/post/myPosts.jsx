import React from "react";
import classes from './myPosts.module.css';

const MyPosts = () => {
    return <div className={classes.newPost}>
        <div className={classes.newPost__container}>
            <h2>Create a new Post</h2>
            <div className={classes.newPost__input}>
                <form>
                <input className={classes.input} type="text" />
                <button className={classes.input__btn} type="submit"><img className={classes.btn__create} src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png" alt="create!" /></button>
                </form>
            </div>
        </div>
    </div>
}
export default MyPosts;