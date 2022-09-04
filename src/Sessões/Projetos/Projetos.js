import list from '../imagens/list.jpg'
import manager from '../imagens/manager.jpg'
import LP from '../imagens/LP.jpg'

import './Projetos.css'

const Projetos = () => {

  return (

    <div className='container'>
      <div>

        <div>

        </div>
        <img alt="fotodeperfil" className='img1' src={LP} />
        <h2>Landing Page</h2>
        <p className='pp'> Landing page feita com react.js e totalmente responsiva.</p>

        <div className="techs-all">
          <span className="techs">HTML</span>
          <span className="techs">CSS</span>
          <span className="techs">React.js</span>
        </div>

        <button className="btn-link">Github</button>
        <button className="btn-link">Link</button>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={list} />
        <h2>Lista de tarefas</h2>
        <p className='pp'>Lista de tarefas feita com Html, css e React.js</p>

        <div className="techs-all">
          <span className="techs">HTML</span>
          <span className="techs">CSS</span>
          <span className="techs">React.js</span>
        </div>




        <button href="https://github.com/TorugoJS" className="btn-link">Github
        

        </button>
        <button className="btn-link">Link</button>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={manager} />
        <h2>Gerenciador de projetos</h2>

        <p className='pp'>Gerenciador construído com React.js. gerenciamento de valor, função etc.</p>

        <div className="techs-all">
          <span className="techs">HTML</span>
          <span className="techs">CSS</span>
          <span className="techs">React.js</span>
        </div>

        <button className="btn-link">Github</button>
        <button className="btn-link">Link</button>
      </div>

    </div>
  )
}
export default Projetos;