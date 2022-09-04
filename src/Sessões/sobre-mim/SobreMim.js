

import fotoPerfil from '../imagens/Perfil.jpeg'
import styles from './SobreMim.module.css'


function SobreMim() {
    return (
        <>
            <h1 className={styles.h1_sobre}>Sobre mim</h1>
            <div className={styles.sobreMim}>

                <img className={styles.fotoPerfil} alt="fotodeperfil" src={fotoPerfil} />

                <div className={styles.resumo}>

                    <p className={styles.p_sobre}>Eu me chamo Victor Hugo, estudo programação e faço faculdade de Análise e Desenvolvimento de Sistemas na Estácio de Sá, possuo alguns projetos pessoais em meu github em que posso mostrar um pouco do meu conhecimento. Estou a procura de uma oportunidade de estágio ou desenvolvedor júnior. </p>
                    
                </div>
            </div>
        </>
    )
}

export default SobreMim;