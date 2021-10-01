const Brand = ({ menu, toggle }) => (
    <div className="navbar-brand">
        <div
            className={`navbar-burger burger${menu && " is-active"}`}
            onClick={toggle}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default Brand;