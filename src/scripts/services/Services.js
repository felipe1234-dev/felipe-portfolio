import services from "src/json/services";

function Services() {
    return (
        <section 
            id="services" 
            className="section"
        >
            <div className="section-heading">
                <h3 className="title is-2">
                    Serviços
                </h3>
                <h4 className="subtitle is-5">
                    O que eu posso fazer por você?
                </h4>
            </div>
            <div className="container">
                {Object.keys(services).map(row => (
                    <div className="columns">
                        {services[row].map(serv => (
                            <div className="column">
                                <div className="box">
                                    <div className="content">
                                        <h4 className="title is-5">
                                            {serv.name}
                                        </h4>
                                        {serv.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;