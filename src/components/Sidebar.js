import styles from './Sidebar.module.css'


const Sidebar = () => {
    return (
        <div>
            <div className={styles.sidebar}>
                    
                


                <a href="Curriculo.pdf" target="_blank" className='btn'>
                    Download currículo
                </a>
            </div>
        </div>
    )
}

export default Sidebar