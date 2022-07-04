import '../pages/style.css'

function Projectt(props) {
    return (
        <div className="project" data-aos="fade-right">
            <div className="project-image">
                <img src={props.image} alt="project-image" />
            </div>
            <div className="project-information">
                <h3>
                    {props.name}
                </h3>
                <span>
                    {props.description}
                </span>

                <a href={props.url}>Vá para o projeto</a>
            </div>
        </div>
    )
}

export default Projectt