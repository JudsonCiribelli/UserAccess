import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from "./Pages/register";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/login";
import HeaderComponent from "./Components/Header-Component/headerComponent";

function RouteApp() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
