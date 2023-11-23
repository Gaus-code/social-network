import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileContent from "./myPosts/ProfileContent";


const Profile = (props) => {
    return (
        <>
            <main className={classes.main}>
                <ProfileContent />
                <MyPosts posts={props.profilePage.postsData} updateNewPostText={props.updateNewPostText}  newPostText={props.profilePage.newPostText} addPost={props.addPost} />
            </main>
        </>
    )
}

export default Profile;