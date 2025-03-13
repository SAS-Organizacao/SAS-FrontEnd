import Button_dropdown from "../Button_dropdown";


export default function Button() {
    return (
        <div className="navbar">
            <div className="logo">
                Logo
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