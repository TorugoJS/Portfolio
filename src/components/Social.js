import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

import styles from './Social.module.css'

// const socialNetworks = [
//     { name: "linkedin", icon: <FaLinkedin /> },
//     { name: "github", icon: <FaGithub /> },
//     { name: "instagram", icon: <FaInstagram /> },
//     { name: "facebook", icon: <FaFacebook /> },
// ];

const Social = (network) => {
    return (<section className={styles.redes}>
    {/* {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
         </a>
    ))} */}
    <a href="https://www.linkedin.com/in/victor-hugodev/" target="_blank" className="btn" id="linkedin" key="linkedin" rel="noreferrer">
      <FaLinkedin />
        </a>
    <a href="https://github.com/TorugoJS" target="_blank" className="btn" id="github" key="github" rel="noreferrer">
    <FaGithub />
        </a>
    <a href="https://www.instagram.com/torugo_devjs/" target="_blank" className="btn" id="instagram" key="instagram" rel="noreferrer">
    <FaInstagram />
        </a>
        <a href="https://www.facebook.com/Victtor.HuugoOo/" target="_blank" className="btn" id="facebook" key="facebook" rel="noreferrer">
    <FaFacebook />
        </a>
  </section>
    )
}

export default Social;