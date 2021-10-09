import { sections } from "src/json";
import { scroll, easeOutBounce } from "react-scrolling-effects";

const Anchors = ({ menu }) => (
    <div className={`navbar-menu${menu ? " is-active" : ""}`}>
        <div className="navbar-end">
            {sections.map(anchor => (
                <a
                    className="navbar-item" 
                    onClick={() => scroll(`#${anchor.value}`, {
                        duration: 1000,
                        effect: easeOutBounce
                    })}
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