import Button from '../../components/Navbar'
import '../Sobre/sobre.css'


export default function Sobre() {

    return (
        <>
            <Button/>
                
                <div className='sobre-containers'>
                    <div className='container-claro'></div>
                    <div className='container-escuro'><h1>Sobre nós</h1></div>
                </div>
                <div className='sobre-nos'>
                    <p>   
                        Somos um sistema de agendamento e 
                        <br/>armazenamento de histórico integrado a 
                        <br/>postos de saúde da cidade do Recife.
                        <br/>
                        O paciente conseguirá agendar consultas e 
                        <br/>exames pelo SAS, o médico terá acesso ao 
                        <br/>histórico de consultas do paciente, histórico de 
                        <br/>prescrições médicas e ao prontuário médico 
                        <br/>do mesmo.
                        <br/>
                        Essas informações estão disponíveis em 
                        <br/>qualquer UBS da cidade do Recife, trazendo 
                        <br/>mais praticidade e facilidade para todos os 
                        <br/>usuários.
                    </p>
                </div>

               
        </>
    )
}
