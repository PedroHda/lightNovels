import "../main/style.css";
import { Link } from "react-router-dom";

function Main() {
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

      <main className="content">
        <section className="intro">
          <p>
            Este site é utilizado para estudos e organização das obras que eu
            quero/gosto/estou lendo. É um portfólio pessoal sem fins lucrativos
            ou de pirataria.
          </p>
          <p>
            Todas as obras aqui disponíveis são pegas de outros sites e
            tradutores, apenas agregando todas elas em um único lugar.
          </p>
          <p>Este site é apenas para meu estudo de HTML5, CSS3 e JavaScript.</p>
        </section>

        <section className="recent-volumes">
          <h2>Volume Mais Recente</h2>
          <ul>
            <li>
              <div className="volume-image">
                <Link to="/Slime">
                  <img
                    src="src/assets/image/capas/Slime/vol1.png"
                    alt="Capa Volume 1"
                  />
                </Link>
              </div>
              <div className="volume-description">
                <p>
                  O solitário Satoru Mikami, de 37 anos, está preso em um beco
                  sem saída, infeliz com sua vida mundana, mas depois de morrer
                  nas mãos de um ladrão, ele desperta para um novo começo em um
                  reino de fantasia ... como um monstro de limo! Enquanto ele se
                  aclimata com sua nova existência pegajosa, suas façanhas com
                  os outros monstros desencadeiam uma cadeia de eventos que
                  mudará seu novo mundo para sempre!
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Light Novels Pedro. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Main;
