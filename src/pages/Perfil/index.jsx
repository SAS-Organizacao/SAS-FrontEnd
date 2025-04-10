// import "./perfil.css";
// import Button from "../../components/Navbar";
// import Menulateral from "../../components/Menu_lateral";
// // import Barra from '../../components/Barra'
// import { useState } from "react";
// import Barra_perfil from "../../components/Barra_perfil";
// import NavbarLogada from "../../components/Navbar_logada";

// export default function Perfil() {
//   function cadastroUsuario() {
//     e.preventDefault();
//     console.log("Cadastrado com sucesso!");
//   }
//   const [nome, setNome] = useState("");

//   return (
//     <>
//       <NavbarLogada />
//       <Menulateral />
//       <Barra_perfil/>
//       {/* <Barra/> */}
//       <div className="perfil-container">
//         <div className="perfil-content">
//           <div className="dados-pessoais">
//             <div className="dados-p">
//               <h3>DADOS PESSOAIS</h3>
//               <button className="btn-dados">&#9998;</button>
//             </div>

//             <div>
//               <div className="dados-info">
//                 <p>
//                   <strong>Nome:</strong> Judito Cunha Bezerra
//                 </p>
//                 <p>
//                   <strong>CPF:</strong> 000.111.222-33
//                 </p>
//                 <p>
//                   <strong>RG:</strong> 1.234.567
//                 </p>
//                 <p>
//                   <strong>Gênero:</strong> Feminino
//                 </p>
//                 <p>
//                   <strong>Grau de instrução:</strong> Ensino fundamental
//                 </p>
//                 <p>
//                   <strong>Data de nascimento:</strong> 23/04/1950
//                 </p>
//                 <p>
//                   <strong>CEP:</strong> 53120-300
//                 </p>
//                 <p>
//                   <strong>Rua:</strong> R. da Regeneração
//                 </p>
//                 <p>
//                   <strong>Número:</strong> 36
//                 </p>
//                 <p>
//                   <strong>Bairro:</strong> Água fria
//                 </p>
//                 <p>
//                   <strong>Cidade:</strong> Recife
//                 </p>
//                 <p>
//                   <strong>Estado:</strong> PE
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="dados-acesso">
//             <div className="dados-a">
//               <h3>DADOS DE ACESSO</h3>
//               <button className="edit">&#43;</button>
//             </div>

//             <div className="dados-contato">
//               <div className="dados-acesso-colum">
//                 <label htmlFor="email">
//                   <strong>E-mail</strong>
//                 </label>
//                 <input type="email" placeholder="juditecunha@gmail.com" />
//                 <label htmlFor="password">
//                   <strong>Senha</strong>
//                 </label>
//                 <input type="password" placeholder="**********" />
//               </div>
//               <div className="dados-celular">
//                 <label htmlFor="celular">
//                   <strong>Celular</strong>
//                 </label>
//                 <input type="text" id="celular" placeholder="(81) XXXXX-XXXX" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import "./perfil.css";
import Button from "../../components/Navbar";
import Menulateral from "../../components/Menu_lateral";
// import Barra from '../../components/Barra'
import { useState } from "react";
import Barra_perfil from "../../components/Barra_perfil";
import NavbarLogada from "../../components/Navbar_logada";

