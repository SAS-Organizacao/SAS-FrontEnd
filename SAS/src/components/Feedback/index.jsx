import Symbolicon from "../../assets/images/symbol-icon.svg"

import '../Feedback/feed.css'

import { useNavigate } from "react-router"

export default function Feedback({ onclose }) {

    const navigation = useNavigate();

    const handleContinue = () => {
        onclose();
        navigation('/login');
    }

    return (
        <>
            <div className="feedback-overlay">
                <div className="feedback-container">
                    <div className='symbol-icon'>
                        <img src={Symbolicon} alt="" width={100}/>
                    </div>
                    <div className="text-feedback">
                        <p>Sua senha foi redefinida com</p>
                        <h3>Sucesso!</h3>
                    </div>
                    <form onSubmit={handleContinue}>
                        <button className="btn-feedback">Continuar</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}