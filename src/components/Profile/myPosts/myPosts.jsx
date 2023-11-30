/* eslint-disable no-undef */
import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/Post';
import { type } from "@testing-library/user-event/dist/type";




const MyPosts = (props) => {   
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
     
    let newPostEl = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onChange = () => {
        let text = newPostEl.current.value;
        props.dispatch({type: 'UPDATE-POST-TEXT' , newText:text});
    }

    return (
    <div className={classes.newPost}>
        MY POSTS
        <div className={classes.newPost__container}>
            <h2>Create a new Post</h2>
            <div className={classes.newPost__input}>
                <div>
                    <textarea onChange={onChange} className={classes.input} ref={newPostEl} value={props.newPostText}/>
                </div>
                <div>
                    <button className={classes.input__btn} type="submit" onClick={addPost}><img className={classes.btn__create} src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png" alt="create!" /></button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    </div>
    )
}
export default MyPosts;