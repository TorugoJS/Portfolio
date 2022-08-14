import fotoPefil from '../imagens/Perfil.jpeg'
import styles from './Home.module.css'

function Home() {

    return (
        <>
            <div className={styles.home_container}>

                <div className={styles.sobre_mim}>
                    <h1>Olá, eu sou Victor Hugo</h1>
                    <p className={styles.p_primeiro}>
                        Desenvolvedor Front-end
                    </p>
                    <p className={styles.p_segundo}>Sou estudante de Análise e desenvolvimento de sistemas, e estudante de programação.</p>

                </div>

                <img alt="fotodeperfil" src={fotoPefil} />

            </div>

        </>
    )
}

export default Home