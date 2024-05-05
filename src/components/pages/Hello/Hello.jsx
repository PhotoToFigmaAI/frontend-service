import React from 'react';
import Header from "../../shared/Header/Header";
import BackgroundImage from "../../../assets/img/MainBackground.svg";
import classes from "./Hello.module.css";

const Hello = () => {
    return (
        <div style={{position: "relative", overflow: "hidden", height: "100%"}}>
            <Header/>
            <div style={{
                color: "white",
                fontSize: "80px",
                fontFamily: "'ClashGrotesk-Medium', sans-serif",
                background: "linear-gradient(83deg, #FF1CF7 30%, #00F0FF 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: "0 auto",
                marginTop: "147px"
            }}>AI Designer
            </div>
            <div style={{
                fontSize: "80px",
                color: "white",
                fontFamily: "'ClashGrotesk-Light', sans-serif",
                marginBottom: "18px"
            }}>Фотографию в макет
            </div>
            <div style={{
                lineHeight: "33px",
                letterSpacing: "1px",
                width: "723px",
                margin: "0 auto",
                fontSize: "20px",
                color: "white",
                fontFamily: "'ClashGrotesk-Light', sans-serif"
            }}>Превратите свои фотографии веб-сайтов в профессиональные макеты с помощью нашего инновационного сервиса. Отлаженный инструмент для разработчиков, где каждая деталь вашего сайта воплощается в стильном и функциональном макете.
            </div>
            <img src={BackgroundImage} style={{
                position: "absolute",
                bottom: "-150px",
                left: "0",
                right: "0",
                width: "100%",
                minWidth: "1920px",
                zIndex: -1
            }} alt=""/>

            <div className={classes.buttons}>
                <a href="#" className={classes.buttons__item}>
                    <div className={classes.item__outer}>
                        <div className={classes.item__inner}>Начать</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Hello;