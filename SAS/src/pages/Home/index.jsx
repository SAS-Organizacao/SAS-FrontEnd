import Button from "../../components/Navbar";
import '../Home/home.css'
import Doctor from "../../assets/images/doctor-homepage.svg"
import Bookicon from "../../assets/images/icon-book.svg"
import Homeicon from "../../assets/images/icon-home.svg"
import Bookicon_02 from "../../assets/images/icon-book_02.svg"

export default function Home() {
    return (

        <div className="homepage">
            <Button/>
            
            <div className="imagem-homepage"></div>

            <div className="grid-container">
                <div className="grid-item"> 
                    <img src={Bookicon} alt=""  width={57.75} height={66}/>
                    <p>Agende sua<br />consulta</p>
                </div>
                
                <div className="grid-item">
                    <img src={Homeicon} alt="" width={57.75} height={66}/>
                    <p>Encontre unidades<br />de saúde próximas</p>
                </div>

                <div className="grid-item">
                    <img src={Bookicon_02} alt="" width={57.75} height={66}/>
                    <p>Acesse seu<br />prontuário digital</p>
                </div>
            </div>

            <h1>seção 02</h1>

            <h1>seção 03</h1>

            <div className="footer">
                &copy; TODOS OS DIREITOS RESERVADOS
            </div>
        </div>



    )
}