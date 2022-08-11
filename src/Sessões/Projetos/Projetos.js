import fotoPefil from '../imagens/Perfil.jpeg'
import './Projetos.css'

const Projetos = () => {
  return (
    <div className='container'>
        <li><img className='img1' alt="fotodeperfil" src={fotoPefil} /></li>
        <li><img className='img1' alt="fotodeperfil" src={fotoPefil} /></li>
        <li><img className='img1' alt="fotodeperfil" src={fotoPefil} /></li>
    </div>
  )
}

export default Projetos;