import React from "react";

import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import About from "./about/About";
import Services from "./services/Services";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";

function Layout() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Resume />
            <Projects />
        </>
    );
}

export default Layout;