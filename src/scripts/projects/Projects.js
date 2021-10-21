import React, { useEffect, useContext } from "react";

import Card from "./Card";

import { projects } from "src/info";

import { NavContext } from "../contexts";

function Projects({ isVisible }) {
    
    const [setActiveItem] = useContext(NavContext);

    useEffect(() => isVisible ? setActiveItem("projects") : null, [isVisible]);

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">
                        {projects.title}
                        <b className="dot">
                            .
                        </b>
                    </h3>
                    <h4 className="subtitle is-5">
                        {projects.subtitle}
                    </h4>
                </div>

                <br />

                <div className="container projects-container">
                    {Object.keys(projects.list).map(row => (
                        <div className="columns">
                            {projects.list[row].map(project => (
                                <div className="column">
                                    <Card {...project} />    
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;