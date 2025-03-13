import Button from "../../components/Navbar";
import '../Home/home.css'
import Doctor from "../../assets/images/doctor-homepage.svg"
import Bookicon from "../../assets/images/icon-book.svg"
import Homeicon from "../../assets/images/icon-home.svg"

export default function Home() {
    return (

        <div className="container">
            <Button/>
<<<<<<< HEAD
            {/* <h1>Screen HomePage</h1> */}
        </>
=======

            <div className="imagem-homepage">
                <img src={Doctor} alt="Imagem ilustrativa home page" />
            </div>

            <div className="grid-container">
                <div className="grid-item">
                    <img src={Bookicon} alt="" />
                    <p>Agende sua <br />
                        consulta</p>
                </div>
                
                <div className="grid-item">
                    <img src={Homeicon} alt="" />
                    <p>Encontre unidades <br />
                    de saúde próximas</p>
                </div>

                <div className="grid-item">
                    <h4>imagem aqui</h4>
                    <p>Acesse seu <br />
                    prontuário digital</p>
                </div>
            </div>

            <h1>seção 02</h1>

            <h1>seção 03</h1>

            <div className="footer">
                &copy; TODOS OS DIREITOS RESERVADOS
            </div>
        </div>


>>>>>>> a34a6186f81db0a08868a0705d649c7d4b07e35a
    )
}