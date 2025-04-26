import { useState } from "react";
import "./Home.css";
const HomePage = () => {
  const [service, setService] = useState("");
  const [listService, setListService] = useState([]);

  const handleRegisterService = () => {
    alert("Service agendado com sucesso!");
    setService("");
    setListService(service);
    console.log(listService);
  };
  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Qual tipo de serviço voce deseja agendar ? </h1>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="checkbox"
                id="serviceOne"
                value="Manutenção em notebooks"
                onChange={(e) => setService(e.target.value)}
              />
              <label for="serviceOne">Manutenção em notebooks</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="serviceTwo"
                value="Manutenção em notebooks"
                onChange={(e) => setService(e.target.value)}
              />
              <label for="serviceTwo">Manutenção em desktop</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="serviceThree"
                value="Manutenção em notebooks"
                onChange={(e) => setService(e.target.value)}
              />
              <label for="serviceThree">Manutenção em celulares</label>
            </div>
          </form>
          <p>{service}</p>
        </div>
        <button type="submit" onClick={handleRegisterService}>
          Registrar
        </button>
      </div>
    </div>
  );
};

export default HomePage;
