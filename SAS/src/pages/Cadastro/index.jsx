import Button from '../../components/Navbar'
import '../Cadastro/cadastro.css' 
import LogoCadastro from '../../assets/images/logo-sas.svg'
import CadastroImg from '../../assets/images/cadastro-img.svg'

import { useState } from 'react'

export default function Cadastro() {

    const [nome, setNome] = useState('')
    

    function pegarNome(e) {
        e.preventDefault()
        console.log(nome)
        alert('Nome cadastrado com sucesso!')
    }
    
    return (
       
        <>
            <Button/>
            <div className="containerCadastro">
                            
                <div className='cadastroContent'>

                    <form className='formContent' onSubmit={pegarNome}>
                        
                        <div className='logoCadastro'>
                            <img src={LogoCadastro} alt='logo-symbol'></img>
                        </div>

                        <h2>Paciente - Cadastre-se</h2>

                        <div className='formsContents'>

                            <div className='form-container'>
                                <div className='contentForm'>
                                    <label htmlFor='nome'>Nome</label>
                                    <input  
                                        className='inputContent'
                                        type='text' 
                                        id='nome' 
                                        name='nome'
                                        placeholder='Ex.: Jão Batista da Silva'
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>

                                <div  className='contentForm'>
                                    <label htmlFor='cpf'>CPF</label>
                                    <input type='text' className='inputContent' placeholder='000.000.000-00'></input>
                                </div>

                                <div  className='contentForm'>
                                    <label htmlFor='emailCadastro'>E-mail</label>
                                    <input type='email' className='inputContent' placeholder='exemplo@gmail.com'></input>
                                </div>

                                <div  className='contentForm'>
                                    <label htmlFor='senhaCadastro'>Senha</label>
                                    <input type='password' className='inputContent' placeholder='Digite sua senha'></input>
                                </div>

                                <div  className='contentForm'>
                                    <label htmlFor='confirmarSenha'>Confirme sua senha</label>
                                    <input type='password' className='inputContent' placeholder='Confirme sua senha'></input>
                                </div>
                            </div>
                            
                        <div className='checkbox-content'>
                            <input type="checkbox" />
                            <p>Estou de acordo com a <a href="">Politica de Privacidade</a> <link  rel="stylesheet" onClick={() => navigation('/login')} /></p>
                        </div>
                    
                            <div className='btn-cadastro'>
                                <button id='button-cadastro' type='submit'>Cadastrar</button>
                            </div>
                            
                            <p id='possui-conta'>Já possui conta? <a  href="/login">Entrar</a></p>
                        </div>
                    </form>

                    <img src={CadastroImg} className='imgCadastro' width={1338.41} height={710}></img>

                </div>
            </div>
        </>
    )
}