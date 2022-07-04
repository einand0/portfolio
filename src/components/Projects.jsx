import projeto1 from '../assets/projeto1.png'
import projeto2 from '../assets/projeto2.png'
import projeto3 from '../assets/projeto3.png'
import projeto4 from '../assets/projeto4.png'
import Projectt from './Projectt'
import '../pages/style.css'

function Projectss() {
  return (
    <div className="projects-wrapper" id="projects-anchor">

      <h2 data-aos="zoom-i">PROJETOS</h2>

      <section className="projects">

        <Projectt
          name="APP MOVIES"
          description="Projeto de listagem de filmes mais populares e mais bem avaliados do momento. Desenvolvido com a intenção
                de colocar em prática os meus conhecimentos em consumo de APIs, ReactJS, React Router para gerenciamento de rotas, além de componetização com styled-components."
          image={projeto1}
          url="https://app-movies-inky.vercel.app/"

        />

        <Projectt
          name="WEATHER APP"
          description="Projeto criado para o usuário verificar o clima de sua cidade, baseado na localização enviada pelo navegador e utilizando-se
        do axios para o consumo da API."
          image={projeto2}
          url="https://github.com/einand0/weather-app"

        />

        <Projectt
          name="ALURACORD MINIONS"
          description="Projeto criado durante a Imersão React da Alura onde aprendi sobre componetização, gerenciar estados com React Router
          e foi utilizado o Supabase para servir como banco de dados para armazenar as mensagens do chat."
          image={projeto4}
          url="https://aluracord-minions-o82aaww60-einand0.vercel.app/"

        />

        <Projectt
          name="TO DO LIST"
          description="Projeto de lista de afazeres. Criado para aprender sobre localStorage, estados e Hooks em React. É possível marcar a tarefa
          como feita e deletá-la, podendo atualizar o navegador ou até mesmo fechá-lo que as tarefas continuarão armazenadas."
          image={projeto3}
          url="https://to-do-list-einand0.vercel.app/"

        />

      </section>

    </div>

  )
}


export default Projectss