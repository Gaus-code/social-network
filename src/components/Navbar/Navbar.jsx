import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
            <li className={classes.navbar__item}>
                <a href="#" className={classes.navbar__link}><img className={classes.home_icon} src="https://www.pinclipart.com/picdir/big/413-4132058_spring-home-icon-blue-png-clipart.png" alt="home-icon" />Home</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="/profile" className={classes.navbar__link}><img className={classes.home_icon} src="https://www.iconpacks.net/icons/2/free-briefcase-icon-1965-thumb.png" alt="about us" /> profile</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="#" className={classes.navbar__link}><img className={classes.home_icon} src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" alt="docs" /> docs</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="#" className={classes.navbar__link}><img className={classes.home_icon} src="https://cdn-icons-png.flaticon.com/512/189/189249.png" alt="download" /> download</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="#" className={classes.navbar__link}><img className={classes.home_icon} src="https://cdn-icons-png.flaticon.com/512/2057/2057748.png" alt="support" /> support</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="#" className={classes.navbar__link}><img className={classes.home_icon} src="https://cdn-icons-png.flaticon.com/512/1899/1899917.png" alt="menu" /> menu</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="#" className={classes.navbar__link}><img className={classes.home_icon} src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png" alt="settings" /> settings</a>
            </li>
            <li className={classes.navbar__item}>
                <a href="/dialogs" className={classes.navbar__link}><img className={classes.home_icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/423px-Google_Contacts_icon_%282022%29.svg.png?20221103112314" alt="contacts" /> dialogs</a>
            </li>
        </ul>
    </nav>
}

export default Navbar;