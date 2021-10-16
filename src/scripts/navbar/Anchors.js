import { sections } from "src/info";
import { scroll, easeOutBounce } from "react-scrolling-effects";

const Anchors = ({ menu }) => (
    <div className={`navbar-menu${menu ? " is-active" : ""}`}>
        <div className="navbar-end">
            {sections.map(({ label, value, icon }) => (
                <a
                    className="navbar-item"
                    href={`#${value}`}
                    onClick={event => {
                        event.preventDefault();
                        scroll(`#${value}`, {
                            duration: 1000,
                            effect: easeOutBounce
                        });
                    }}
                >
                    <span className="icon">
                        <i className={icon}></i>
                    </span>
                    <span>{label}</span>
                </a>
            ))}
        </div>
    </div>
);

export default Anchors;