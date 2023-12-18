import React from "react";
import classes from './Profile.module.css';
import ProfileContent from "./myPosts/ProfileContent";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = (props) => {
    return (
        <>
            <main className={classes.main}>
                <ProfileContent />
                <MyPostsContainer store={props.store} />
            </main>
        </>
    )
}

export default Profile;