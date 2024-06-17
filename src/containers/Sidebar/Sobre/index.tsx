import Titulo from "../../../components/Titulo"
import Paragrafo from "../../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Nam labore quibusdam ex quo iusto repellat alias assumenda iste,
      aliquam tenetur necessitatibus quia blanditiis
      ea dolorum numquam velit doloribus itaque rem!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JuanGuimaraes&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JuanGuimaraes&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
