import Button from '../../components/Navbar'
import '../Cadastro/cadastro.css' 
import LogoCadastro from '../../assets/images/logo-sas.svg'
import CadastroImg from '../../assets/images/cadastro-img.svg'

export default function Cadastro() {
    
    return (
       
        <>
            <Button/>

            <div className="containerCadastro">
            
                
                <div className='cadastroContent'>

                    
                    <form className='formContent'>
                        

                        <div className='logoCadastro'>
                            <img src={LogoCadastro}></img>
                        </div>

                        <h2>Paciente - Cadastre-se</h2>

                        <div className='formsContents'>

                            <div className='contentForm'>
                                <label htmlFor='nomeCadastro'>Nome</label>
                                <input  type='text' className='inputContent' placeholder='Ex.: Jão Batista da Silva'></input>
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
                    </form>
                    
                    <img src={CadastroImg} className='imgCadastro' width={1338.41} height={710}></img>

                </div>
            </div>
        </>
    )
}