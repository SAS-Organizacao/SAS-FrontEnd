import '../Cadastro/cadastro.css' 
import Navbar from '../../components/Navbar'
import { useState } from 'react'

export default function Cadastro() {
    
        const [formData, setFormData] = useState({ 
            nome: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            cpf: '',
            politicaDePrivacidade: false,
        })
    

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
            setFormData({
            ...formData, 
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            if (!formData.politicaDePrivacidade) {
                alert('Você deve concordar com a Política de Privacidade')
                return
            }
            console.log(formData)
        }

    return (

        <div className="containerCadastro">
            <Navbar/>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='nome'>Nome</label>
                    <input 
                        type='text' 
                        id='nome'
                        name='nome'
                        placeholder='Digite seu nome'
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email'
                        name='email'
                        placeholder='Digite seu e-mail'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='senha'>Senha</label>
                    <input 
                        type='password' 
                        id='senha'
                        name='senha'
                        placeholder='Digite sua senha'
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='confirmarSenha'>Confirme sua senha</label>
                    <input 
                        type='password' 
                        id='confirmarSenha'
                        name='confirmarSenha'
                        placeholder='Confirme sua senha'
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='cpf'>CPF</label>
                    <input 
                        type='text' 
                        id='cpf'
                        name='cpf'
                        placeholder='000.000.000-00'
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='politicaDePrivacidade'>
                    <input 
                        type='checkbox' 
                        id='politicaDePrivacidade'
                        name='politicaDePrivacidade'
                        checked={formData.politicaDePrivacidade}
                        onChange={handleChange}
                        required
                    />
                        Estou de acordo com a Política de Privacidade
                    </label>   
                </div>
                <button type='submit'> Cadastrar </button>
                <p> Já possui uma conta? <a href='/entrar'>Entrar</a> </p>
            </form>
        </div>
    )
}

