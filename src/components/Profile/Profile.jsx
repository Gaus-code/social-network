import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileContent from "./myPosts/ProfileContent";


const Profile = (props) => {
    return (
        <>
            <main className={classes.main}>
                <ProfileContent />
                <MyPosts posts={props.profilePage.postsData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
            </main>
        </>
    )
}

export default Profile;