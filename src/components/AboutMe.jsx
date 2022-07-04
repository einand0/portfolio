import me from '../assets/me.jpg'

function AboutMe() {
    return (
        <div className="about-me-section" id="about-me-anchor">
            <div className="about-me-wrapper" data-aos="zoom-in">
                <img src={me} alt="me" />
                <div className="about-me-text">
                    <h2>
                        SOBRE MIM
                    </h2>
                    <span>
                        Meu nome é Fernando Lopes, tenho 26 anos e estou cursando Sistemas de Informação.
                        Atualmente estou estudando para me tornar um desenvolvedor web e criei esse portóflio
                        para guardar e mostrar os meus projetos pessoais. Meu foco têm sido na área de front-end,
                        onde tenho me aprofundado em desenvolvimento com ReactJS, tendo também conhecimentos básicos
                        em NodeJS, Bootstrap / Tailwind / MaterialUI, Java e Typescript.                            
                    </span>
                </div>

            </div>
        </div>
    )
}

export default AboutMe