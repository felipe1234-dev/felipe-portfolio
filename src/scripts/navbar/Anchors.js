import { sections } from "src/json/sections";

const Anchors = ({ menu }) => (
    <div className={`navbar-menu${menu && " is-active"}`}>
        <div className="navbar-end">
            {sections.map(anchor => (
                <a
                    className="navbar-item" 
                    href={`#${anchor.value}`}
                >
                    <span className="icon">
                        <i className={anchor.icon}></i>
                    </span>
                    <span>{anchor.label}</span>
                </a>
            ))}
        </div>
    </div>
);

export default Anchors;