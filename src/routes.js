import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from "./register";
import HomePage from "./Home";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
