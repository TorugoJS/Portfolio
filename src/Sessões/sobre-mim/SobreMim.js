
// import { BsInstagram } from 'react-icons/bs'
import fotoPerfil from '../imagens/Perfil.jpeg'
import cv from '../curriculo/Curriculo.pdf';

import styles from './SobreMim.module.css'


function SobreMim() {
    return (
        <>

            <h1 className={styles.h1_sobre}>Sobre mim</h1> <br />
            <div className={styles.sobreMim}>


                <div>
                    {/* <div className='sociais'>
                <a target='https://www.instagram.com/torugo_devjs/' href="https://www.instagram.com/torugo_devjs/"><BsInstagram />Instagram</a>
            </div> */}
                    <p className={styles.p_sobre}> Olá, tudo bom? Eu me chamo Victor Hugo, estudo programação desde agosto de 2021,
                        atualmente estou no 3º período de Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá,
                        possuo alguns projetos pessoais em meu github em que posso mostrar um pouco do meu conhecimento.
                        Estou a procura de uma oportunidade de estágio ou desenvolvedor júnior para colocar em prática minhas habilidades. </p>
                </div>
                <div className={styles.info}>
                    <img className={styles.fotoPerfil} alt="fotodeperfil" src={fotoPerfil} />
                    <a className={styles.seila} download="Victor Hugo CV" href={cv} ><button className={styles.curriculo}>Baixe meu CV!</button></a>
                </div>
            </div>

        </>
    )
}

export default SobreMim;