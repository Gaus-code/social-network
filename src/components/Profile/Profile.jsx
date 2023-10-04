import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/post/myPosts";

const Profile = () => {
    return <main className={classes.main}>
        <div className={classes.banner}>
            <div className={classes.banner__info}>
                <h1>Welcome to professional dashboard</h1>
                <p>Insights, management tools and ad creation - all in one place.</p>
            </div>
            <div className={classes.banner__img}>
                <img className={classes.banner__image} src="https://img.freepik.com/free-vector/cute-astronaut-working-laptop-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-4634.jpg" alt="join to our development" />
                <img className={classes.banner__image} src="https://img.freepik.com/free-vector/cute-astronaut-cup-coffee-cartoon-vector-icon-illustration-science-drink-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3342.jpg" alt="coffee time" />
                <img className={classes.banner__image} src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg" alt="join us" />
            </div>
        </div>
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
        <MyPosts />
    </main>
}

export default Profile;