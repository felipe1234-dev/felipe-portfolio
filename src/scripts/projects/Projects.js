import projects from "src/json/projects";

function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">
                        Projetos
                    </h3>
                    <h4 className="subtitle is-5">]
                        Meus últimos trabalhos
                    </h4>
                </div>

                <br />

                <div className="container projects-container">
                    {Object.keys(projects).map(row => (
                        <div className="columns">
                            {projects[row].map(project => (
                                <div className="column">
                                    <Card {...project} />    
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;