import { AiFillHtml5, } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiSass, DiGit, DiReact } from 'react-icons/di'

import './tecnologias.css'

function Tecnologias() {
    return (
        <>
            <h1 className='h1-tecnologias'>Tecnologias</h1>
        <div class="habilidades_container">


            <div>
                <div>
                    <span class="html">HTML
                    
                    <AiFillHtml5 />
                    </span>
                </div>



            </div>

            <div>
                <div>
                    <span>CSS</span>
                    <DiCss3 />
                </div>

            </div>

            <div>
                <div>
                    <span>JavaScript</span>
                    <DiJavascript1 />
                </div>

            </div>


            <div>
                <div>
                    <span>React JS</span>
                    <DiReact />
                </div>

            </div>

            <div>
                <div>
                    <span>Sass</span>
                    <DiSass />
                </div>

            </div>

            <div>
                <div>
                    <span>Git</span>
                    <DiGit />
                </div>

            </div>
        </div>
        </>
    )
}

export default Tecnologias