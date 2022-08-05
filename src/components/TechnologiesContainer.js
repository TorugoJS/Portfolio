
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiSass, DiBootstrap, DiGit } from 'react-icons/di'

import styles from './TechnologiesContainer.module.css'

const technologies = [
  { id: "html", name: "HTML5", text: " Conhecimento e habilidades com tag semânticas, formulários, multimídia, incorporação e tabelas.", icon: <AiFillHtml5 /> },

  { id: "css", name: "CSS3", text: "Conhecimento e experiência em responsividade, estilização de textos e imagens, flexbox. ", icon: <DiCss3 /> },

  { id: "js", name: "Javacript", text: " Conhecimento e experiência com funções, arrays, objetos, json, classes, herança, ES6, tratamento de erros e fecth API", icon: <DiJavascript1 /> },

  { id: "react", name: "React", text: "Conhecimento e experiência em projetos pessoas com renderização de elementos, componentes, manipulação de eventos e react hooks ", icon: <DiReact /> },

  { id: "sass", name: "Sass", text: " Conhecimento com mixins (funções), variáveis e nested selectors ", icon: <DiSass /> },

  { id: "bootstrap", name: "Bootstrap", text: "Conhecimento com layout, componentes, estilização", icon: <DiBootstrap /> },

  { id: "git", name: "Git", text: "Versionamento de código", icon: <DiGit /> }]




const TechnologiesContainer = () => {
  return (
    <>
      <h2 className={styles.h2}>As tecnologias em que possuo experiência com projetos pessoais, são: </h2>
      <section className={styles.tech} >

        {technologies.map((tech, text) => (
          <div className={styles.div}
            id={tech.id}
            text={text}
            key={tech.id} >
            {tech.icon}
            <div>
              <h3 className={styles.h3}>{tech.name}</h3>
              {tech.html} {tech.text}

              <p>
              </p>
            </div>
          </div>
        )
        )





        /* <div className={styles.html}>
          <AiFillHtml5 />
          <p>HTML5:</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={styles.css}>
          <DiCss3 />
          <p>CSS3</p>
        </div>

        <div className={styles.react}>
          <DiReact />
          <p>React.js</p>
        </div>

        <div className={styles.sass}>
          <DiSass />
          <p>Sass</p>
        </div>

        <div className={styles.boot}>
          <DiBootstrap />
          <p>Bootstrap</p>
        </div>

        <div className={styles.git}>
          <DiGit />
          <p>Git</p>
        </div>

        <div className={styles.js}>
          <DiJavascript1 />
          <p>Javascript</p>
        </div> */}


      </section>
    </>
  );
};

export default TechnologiesContainer;
