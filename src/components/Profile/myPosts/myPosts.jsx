/* eslint-disable no-undef */
import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {   
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
     
    let newPostEl = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    }

    return (
    <div className={classes.newPost}>
        MY POSTS
        <div className={classes.newPost__container}>
            <h2>Create a new Post</h2>
            <div className={classes.newPost__input}>
                <div>
                    <textarea onChange={onPostChange} className={classes.input} ref={newPostEl} value={props.newPostText}/>
                </div>
                <div>
                    <button className={classes.input__btn} type="submit" onClick={onAddPost}><img className={classes.btn__create} src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png" alt="create!" /></button>
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