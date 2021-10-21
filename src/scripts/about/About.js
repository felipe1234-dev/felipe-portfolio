import React, { useEffect, useContext } from "react";
import { author, about } from "src/info";
import { NavContext } from "../contexts";

function About({ isVisible }) {
    const [setActiveItem] = useContext(NavContext);

    useEffect(() => isVisible ? setActiveItem("about") : null, [isVisible]);

    return (
        <section 
            id="about" 
            className="section"
        >
            <div className="section-heading">
                <h3 className="title is-2">
                    {about.title}
                    <b className="dot">
                        .
                    </b>
                </h3>
                <h4 className="subtitle is-5">
                    {about.subtitle}
                </h4>
                <div 
                    className="container content" 
                    dangerouslySetInnerHTML={{ __html: author.about }} 
                />
                <figure className="image is-128x128">
                    <img 
                        className="is-rounded" 
                        src={author.photo}
                        alt={author.name}
                    />
                </figure>
            </div>
        </section>
    );
}

export default About;