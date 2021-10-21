import photo from "src/media/photo.jpg";

const author = {
    name: "Felipe Alves",
    about: `
        <p>
            Olá! 
            <br/>
            Tenho 19 anos e estudo programação desde os 17, adoro tanto design quanto backend 
            <br/>
            Estou cursando Análise e Desenvolvimento de Sistemas na Uninter, sou bilíngue (Português e Inglês), 
            mas tenho bom domínio na língua escrita de Francês e Espanhol. 
            <br/>
            Almejando ser pós-graduado em Segurança da Informação e Redes, tenho qualificações principalmente na área
            de Programação Web, com cursos e estudo autodidata e na freeCodeCamp em React, NodeJs, MySQL, HTML, CSS e Javascript. 
            <br/>
            Tenho um bom conhecimentos em algumas outras linguagens como: PHP (OOP) e Java.
            <br/>
            Antes de embarcar na programação, meus principais afazeres eram estudar idiomas e astronomia :)
            <br/>
            Tais assuntos que ainda permanecem em meu coração.
            <br/>
            Procurando uma oportunidade para trabalhar e de me melhorar.
        </p>
    `,
    photo: photo,
    links: [
        {
            label: "linkedIn",
            icon: "fab fa-linkedin",
            href: "https://www.linkedin.com/in/felipe-j-alves/"
        },
        {
            label: "github",
            icon: "fab fa-github-alt",
            href: "https://github.com/felipe1234-dev/"
        }
    ]
}

export default author;