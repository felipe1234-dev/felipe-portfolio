import React, { useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

const Typewriter = ReactTypingEffect;

const TITLE_1_DELAY = 2000;
const TITLE_2_DELAY = 5500;
const TITLE_3_DELAY = 9000;

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
            text: "Felipe Alves", 
            speed: 250,
            eraseDelay: 3600000,
            typingDelay: TITLE_2_DELAY,
            cursorRenderer: cursor => (
                <h1 className="title is-1" id="cursor-2">
                    {cursor}
                </h1>
            ),
            displayTextRenderer: text => (
                <h1 className="title is-1">
                    {text}
                </h1>
            )
        },
        title3: {
            text: "Desenvolvedor Web Full Stack",
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
                    {text}
                </h2>
            )
        }
    }

    return (
        <header
            className="hero is-link is-fullheight is-fullheight-with-navbar"
        >
            <div className="hero-body">
                <div className="container">
                    <Typewriter { ...props.title1 } />
                    <br />
                    <Typewriter { ...props.title2 } />
                    <br />
                    <Typewriter { ...props.title3 } />
                </div>
            </div>
        </header>
    );
}

export default Header;