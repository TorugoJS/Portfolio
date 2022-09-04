import fotoPefil from '../imagens/Perfil.jpeg'
import styles from './Home.module.css'

import { BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

function Home() {

    return (
        <>
            <div className={styles.home_container}>

                <div className={styles.divcontainer}>
                    <h1 className={styles.h1title}>Olá, eu sou Victor Hugo!</h1>
                    <p className={styles.dev}>
                        Desenvolvedor Front-end
                    </p>
                    <p>Sou estudante de Análise e desenvolvimento de sistemas, e estudante de programação.</p>
                    <div>
                    <div className='rede-sociais'>
                    <a target='https://www.linkedin.com/in/victor-hugodev/' href='https://www.linkedin.com/in/victor-hugodev/'><BsLinkedin /></a>
                    <a target='https://www.instagram.com/torugo_devjs/' href="https://www.instagram.com/torugo_devjs/"><BsInstagram /></a>
                    <a target='https://github.com/TorugoJS' href='https://github.com/TorugoJS'><BsGithub /></a>
                </div>
                    </div>

                </div>

                <img alt="fotodeperfil" src={fotoPefil} />

            </div>

        </>
    )
}

export default Home