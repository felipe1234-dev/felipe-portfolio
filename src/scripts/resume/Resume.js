import React, { useEffect, useContext } from "react";
import { NavContext } from "../contexts";
import { resume } from "src/info";

function Resume({ isVisible }) {
    const [setActiveItem] = useContext(NavContext);

    useEffect(() => isVisible ? setActiveItem("resume") : null, [isVisible]);

    return (
        <section className="section" id="resume">
            <div className="section-heading">
                <h3 className="title is-2">
                    {resume.title}
                    <span className="dot">
                        .
                    </span>
                </h3>
                <h4 className="subtitle is-5">
                    {resume.subtitle}
                </h4>
                <a 
                    href={resume.file} download={resume.file}
                    className="button is-link is-medium"
                >
                    <span className="icon">
                        <i className="fas fa-file-alt"></i>
                    </span>
                    <span>Baixar Meu Currículo</span>
                </a>
            </div>
        </section>
    );
}

export default Resume;