import Button_dropdown from "../Button_dropdown";
import Logo from "../../assets/images/logo-sas.svg"

export default function Button() {
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