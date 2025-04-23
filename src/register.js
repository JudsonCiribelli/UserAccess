import { useState } from "react";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = async () => {
    alert("Usuario criado com sucesso!");
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Registre-se</h1>
        <div className="input-container">
          <label>Nome</label>
          <input
            value={name}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            value={email}
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            value={password}
            type="email"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Idade</label>
          <input
            value={age}
            type="text"
            placeholder="Digite sua idade"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" onClick={handleAddUser}>
          Registrar-se
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
