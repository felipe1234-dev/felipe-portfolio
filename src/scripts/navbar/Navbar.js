import React, { useState } from "react";

import Brand from "./Brand";
import Anchors from "./Anchors";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);

    return (
        <nav className="navbar is-link is-fixed-top">
            <Brand menu={menu} toggle={toggleMenu} />
            <Anchors menu={menu} />
        </nav>
    );
}

export default Navbar;