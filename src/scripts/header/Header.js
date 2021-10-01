import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Typewriter = ReactTypingEffect;

function Header() {
    const props = {
        title: {
            text: "Olá! Eu sou Felipe Alves Desenvolvedor Web Full Stack", 
            speed: 250,
            eraseDelay: 1500,
            typingDelay: 500,
            cursorRenderer: cursor => <span>{cursor}</span>,
            displayTextRenderer: () => (
                <div className="container">
                    Olá! Eu sou
                    <h1 className="title is-1">
                        Felipe Alves
                    </h1>
                    <h2 className="subtitle is-3">
                        Desenvolvedor Web Full Stack
                    </h2>
                </div>
            )
        }
    }

    return (
        <header
            className="hero is-link is-fullheight is-fullheight-with-navbar"
        >
            <div className="hero-body">
                <Typewriter { ...props.title } />
            </div>
        </header>
    );
}

export default Header;