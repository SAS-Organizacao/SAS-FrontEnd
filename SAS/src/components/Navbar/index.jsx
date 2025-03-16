import Button_dropdown from "../Menu_dropdown";
import Logo from "../../assets/images/logo-sas.svg"
import { useNavigate } from "react-router";
import '../Navbar/navbar.css'


export default function Button() {
    const navigation = useNavigate()

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt=""/>
                <h2>SAS</h2>
            </div>
            <div className="nav-buttons">
                <a className="btn-navbar" href="/">Home</a>
                <a className="btn-navbar" href="/login">Sobre</a>
                <a className="btn-navbar" href="#">Serviços</a>
                <a className="btn-navbar" href="#">Contato</a>
                <Button_dropdown />
            </div>
        </div>
    )
}