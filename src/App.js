import { useState } from "react";
import "./App.css";
import { auth, db } from "./firebaseConection";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = async () => {
    await addDoc(collection(db, "User"), {
      name: name,
      email: email,
      idade: age,
    })
      .then(() => {
        console.log("Dados enviados com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
    setAge("");
    setEmail("");
    setName("");
  };

  const searchForUser = async () => {
    const userRef = doc(db, "User");
    await getDoc(userRef)
      .then((snapshot) => {
        setEmail(snapshot.data().email);
        setName(snapshot.data().name);
        setAge(snapshot.data().age);
        console.log("Usuario encontrado");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleLoginUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Usuario cadastrado com sucesso");
      })
      .catch((error) => {
        console.log("Error ao cadastrar usuario");
        if (error.code === "auth/week-password") {
          console.log("Senha muito fraca!");
        } else if (error.code === "auth/email-already-in-use") {
          console.log("Usuario ja cadastrado");
        }
      });
  };

  return (
    <div className="App">
      <div className="container">
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
        <button type="submit" onClick={handleLoginUser}>
          Login
        </button>
        <button type="submit" onClick={handleAddUser}>
          Cadastrar
        </button>
        <button type="submit" onClick={searchForUser}>
          {" "}
          Buscar
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default App;
