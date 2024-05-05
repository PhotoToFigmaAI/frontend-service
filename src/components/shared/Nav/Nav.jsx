import React from 'react';
import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <a href="#" className={classes.nav__item}>Smart Contracts
                <div className={classes.nav__valve}></div>
            </a>
            <a href="#" className={classes.nav__item}>Services
                <div className={classes.nav__valve}></div>
            </a>
            <a href="#" className={classes.nav__item}>Solutions
                <div className={classes.nav__valve}></div>
            </a>
            <a href="#" className={classes.nav__item}>Roadmap<div className={classes.nav__valve}></div></a>
            <a href="#" className={classes.nav__item}>Whitepaper
                <div className={classes.nav__valve}></div>
            </a>
        </div>
    );
};

export default Nav;