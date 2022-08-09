import Perfil from '../imagens/Perfil.jpeg'
import styles from './SobreMim.module.css'


function SobreMim(){
    return (
        <>
            <h1 className={styles.h1_sobre}>Sobre mim</h1>
            <div className={styles.sobreMim}>
                <img className={styles.fotodeperfil2} alt='fotodeperfil2'/>

                <div className={styles.resumo}>
                    <p className={styles.p_sobre}>Eu me chamo Victor Hugo, estudo programação e faço faculdade de análise e desenvolvimento de sistemas na Estácio de Sá, possuo alguns projetos pessoais em que posso mostrar um pouco do meu conhecimento. </p>
                   
                </div>
            </div>
        </>
    )
}

export default SobreMim;