import { useEffect, useState } from "react";
import { db } from "../services/firebaseConection";
import "./register.css";
import { addDoc, collection, getDocs } from "firebase/firestore";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "User"));
    const usersList = querySnapshot.docs.map((doc) => ({
      name: doc.name,
      email: doc.email,
      idade: doc.age,
      senha: doc.password,
      ...doc.data(),
    }));
    setUsers(usersList);
  };

  const handleAddUser = async () => {
    await addDoc(collection(db, "User"), {
      name: name,
      email: email,
      senha: password,
      idade: age,
    })
      .then(() => {
        console.log("Usuario cadastrado com sucesso!");
        console.log(users);
        setName("");
        setEmail("");
        setAge("");
        setPassword("");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Registre-se</h1>
        <form onSubmit={(e) => e.preventDefault()}>
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
              type="password"
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
          <div className="input-container">
            <label>Serviço</label>
            <textarea
              value={services}
              type="text"
              placeholder="Descreva com detalhes o problema apresentado pelo seu dispositivo!"
              onChange={(e) => setServices(e.target.value)}
            />
          </div>
        </form>
        <button type="submit" className="btn" onClick={handleAddUser}>
          Registrar-se
        </button>
      </div>
      <div className="userContainer">
        <div className="userTitle">
          <h1>Usuarios cadastrados</h1>
        </div>
        <div className="userData">
          <ul>
            {users.map((user) => (
              <>
                <li>Nome: {user.name}</li>

                <li>Email: {user.email}</li>
                <li>Idade: {user.idade}</li>
                <li>Problema: {user.servico}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
