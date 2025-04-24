import { Link } from "react-router-dom";
import "./headerComponentStyless.css";
import { FaRegUserCircle } from "react-icons/fa";
const HeaderComponent = () => {
  return (
    <header>
      <div className="Header-Container">
        <div className="title">
          <h1>Logo</h1>
        </div>
        <div className="navegation">
          <button className="btn">
            <Link className="link">Services</Link>
          </button>
          <button>
            <Link className="link">Register</Link>
          </button>
          <button>
            <Link className="link">
              <FaRegUserCircle className="icon" />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
