import React from "react";
import classes from './Header.module.css';
import HeaderButton from './HeaderButton/HeaderButton';

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.logo__container}>
            <img className={classes.header__logo} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" />
            <div className="header__title">My App</div>
        </div>
        <div className={classes.header__container}>
        <HeaderButton />
        </div>
    </header>
}

export default Header;