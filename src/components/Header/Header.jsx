import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.header__logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="logo" />
        <div className={classes.header__container}>
        <nav className={classes.header__navbar}>
            <ul className={classes.header__list}>
                <li className={classes.header__item}>
                    <a href="#" className={classes.header__link}>
                        <img className={classes.header__img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="join us in telegram" />
                    </a>
                </li>
                <li className={classes.header__item}>
                    <a href="#" className={classes.header__link}>
                        <img className={classes.header__img} src="https://static.vecteezy.com/system/resources/previews/017/743/718/original/instagram-icon-logo-free-png.png" alt="join us in instagram" />
                    </a>
                </li>
                <li className={classes.header__item}>
                    <a href="#" className={classes.header__link}>
                        <img className={classes.header__img} src="https://static.vecteezy.com/system/resources/previews/022/100/870/non_2x/whatsapp-logo-transparent-free-png.png" alt="join us in whatsapp" />
                    </a>
                </li>
                <li className={classes.header__item}>
                    <a href="#" className={classes.header__link}>
                        <img className={classes.header__img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/VK_logo.svg/2048px-VK_logo.svg.png" alt="join us in Vkontakte" />
                    </a>
                </li>
            </ul>
        </nav>
        <button className={classes.header__button}>Join us</button>
        </div>
    </header>
}

export default Header;