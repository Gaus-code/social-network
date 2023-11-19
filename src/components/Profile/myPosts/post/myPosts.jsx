/* eslint-disable no-undef */
import React from "react";
import classes from './myPosts.module.css';
export const Post = (props) => {
    return (
        <div className="posts">
            <p className="post__text">{props.message}</p>
            <span>like</span> {props.likesCount}
        </div>
    )
}
let posts = [
    { id: 1, message: "hello<>", likesCount: 11 },
    { id: 2, message: "whats up????", likesCount: 8 },
]

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

let newPostEl = React.createRef();
let addPost = (props) => {
    let text = newPostEl.current.value;
    props.addPost(text);
}


const MyPosts = (props) => {
    
    return (
    <div className={classes.newPost}>
        <div className={classes.newPost__container}>
            <h2>Create a new Post</h2>
            <div className={classes.newPost__input}>
                <form>
                    <input className={classes.input} type="text" ref={newPostEl} />
                    <button className={classes.input__btn} type="submit" onClick={addPost}><img className={classes.btn__create} src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png" alt="create!" /></button>
                </form>
            </div>
        </div>
        {postsElements}
    </div>
    )
}
export default MyPosts;