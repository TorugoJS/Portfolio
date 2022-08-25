
import { DiCss3, DiJavascript1, DiSass, DiGit, DiReact, DiBootstrap, DiHtml5 } from 'react-icons/di'

import './tecnologias.css'


function Tecnologias() {
    return (
        <>
            <h1 className='h1-tecnologias'>Tecnologias</h1>

            <div className='habilidades_container'>
                <DiHtml5 color="#FF8C00" />
                <DiCss3 color="#0000CD" />
                <DiJavascript1 color="#FFFF00" />
                <DiReact color="#6495D" />
                <DiBootstrap color="#A020F0" />
                <DiSass color="#FF69B4" />
                <DiGit color="#FF8C00" />


            </div>
            <h1 className='proj'>Projetos </h1>

        </>

    )
}

export default Tecnologias