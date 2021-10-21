import React, { useState } from "react";

import Brand from "./Brand";
import Anchors from "./Anchors";

import "src/styles/Navbar.scss";

function Navbar({ activeItem }) {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);

    return (
        <nav className="navbar is-link is-fixed-top">
            <Brand menu={menu} toggle={toggleMenu} />
            <Anchors menu={menu} activeItem={activeItem} />
        </nav>
    );
}

export default Navbar;