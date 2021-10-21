import "src/styles/Card.scss";

function Card({ title, image, description: desc, techs, preview, source:github }) {
    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "(...)" : str;
    }

    return (
        <div className="card">

            <header className="card-header">
                <div className="browser-header">
                    
                    <span className="fake-button" data-close=""></span>
                    <span className="fake-button" data-minify=""></span>
                    <span className="fake-button" data-expand=""></span>
                    
                </div>
            </header>

            <div className="card-image">
                <figure className="image">
                    <img 
                        className="has-ratio" 
                        src={image} 
                        alt={title} 
                    />
                </figure>
                <div className="overlay">
                    <div className="content">
                        <h3 className="title is-6"> 
                            {title}
                        </h3>
                        <p>{truncate(desc, 200)}</p>
                        {techs.map(tech => (
                            <span className="tag" tech={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            <footer className="card-footer">
                <a 
                    href={preview} 
                    className="card-footer-item button is-normal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Preview
                </a>
                <a 
                    href={github} 
                    className="card-footer-item button is-normal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </footer>
        </div>
    );
}

export default Card;