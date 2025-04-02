import './perfil.css'
import Button from '../../components/Navbar'
import Menulateral from '../../components/Menu_lateral'

export default function Perfil() {
    
    return (
        <>
        <Button/>
        <Menulateral/>
        <div className='perfil'>
            <div className='dados-pessoais'>
               <div className='dados-p'>
               <h3>DADOS PESSOAIS</h3>
               <button className='btn-dados'>&#9998;</button>
               </div>

               <div>
                <div className='dados-info'>
                    <p><strong>Nome:</strong> Judite Cunha Bezerra</p>
                    <p><strong>CPF:</strong> 000.111.222-33</p>
                    <p><strong>RG:</strong> 1.234.567</p>
                    <p><strong>Gênero:</strong> Feminino</p>
                    <p><strong>Grau de instrução:</strong> Ensino fundamental</p>
                    <p><strong>Data de nascimento:</strong> 23/04/1950</p>
                    <p><strong>CEP:</strong> 53120-300</p>
                    <p><strong>Rua:</strong> R. da Regeneração</p>
                    <p><strong>Número:</strong> 36</p>
                    <p><strong>Bairro:</strong> Água fria</p>
                    <p><strong>Cidade:</strong> Recife</p>
                    <p><strong>Estado:</strong> PE</p>
                </div>
               </div>
            </div>

            <div className='dados-acesso'>
                <div className='dados-a'>
                    <h3>DADOS DE ACESSO</h3>
                    <button></button>
                </div>

                <div className='dados-contato'>
                    <h4>E-mail</h4>
                    <h4>Senha</h4>
                    <h4>Celular</h4>
                </div>
            </div>
        </div>
        </>
    )
}