
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiSass, DiBootstrap, DiGit } from 'react-icons/di'

import styles from './TechnologiesContainer.module.css'




const TechnologiesContainer = () => {
  return (
    <>
    <h2>As tecnologias em que possuo experiência com projetos pessoais, são: </h2>
    <section className={styles.tech} >

      <div className={styles.html}>
        <p>HTML5:</p>
        <AiFillHtml5 />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className={styles.css}>
        <p>CSS3</p>
        <DiCss3 />
      </div>

      <div className={styles.react}>
        <p>React.js</p>
        <DiReact />
      </div>

      <div className={styles.sass}>
        <p>Sass</p>
        <DiSass />
      </div>

      <div className={styles.boot}>
        <p>Bootstrap</p>
        <DiBootstrap />
      </div>

      <div className={styles.git}>
        <p>Git</p>
        <DiGit />
      </div>

      <div className={styles.js}>
        <p>Javascript</p>
        <DiJavascript1 />
      </div>


    </section>
    </>
  );
};

export default TechnologiesContainer;
