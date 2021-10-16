import React, { useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

import Bubbles from "./Bubbles";
import { author } from "src/info";

import "src/styles/Header.scss";

const Typewriter = ReactTypingEffect;

const TITLE_1_DELAY = 2000;
const TITLE_2_DELAY = 5500;
const TITLE_3_DELAY = 9000;

const PINK = "#e31b6d";
const GRAY = "#4f4e4d";

function Header() {

    useEffect(() => {
        const $ = query => document.querySelector(query);

        $("#cursor-1").style.display = "block";
        $("#cursor-2").style.display = "none";
        $("#cursor-3").style.display = "none";

        setTimeout(() => {
            $("#cursor-1").style.display = "none";
            $("#cursor-2").style.display = "block";
        }, TITLE_2_DELAY);

        setTimeout(() => {
            $("#cursor-2").style.display = "none";
            $("#cursor-3").style.display = "block";
        }, TITLE_3_DELAY);

    }, []);

    const props = {
        title1: {
            text: "Olá! Eu sou", 
            speed: 250,
            eraseDelay: 3600000,
            typingDelay: TITLE_1_DELAY,
            cursorRenderer: cursor => (
                <span id="cursor-1">
                    {cursor}
                </span>
            )
        },
        title2: {
            text: author.name, 
            speed: 250,
            eraseDelay: 3600000,
            typingDelay: TITLE_2_DELAY,
            cursorRenderer: cursor => (
                <h1 
                    className="title is-1" 
                    id="cursor-2"
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
            )
        },
        title3: {
            text: "Desenvolvedor Web Full Stack 👋",
            speed: 250,
            eraseDelay: 3600000,
            typingDelay: TITLE_3_DELAY,
            cursorRenderer: cursor => (
                <h2 className="subtitle is-3" id="cursor-3">
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

            <div className="hero-body">
                <div className="container">
                    <Typewriter { ...props.title1 } />
                    <br />
                    <Typewriter { ...props.title2 } />
                    <br />
                    <Typewriter { ...props.title3 } />
                </div>
            </div>

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