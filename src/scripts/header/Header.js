import React, { useState, useEffect, useContext } from "react";

import Bubbles from "./Bubbles";
import { author } from "src/info";

import "src/styles/Header.scss";

import { Typewriter } from "src/scripts/global";

import { NavContext } from "../contexts";

const TYPING_SPEED = 225;
const TYPING_DELAY = 500;

const TEXT_STRING = "Olá! Eu sou";
const TITLE_STRING = author.name;
const SUBTITLE_STRING = "Desenvolvedor Web Full Stack 👋";

const PINK = "#e31b6d";
const GRAY = "#4f4e4d";

function Header({ isVisible }) {
    const [renderText, setRenderText] = useState(true);
    const [renderTitle, setRenderTitle] = useState(false);
    const [renderSubtitle, setRenderSubtitle] = useState(false);

    const [setActiveItem] = useContext(NavContext);
    
    const $ = query => document.querySelector(query);

    const restart = () => {
        setRenderText(true);
        setRenderTitle(false);
        setRenderSubtitle(false);
    }

    useEffect(() => isVisible ? setActiveItem("home") : restart(), [isVisible]);

    const props = {
        text: {
            text: TEXT_STRING, 
            speed: TYPING_SPEED,
            cursorRenderer: cursor => (
                <span id="text-cursor">
                    {cursor}
                </span>
            ),
            onEndCallback: () => {
                setRenderTitle(true);
                $("#text-cursor").style.display = "none";
            }
        },
        title: {
            text: TITLE_STRING, 
            speed: TYPING_SPEED,
            typingDelay: TYPING_DELAY,
            cursorRenderer: cursor => (
                <h1
                    id="title-cursor"
                    className="title is-1" 
                    style={{ color: PINK }}
                >
                    {cursor}
                </h1>
            ),
            displayTextRenderer: text => (
                <h1
                    className="title is-1"
                    style={{ color: PINK }}
                >
                    {text}
                </h1>
            ),
            onEndCallback: () => {
                setRenderSubtitle(true);
                $("#title-cursor").style.display = "none";
            }
        },
        subtitle: {
            text: SUBTITLE_STRING,
            speed: TYPING_SPEED,
            typingDelay: TYPING_DELAY,
            cursorRenderer: cursor => (
                <h2 
                    id="subtitle-cursor" 
                    className="subtitle is-3"
                >
                    {cursor}
                </h2>
            ),
            displayTextRenderer: text => (
                <h2 className="subtitle is-3">
                    {text.split(" ").map(word => word === "👋" ? (
                        <span className="waving-hand">
                           👋
                        </span> 
                    ) : `${word} `)}
                </h2>
            )
        }
    }

    return (
        <header
            id="home"
            className={
                [
                    "hero", 
                    "is-link", 
                    "is-fullheight", 
                    "is-fullheight-with-navbar"
                ]
                .join(" ")
            }
        >
            <Bubbles 
                amount={15}
                size={15}
                color={GRAY}
                connected={true}
            />

            {isVisible && (
                <div className="hero-body">
                    <div className="container">
                        {renderText && <Typewriter { ...props.text } />}
                        <br />
                        {renderTitle && <Typewriter { ...props.title } />}
                        <br />
                        {renderSubtitle && <Typewriter { ...props.subtitle } />}
                    </div>
                </div>
            )}

            <div className="hero-foot">
                <nav className="tabs">
                    <div className="container">
                        <ul>
                            {author.links.map(({ label, icon, href }) => (
                                <li website={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={icon}></i>&nbsp;&nbsp;
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;