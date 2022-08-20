import { AiFillHtml5, } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiSass, DiGit, DiReact, DiBootstrap } from 'react-icons/di'

import './tecnologias.css'

function Tecnologias() {
    return (
        <>
            <h1 className='h1-tecnologias'>Tecnologias</h1>
            <div className='habilidades_container'>
                    <AiFillHtml5 />
                    <DiCss3 />
                    <DiJavascript1 />
                    <DiReact />
                    <DiBootstrap />
                    <DiSass />
                    <DiGit />
            </div>
        </>
    )
}

export default Tecnologias