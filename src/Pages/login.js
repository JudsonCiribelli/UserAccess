import { useEffect, useState } from "react";
import "../App.css";
import { auth } from "../services/firebaseConection";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [userIsLogin, setUserIsLogin] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Dados recuperados!");
          setUserIsLogin(true);
        } else {
          console.log("Faça login para prosseguir");
          setUserIsLogin(false);
        }
      });
    };
    checkLogin();
  }, []);

  const handleLoginUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Usuario cadastrado com sucesso");
      })
      .catch((error) => {
        console.log("Error ao cadastrar usuario");
        if (error.code === "auth/week-password") {
          alert("Senha muito fraca!");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Usuario ja cadastrado");
        }
      });
  };
  return (
    <div className="App">
      {userIsLogin === true ? (
        <div className="container">
          <h1>Bem vindo</h1>
        </div>
      ) : (
        <div className="container">
          <h1>Logo</h1>
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
          <button type="submit" className="btn" onClick={handleLoginUser}>
            Login
          </button>
          <div>
            <p>
              Não possui conta ? <Link to="/register">Cadastre-se agora</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
