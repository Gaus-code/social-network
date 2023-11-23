import React from "react";
import classes from './Home.module.css';


const Home = (props) => {
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
        <div className={classes.content}></div>
        <div className={classes.miniBar}></div>
    </main>
}

export default Home;