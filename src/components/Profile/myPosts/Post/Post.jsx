/* eslint-disable no-undef */
import React from "react";
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <p className={classes.post__text}>{props.message}</p>
            <span>likes</span> {props.likesCount}
        </div>
    )
}

export default Post; 