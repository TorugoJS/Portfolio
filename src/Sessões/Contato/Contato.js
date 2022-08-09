import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import './contato.css'

function Contato(){
    return (
        <div className="contato-container">
            <p className='p-contato'>Contato</p>

                <div className="formas-contato">
                    <div className="telefone">
                        <FiPhoneCall />
                        <div className="dados-telefone"> 
                            <p className='titulo'>Me ligue</p>
                            <p>(21) 99819-2208</p>
                        </div>
                    </div>

                    <div className="email">
                        <MdOutlineMarkEmailRead />
                        <div className="dados-email">
                            <p className='titulo'>Email</p>
                            <p>victor.devfrontend@gmail.com</p>
                        </div>
                    </div>
               

                
                    
                    
                </div>
            
        </div>
    )
}   

export default Contato;