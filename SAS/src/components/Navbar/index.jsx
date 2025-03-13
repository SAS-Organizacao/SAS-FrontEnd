import Button_dropdown from "../Menu_dropdown";
import Logo from "../../assets/images/logo-sas.svg"
import { useNavigate } from "react-router";
import '../Navbar/navbar.css'


export default function Button() {
    const navigation = useNavigate()

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>SAS</h2>
            </div>
            <div className="nav-buttons">
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Serviços</a>
                <a href="#">Contato</a>
                <Button_dropdown />
            </div>
        </div>
    )
}