import Button from "../../components/Navbar";
import '../Home/home.css'
import Doctor from "../../assets/images/doctor-homepage.svg"
import Bookicon from "../../assets/images/icon-book.svg"
import Homeicon from "../../assets/images/icon-home.svg"
import Bookicon_02 from "../../assets/images/icon-book_02.svg"
import Footer from "../../components/Footer";


export default function Home() {

    return (

        <div className="homepage">
            {/* navbar */}
            <Button/>
            
            {/* Imagem banner */}
            <div className="imagem-homepage"></div>

            {/* seção 01 */}
            <div className="secao_01">
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

            <Footer/>
        </div>
        
    )
}