export default function Perfil() {
  function cadastroUsuario() {
    e.preventDefault();
    console.log("Cadastrado com sucesso!");
  }
  const [nome, setNome] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: "Judito Cunha Bezerra",
    cpf: "000.111.222-33",
    rg: "1.234.567",
    genero: "Feminino",
    instrucao: "Ensino fundamental",
    nascimento: "23/04/1950",
    cep: "53120-300",
    rua: "R. da Regeneração",
    numero: "36",
    bairro: "Água fria",
    cidade: "Recife",
    estado: "PE",
    email: "juditecunha@gmail.com",
    celular: "(81) XXXXX-XXXX"
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Aqui você poderia adicionar uma chamada API para salvar os dados no backend
  };

  return (
    <>
      <NavbarLogada />
      <Menulateral />
      <Barra_perfil/>
      {/* <Barra/> */}
      <div className="perfil-container">
        <div className="perfil-content">
          <div className="dados-pessoais">
            <div className="dados-p">
              <h3>DADOS PESSOAIS</h3>
              <button className="btn-dados" onClick={handleEditClick}>&#9998;</button>
            </div>

            <div>
              <div className="dados-info">
                {isEditing ? (
                  <>
                    <div>
                      <strong>Nome:</strong>
                      <input 
                        type="text" 
                        name="nome" 
                        value={userData.nome} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>CPF:</strong>
                      <input 
                        type="text" 
                        name="cpf" 
                        value={userData.cpf} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>RG:</strong>
                      <input 
                        type="text" 
                        name="rg" 
                        value={userData.rg} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Gênero:</strong>
                      <input 
                        type="text" 
                        name="genero" 
                        value={userData.genero} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Grau de instrução:</strong>
                      <input 
                        type="text" 
                        name="instrucao" 
                        value={userData.instrucao} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Data de nascimento:</strong>
                      <input 
                        type="text" 
                        name="nascimento" 
                        value={userData.nascimento} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>CEP:</strong>
                      <input 
                        type="text" 
                        name="cep" 
                        value={userData.cep} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Rua:</strong>
                      <input 
                        type="text" 
                        name="rua" 
                        value={userData.rua} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Número:</strong>
                      <input 
                        type="text" 
                        name="numero" 
                        value={userData.numero} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Bairro:</strong>
                      <input 
                        type="text" 
                        name="bairro" 
                        value={userData.bairro} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Cidade:</strong>
                      <input 
                        type="text" 
                        name="cidade" 
                        value={userData.cidade} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <div>
                      <strong>Estado:</strong>
                      <input 
                        type="text" 
                        name="estado" 
                        value={userData.estado} 
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    </div>
                    <button 
                      onClick={handleSaveClick}
                      className="save-btn"
                    >
                      Salvar
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Nome:</strong> {userData.nome}
                    </p>
                    <p>
                      <strong>CPF:</strong> {userData.cpf}
                    </p>
                    <p>
                      <strong>RG:</strong> {userData.rg}
                    </p>
                    <p>
                      <strong>Gênero:</strong> {userData.genero}
                    </p>
                    <p>
                      <strong>Grau de instrução:</strong> {userData.instrucao}
                    </p>
                    <p>
                      <strong>Data de nascimento:</strong> {userData.nascimento}
                    </p>
                    <p>
                      <strong>CEP:</strong> {userData.cep}
                    </p>
                    <p>
                      <strong>Rua:</strong> {userData.rua}
                    </p>
                    <p>
                      <strong>Número:</strong> {userData.numero}
                    </p>
                    <p>
                      <strong>Bairro:</strong> {userData.bairro}
                    </p>
                    <p>
                      <strong>Cidade:</strong> {userData.cidade}
                    </p>
                    <p>
                      <strong>Estado:</strong> {userData.estado}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="dados-acesso">
            <div className="dados-a">
              <h3>DADOS DE ACESSO</h3>
              <button className="edit">&#43;</button>
            </div>

            <div className="dados-contato">
              <div className="dados-acesso-colum">
                <label htmlFor="email">
                  <strong>E-mail</strong>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={userData.email} 
                  onChange={handleInputChange}
                  placeholder="juditecunha@gmail.com" 
                />
                <label htmlFor="password">
                  <strong>Senha</strong>
                </label>
                <input type="password" placeholder="**********" />
              </div>
              <div className="dados-celular">
                <label htmlFor="celular">
                  <strong>Celular</strong>
                </label>
                <input 
                  type="text" 
                  id="celular" 
                  name="celular"
                  value={userData.celular} 
                  onChange={handleInputChange}
                  placeholder="(81) XXXXX-XXXX" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
