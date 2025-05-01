import { Link } from "react-router-dom";
import "./headerComponentStyless.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
const HeaderComponent = () => {
  const { userIsLogin } = useContext(AppContext);
  return (
    <header>
      <div className="Header-Container">
        <div className="title">
          <h1>Logo</h1>
        </div>
        <div className="navegation">
          {userIsLogin === true ? (
            <button className="btn">
              <Link className="link" to="/login">
                Login
              </Link>
            </button>
          ) : (
            <button>
              <Link className="link" to="/login">
                <FaRegUserCircle className="icon" />
              </Link>
            </button>
          )}
          <button>
            <Link className="link" to="/register">
              Register
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
