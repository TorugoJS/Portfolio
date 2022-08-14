import LP from '../imagens/LP.jpg'
import breve from '../imagens/breve.png'
import './Projetos.css'

const Projetos = () => {
  return (

    <div className='container'>

      <div>
        <img alt="fotodeperfil" className='img1' src={LP} />
        <p className='pp'> Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1</p>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={breve} />
        <p className='pp'>Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1</p>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={breve} />
        <p className='pp'>Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1 Projeto 1</p>
      </div>

    </div>
  )
}
export default Projetos;