import Logo from "../../assets/images/logo-sas.svg"
import { useNavigate } from "react-router";
import '../Navbar_logada/navbar_logada.css'
import Imgmedicologada from "../../assets/img-logada/img-medico-logada.jpg"
import Logoicon from "../../assets/images/logo-sas-png.png"


export default function Navbar_logada_medico() {
    const navigation = useNavigate()

    return (
        <div className="navbar-logada">
            <div className="logo-logada">
                <img src={Logoicon} alt=""/>
                <h2>SAS</h2>
            </div>

            <div className="nav-logada-buttons">
                <a className="btn-nav-logada" href="/">HOME</a>
                <a className="btn-nav-logada" href="#">SOBRE</a>
                <a className="btn-nav-logada" href="">PACIENTE</a>
                <a className="btn-nav-logada" href="#">MÉDICO</a>
                <a className="btn-nav-logada" href="#">POSTO PARCEIRO</a>                
            </div>

            <div className="img-logado">
                <img src={Imgmedicologada} alt="img-logada"/>
            </div>
        </div>
    )
}