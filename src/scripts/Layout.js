import React, { useState } from "react";

import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";

import TrackVisibility from "react-on-screen";

import { NavContext } from "./contexts";

const NAVBAR_HEIGHT = 52; // px

function Layout() {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <NavContext.Provider value={[setActiveItem]}>
            <Navbar activeItem={activeItem} />
            <TrackVisibility offset={-NAVBAR_HEIGHT} partialVisibility>
                <Header />
            </TrackVisibility>
            <TrackVisibility offset={-NAVBAR_HEIGHT} partialVisibility>
                <About />
            </TrackVisibility>
            <TrackVisibility offset={-NAVBAR_HEIGHT} partialVisibility>
                <Skills />
            </TrackVisibility>
            <TrackVisibility offset={-NAVBAR_HEIGHT} partialVisibility>
                <Resume />
            </TrackVisibility>
            <TrackVisibility offset={-NAVBAR_HEIGHT} partialVisibility>
                <Projects />
            </TrackVisibility>
        </NavContext.Provider>
    );
}

export default Layout;