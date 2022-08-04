import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div>
            <aside className={styles.sidebar}>

                <p>Desenvolvedor Front-end</p>


                <a href="Curriculo.pdf" target="_blank" className='btn'>
                    Download currículo
                </a>
            </aside>
        </div>
    )
}

export default Sidebar