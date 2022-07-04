import { LinkedinLogo, GithubLogo, WhatsappLogo, At } from 'phosphor-react'

function Contact(){
    return(
        <div className="contact" id="contact-anchor">

        <h3>Contato</h3>

        <ul>
          <li>
            <a href="https://www.linkedin.com/in/fernandolopess/">
              <LinkedinLogo size={29} color="#fff"/>
              <span>Linkedin</span>

            </a>
          </li>
         
          <li>
            <a href="https://github.com/einand0">
              <GithubLogo size={29} color="#fff"/>
              <span>Github</span>

            </a>
          </li>

          <li>
            <a href="#">
              <WhatsappLogo size={29} color="#fff"/>
              <span>21 97551-1097</span>

            </a>
          </li>

          <li>
            <a href="#">
              <At size={29} color="#fff"/>
              <span>fernando._lopes@outlook.com</span>

            </a>
          </li>
        </ul>

      </div>
    )
}

export default Contact