
import { DiCss3, DiSass, DiGit, DiReact, DiBootstrap, DiHtml5 } from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'

import './tecnologias.css'

const technologies = [
    { id: "html", name: "HTML5", text: "HTML.", icon: <DiHtml5 /> },

    { id: "css", name: "CSS3", text: "CSS ", icon: <DiCss3 /> },

    { id: "js", name: "Javacript", text: "Javascript", icon: <SiJavascript /> },

    { id: "react", name: "React.js", text: "React ", icon: <DiReact /> },

    { id: "sass", name: "Sass", text: "Sass ", icon: <DiSass /> },

    { id: "bootstrap", name: "Bootstrap", text: "Bootstrap", icon: <DiBootstrap /> },

    { id: "git", name: "Git", text: "Git", icon: <DiGit /> }
];




function Tecnologias() {
    return (
        // <div>
        <div className='habilidades_container'>

            {/* <h1 className='h1-tecnologias'>Tecnologias</h1> */}

            <div className='techs'>
                {technologies.map((tech, text) => (
                    <div
                        className="technology-card"
                        id={tech.id}
                        text={text}
                        key={tech.id}

                    >
                        {tech.icon}
                        <div>
                            <h3>{tech.name} </h3>
                        </div>

                        
                    </div>
                
                    
                ))}
                <div>
                    <h2>Conhecimentos:</h2>
                    <p>Metodologia Ágil (SCRUM)</p>
                    <p>Lógica de programação</p>
                    <p>Design responsivo</p>
                </div>
                <h1>Web Developer! 🖥️​</h1>
            </div>


            {/* <h1 className='h1-tecnologias'>Tecnologias</h1>

            <div className='habilidades_container'> */}

            {/* <div>
                <DiHtml5 color="#FF8C00" text="html" />
                </div>

                <div>
                    
                    <DiCss3 color="#0000CD" />
                </div>

                <div>
                    <DiJavascript1 color="#FFFF00" />
                </div>

                <div>
                    <DiReact color="#6495D" />
                </div>

                <div>
                    <DiBootstrap color="#A020F0" />
                </div>

                <div>
                    <DiSass color="#FF69B4" />
                </div>
                <div>
                    <DiGit color="#FF8C00" />
                </div>


            </div> */}
            {/* <h1 className='proj'>Projetos </h1> */}

        </div>

    )

}
export default Tecnologias;