import LP from '../imagens/LP.jpg'
import breve from '../imagens/breve.png'
import './Projetos.css'

const Projetos = () => {

  return (

    <div className='container'>
      {/* <h1>Projetos</h1> */}
      <div>
        <img alt="fotodeperfil" className='img1' src={LP} />
        <h2>Landing Page</h2>
        <p className='pp'> Landing page. Landing page. Landing page. Landing page Landing page Landing page Landing page Landing page</p>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={breve} />
        <h2>Em breve...</h2>
        <p className='pp'>Em breve...</p>
      </div>

      <div>
        <img alt="fotodeperfil" className='img1' src={breve} />
        <h2>Em breve...</h2>
        <p className='pp'>Em breve...</p>
      </div>

    </div>
  )
}
export default Projetos;