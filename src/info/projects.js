import CoronavirusMapImg from "src/media/coronavirus-map/demo.gif";
import WebTranslatorsImg from "src/media/web-translators/demo_landing.jpg";

const projects = {
    title: "💻 Projetos",
    subtitle: "Meus últimos trabalhos",
    list: {
        row1: [
            {
                image: CoronavirusMapImg,
                title: "Sistema de Monitoramento da COVID",
                description: "Um aplicativo de mapeamento que usa uma API contendo estatísticas recentes do Coronavirus e mapeia os locais e o impacto que cada país está enfrentando.",
                preview: "https://coronavirus-map-dashboard.herokuapp.com/",
                source: "https://github.com/felipe1234-dev/coronavirus-map",
                techs: [ "React", "CSS", "HTML", "JavaScript" ]
            },
            {
                image: WebTranslatorsImg,
                title: "Site Tradutores da Web",
                description: "Uma plataforma colaborativa onde traduzimos páginas da internet do idioma que estamos aprendendo para o idioma que já falamos.",
                preview: "https://web-translators.herokuapp.com/",
                source: "https://github.com/felipe1234-dev/tradutores-web",
                techs: [ "React", "SASS", "HTML", "JavaScript", "NodeJS", "SQLite" ]
            }
        ]
    }
}

export default projects;