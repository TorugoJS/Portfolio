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
               
                    <div className="form-contato">
                <form action="https://formsubmit.co/victorhugo60046@gmail.com" method="POST">
                    <input type='text' 
                        placeholder="Nome"
                        className='input-nome' 
                        name='name'
                        required
                    />
                    <input type='email' 
                        placeholder="Email" 
                        className='input-email'
                        name='email' 
                        required
                    />
                    <textarea placeholder="Mensagem" className='textarea-mensagem'
                    required name='message'></textarea>
                    <button className='btn-contato' type='submit'>Enviar mensagem<i class="uil uil-message"></i></button>
                    </form>
                </div>
                
                    
                    
                </div>
            
        </div>
    )
}   

export default Contato;