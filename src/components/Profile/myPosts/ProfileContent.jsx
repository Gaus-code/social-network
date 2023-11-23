import React from "react";
import classes from '../Profile.module.css';

const ProfileContent = (props) => {
    return (
        <>
            <div className={classes.profile}>
                <div className={classes.profile__container}>
                    <div className={classes.profile__overview}>
                        <div className={classes.avatar}>
                            <div className={classes.profile__avatar}></div>
                            <div className={classes.avatar_info}>
                                <p>name</p>
                                <p>surname</p>
                            </div>
                        </div>
                        <div className={classes.profile__info}>
                            <p>Page Overview</p>
                            <p className={classes.profile__followers}>Followers: 18</p>
                        </div>
                        <div className={classes.profile__posts}>
                            <div className={classes.post}>
                                <img className={classes.post__icon} src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="earth icon" />
                                <p className={classes.post__text}>Post reach</p>
                            </div>
                            <div className={classes.post}>
                                <img className={classes.post__icon} src="https://cdn-icons-png.flaticon.com/512/2118/2118701.png" alt="people icon" />
                                <p className={classes.post__text}>Post engagment</p>
                            </div>
                            <div className={classes.post}>
                                <img className={classes.post__icon} src="https://cdn-icons-png.flaticon.com/512/5185/5185573.png" alt="like icon" />
                                <p className={classes.post__text}>New pages likes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileContent;