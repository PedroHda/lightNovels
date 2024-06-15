import { Link } from "react-router-dom";
import "../Obras/style.css";



function Obras() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Light Novels Pedro</h1>
          <nav>
            <ul>
              <li>
                <Link className="navegation" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navegation" to="/Obras">
                  Obras
                </Link>
              </li>
              <li>
                <Link className="navegation" to="#">
                  Sobre
                </Link>
              </li>
              <li>
                <Link className="navegation" to="#">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <ul>
          <li>
            <Link to="/Slime">
              <img
                src="src\assets\image\capas\Slime\vol1.png"
                alt="Capa Volume 1"
              />
            </Link>
          </li>
        </ul>
      </div>
      <footer>
        <p>&copy; 2024 Light Novels Pedro. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Obras;
