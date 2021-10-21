import { skills } from "src/info";

function Skills() {
    return (
        <section 
            id="skills" 
            className="section"
        >
            <div className="section-heading">
                <h3 className="title is-2">
                    {skills.title}
                    <span className="dot">
                        .
                    </span>
                </h3>
                <h4 className="subtitle is-5">
                    {skills.subtitle}
                </h4>
            </div>
            <div className="container">
                {Object.keys(skills.list).map(field => (
                    <>
                        <div className="columns">
                            <div className="column">
                                <h3 className="subtitle is-5">
                                    {field}
                                </h3>
                            </div>
                        </div>
                        {Object.keys(skills.list[field]).map(row => (
                            <div className="columns">
                                {skills.list[field][row].map(skill => (
                                    <div className="column">
                                        {skill.name} - {skill.percent}%
                                        <progress 
                                            className="progress is-small" tech={skill.name}
                                            value={skill.percent} max="100"
                                        ></progress>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </>
                ))}
            </div>
        </section>
    );
}

export default Skills;