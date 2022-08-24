import fotoPefil from '../imagens/Perfil.jpeg'
import styles from './Home.module.css'

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

                </div>

                <img alt="fotodeperfil" src={fotoPefil} />

            </div>

        </>
    )
}

export default Home