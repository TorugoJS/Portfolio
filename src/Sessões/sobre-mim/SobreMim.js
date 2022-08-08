// import fotodeperfil2 from '../../imagens/fotodeperfil2.png'
import styles from './SobreMim.module.css'
// import cv from '../../arquivos/Meu CV primeira tentativa.pdf'

function SobreMim(){
    return (
        <>
            <h1 className={styles.h1_sobre}>Sobre mim</h1>
            <div className={styles.sobreMim}>
                {/* <img className={styles.fotodeperfil2} alt='fotodeperfil2'/> */}

                <div className={styles.resumo}>
                    <p className={styles.p_sobre}>Eu me chamo Victor Hugo, estudo programação e faço faculdade de análise e desenvolvimento de sistemas na Estácio de Sá, possuo alguns projetos pessoais em que posso mostrar um pouco do meu conhecimento. </p>
                    {/* <a download="Fillip-CV" href={} ><button className={styles.button_sobre}>Baixe meu CV<i class="uil uil-import"></i></button></a> */}
                </div>
            </div>
        </>
    )
}

export default SobreMim;