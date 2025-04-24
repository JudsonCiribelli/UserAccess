import "./headerComponentStyless.css";
import { FaRegUserCircle } from "react-icons/fa";
const HeaderComponent = () => {
  return (
    <header>
      <div className="Header-Container">
        <div>
          <h1>Logo</h1>
        </div>
        <nav className="navegation">
          <ul>
            <li>Services</li>
            <li>About</li>
            <FaRegUserCircle />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
