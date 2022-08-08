import './footer.css'
import { BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

function Footer(){

    const scrollPortfolio = () => {
        window.scrollTo({
            top: 1530,
            behavior: "smooth"
        })
    }

    function scrollSobre(){
        window.scrollTo({
            top: 530,
            behavior: "smooth"
            })
    }

    return (
        <footer>
            <div className='footer-container'>
                <div className='quem-sou'>
                    <p>Torugodevjs</p>
                    <p>Desenvolvedor Front-end</p>
                </div>

                <div className='partes-pagina'>
                    <ul>
                        <li onClick={scrollPortfolio}>Portfólios</li>
                        <li onClick={scrollSobre}>Sobre mim</li>
                    </ul>
                </div>

                <div className='rede-sociais'>
                    <a target='https://www.linkedin.com/in/victor-hugodev/' href='https://www.linkedin.com/in/victor-hugodev/'><BsLinkedin /></a>
                    <a target='https://www.instagram.com/torugo_devjs/' href="https://www.instagram.com/torugo_devjs/"><BsInstagram /></a>
                    <a target='https://github.com/TorugoJS' href='https://github.com/TorugoJS'><BsGithub /></a>
                </div>
            </div>
            <p className='copy'><span>&copy;</span>Feito Torugodevjs</p>
        </footer>   
    )
}



export default Footer