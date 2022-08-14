import { AiFillHtml5, } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiSass, DiGit, DiReact } from 'react-icons/di'

import './tecnologias.css'

function Tecnologias() {
    return (
        <>
            <h1 className='h1-tecnologias'>Tecnologias</h1>
            <div className='habilidades_container'>


                <div>
                    <span className='html'>HTML
                        <AiFillHtml5 />
                    </span>
                </div>

                <div>
                    <span>CSS
                        <DiCss3 />
                    </span>
                </div>

                <div>
                    <span>JavaScript
                        <DiJavascript1 />
                    </span>
                </div>


                <div>
                    <span>React JS
                        <DiReact />
                    </span>
                </div>

                <div>
                    <span>Sass
                        <DiSass />
                    </span>
                </div>

                <div>
                    <span>Git
                        <DiGit />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Tecnologias