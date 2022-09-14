import tech from '../imagens/tech.jpg'
import styles from './Home.module.css'
import cv from '../curriculo/Curriculo.pdf';

import { BsLinkedin, BsGithub } from 'react-icons/bs'

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
                    <div className={styles.sociais}>
                    <a className={styles.redeSvg} href='https://www.linkedin.com/in/victor-hugodev/'><BsLinkedin />   LinkedIn</a>
                    <a className={styles.redeSvg} href='https://github.com/TorugoJS'><BsGithub />   Github</a>
                </div>
                <a className={styles.seila} download="Victor Hugo CV" href={cv} ><button className={styles.curriculo}>Baixe meu CV!</button></a>
                    </div>

                </div>

                <img alt="fotodeperfil" src={tech} />

            </div>

        </>
    )
}

export default Home