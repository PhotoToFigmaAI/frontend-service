import React from 'react';
import LogoImage from "../../../assets/img/logo.svg"
import GitHubLogo from "../../../assets/img/github.svg"
import DiscordLogo from "../../../assets/img/discord.svg"
import RedditLogo from "../../../assets/img/reddit.svg"
import TwitterLogo from "../../../assets/img/twitter.svg"
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__logo}>
                <img src={LogoImage} alt=""/>
            </div>

            <Nav/>

            <div className={classes.header__links}>
                <a href="#"><img src={GitHubLogo} alt=""/></a>
                <a href="#"><img src={DiscordLogo} alt=""/></a>
                <a href="#"><img src={RedditLogo} alt=""/></a>
                <a href="#"><img src={TwitterLogo} alt=""/></a>
            </div>
        </div>
    );
};

export default Header;