import { useState } from "react";
import "./App.css";
import { db } from "./firebaseConection";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

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
          <label>Idade</label>
          <input
            value={age}
            type="number"
            placeholder="Digite sua idade"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleAddUser}>
          Cadastrar
        </button>
        <div>
          <h1>Nome: {name}</h1>
          <h1>Email: {email}</h1>
          <h1>Idade: {age}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
