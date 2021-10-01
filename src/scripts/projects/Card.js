function Card({ title, image, technologies:techs, preview, source:srcCode }) {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    <span>{title}</span>
                    <span classNameName="is-pulled-right">
                        {techs.map(tech => <span className="tag" tech={tech} />)}
                    </span>
                </p>
            </header>

            <div className="card-content">
                <figure className="image">
                    <img src={image} alt={title} />
                </figure>
            </div>
            
            <footer className="card-footer">
                <a href={preview} className="card-footer-item">
                    Preview
                </a>
                <a href={srcCode} className="card-footer-item">
                    Source Code
                </a>
            </footer>
        </div>
    );
}
