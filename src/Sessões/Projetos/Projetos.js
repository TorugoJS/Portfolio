import list from '../imagens/list.jpg'
import manager from '../imagens/manager.jpg'
import LP from '../imagens/LP.jpg'

import { DiCss3, DiReact, DiHtml5 } from 'react-icons/di'

import './Projetos.css'

const Projetos = () => {

  return (

    <div className='container'>
      <div>

        <div>

        </div>
        <img alt="fotodeperfil" className='img1' src={LP} />
        <h2>Landing Page</h2>
        <p className='pp'> Landing page feita com react.js para aprimorar meus conhecimentos, totalmente responsiva.</p>

        <div className="techs-all">
          <span className="tech">HTML <DiHtml5 color='orange' /></span>
          <span className="tech">CSS <DiCss3 color='blue' /></span>
          <span className="tech">React <DiReact color='cyan' /></span>
        </div>

        <li className="btn-link">Github</li>
        <li className="btn-link">Link</li>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={list} />
        <h2>Lista de tarefas</h2>
        <p className='pp'>Lista de tarefas feita com Html, css e React.js</p>

        <div className="techs-all">
        <span className="tech">HTML <DiHtml5 color='orange' /></span>
          <span className="tech">CSS <DiCss3 color='blue' /></span>
          <span className="tech">React <DiReact color='cyan' /></span>
        </div>

        <li className="btn-link">Github</li>
        <li className="btn-link">Link</li>
      </div>

      <div>
        <img alt="Projeto" className='img1' src={manager} />
        <h2>Gerenciador de projetos</h2>

        <p className='pp'>Gerenciador construído com React.js. gerenciamento de valor, função etc.</p>

        <div className="techs-all">
        <span className="tech">HTML <DiHtml5 color='orange' /></span>
          <span className="tech">CSS <DiCss3 color='blue' /></span>
          <span className="tech">React <DiReact color='cyan' /></span>
        </div>

        <li className="btn-link">Github</li>
        <li className="btn-link">Link</li>
      </div>

    </div>
  )
}
export default Projetos;