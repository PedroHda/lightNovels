import { Link } from "react-router-dom";
import "../Slime/style.css";
import pdfData from "../../../assets/JSON/PDFs.json";

function Slime() {
  // Função para lidar com o clique nos links
  const handleLinkClick = (volume: string) => {
    // Ta sendo colocado o 1 ali, pq 1 é referente ao Slime, se for outro valor, é para uma outra obra
    const volumes = pdfData[1]?.Volumes; // Verifique se pdfData[1] e Volumes existem
    if (volumes) {
      const volumeData = volumes.find((v) => v.Volume === volume);
      if (volumeData) {
        const caminhoRelativo = volumeData.CaminhoRelativo;
        console.log(`Caminho relativo para ${volume}:`, caminhoRelativo);

        // Armazena o caminho relativo no localStorage
        localStorage.setItem("caminhoRelativo", caminhoRelativo);
      } else {
        console.warn(`Volume ${volume} não encontrado.`);
      }
    } else {
      console.warn("Volumes não encontrados no JSON.");
    }
  };

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
      <main>
        <section className="Volumes">
          <ul className="listaagem">
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 1")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol1.png"
                    alt="Volume 1"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
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
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 2")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol2.jpg"
                    alt="Volume 2"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Com sua nova comunidade crescendo, Rimuru começa a transformar
                  a caverna onde Veldora está preso em uma base segura. Ele faz
                  alianças com goblins, lobos, e anões, expandindo seu
                  território e influência. Rimuru também enfrenta seu primeiro
                  grande desafio ao confrontar uma tribo de ogros que
                  inicialmente o veem como inimigo, mas depois se tornam seus
                  valiosos aliados.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 3")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol3.jpg"
                    alt="Volume 3"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Rimuru continua a consolidar sua nação de monstros, agora
                  chamada de Reino de Tempest. Ele ajuda uma colônia de
                  lizardmen a se defender contra uma horda de orcs liderada pelo
                  Lorde Orc. Durante a batalha, Rimuru demonstra suas
                  habilidades de liderança e combate, ganhando a confiança de
                  diversas raças. O volume culmina na grande batalha contra o
                  Lorde Orc, com Rimuru estabelecendo a paz e a cooperação entre
                  as raças.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 4")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol4.jpg"
                    alt="Volume 4"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Com a ameaça do Lorde Orc resolvida, Rimuru se concentra na
                  administração e desenvolvimento de Tempest. Ele estabelece
                  relações diplomáticas com o Reino de Blumund e a Guilda dos
                  Aventureiros, visando a paz e a prosperidade. No entanto, a
                  paz é ameaçada pela chegada de um poderoso inimigo, o Lorde
                  Demônio Milim Nava, que desafia Rimuru. Após uma luta tensa,
                  Milim se torna aliada de Rimuru, impressionada por suas
                  habilidades e personalidade.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 5")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol5.jpg"
                    alt="Volume 5"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  O foco muda para a ameaça dos clowns malignos e um esquema
                  maior envolvendo outros Lordes Demônios. Rimuru deve lidar com
                  a crescente tensão política e as ameaças internas e externas
                  ao seu reino. Durante este período, ele forma alianças
                  estratégicas e se prepara para possíveis conflitos. Novas
                  revelações sobre o passado de alguns personagens adicionam
                  profundidade à trama.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 6")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol6.jpg"
                    alt="Volume 6"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Rimuru enfrenta uma crise quando seus aliados são atacados,
                  levando a uma série de eventos que forçam Rimuru a evoluir e
                  se tornar mais poderoso. Ele adquire novas habilidades e
                  enfrentam desafios significativos que testam sua liderança.
                  Este volume explora os sacrifícios que Rimuru e seus amigos
                  estão dispostos a fazer para proteger seu reino.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 7")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol7.jpg"
                    alt="Volume 7"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  O reino de Tempest continua a crescer, mas novas ameaças
                  surgem, incluindo a intervenção de outros Lordes Demônios.
                  Rimuru precisa navegar pelas complexas políticas dos Lordes
                  Demônios e proteger seu povo de intrigas e traições. Este
                  volume destaca a diplomacia e a estratégia de Rimuru enquanto
                  ele tenta manter a paz e a estabilidade.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 8")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol8.jpg"
                    alt="Volume 8"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Rimuru lida com as consequências das batalhas anteriores e as
                  tensões internas em Tempest. Ele busca fortalecer suas
                  alianças e preparar sua nação para futuras ameaças. Este
                  volume foca no desenvolvimento de infraestruturas e na
                  estabilização do governo de Rimuru, enquanto ele lida com
                  novos desafios e inimigos emergentes.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 9")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol9.jpg"
                    alt="Volume 9"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  O volume apresenta novos personagens e desafios que testam os
                  limites das habilidades de Rimuru e a coesão de sua
                  comunidade. Rimuru enfrenta adversários poderosos e deve tomar
                  decisões difíceis para proteger seu reino. A história explora
                  os dilemas morais e éticos de liderar uma nação em um mundo
                  cheio de perigos.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 10")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol10.jpg"
                    alt="Volume 10"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Rimuru se prepara para uma guerra iminente contra forças que
                  ameaçam destruir tudo o que ele construiu. Novas alianças são
                  formadas e antigas rivalidades são resolvidas. O volume
                  culmina em uma série de batalhas épicas que definirão o futuro
                  de Tempest. Rimuru demonstra sua evolução como líder e
                  guerreiro.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 11")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol11.jpg"
                    alt="Volume 11"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  A batalha contra o império humano se intensifica quando Rimuru
                  descobre planos para invadir Tempest. Ele mobiliza suas forças
                  e forma alianças com outras nações para enfrentar a ameaça.
                  Este volume destaca a estratégia militar de Rimuru e as
                  relações complexas entre diferentes raças e nações. A trama se
                  aprofunda nas motivações dos antagonistas e nas consequências
                  de uma guerra em grande escala.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 12")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol12.png"
                    alt="Volume 12"
                  />
                </Link>
              </div>
              <div className="descriptionConten">
                <p>
                  Enquanto a guerra contra o império se desenrola, Rimuru deve
                  lidar com traições internas e novas ameaças externas. Ele
                  descobre segredos obscuros sobre o mundo em que vive e
                  enfrenta dilemas éticos sobre o uso de seu poder. Este volume
                  explora o crescimento pessoal de Rimuru e seus aliados, bem
                  como a expansão do reino de Tempest.
                </p>
              </div>
            </li>
            <hr />
            <li className="capasSlime">
              <div className="listaContent">
                <Link
                  to="/LeitorPDF"
                  target="_blank"
                  onClick={() => handleLinkClick("Volume 13")}
                >
                  <img
                    src="src/assets/image/capas/Slime/vol13.jpg"
                    alt="Volume 13"
                  />
                </Link>
              </div>
              <div className="descriptionConten"> 
                <p>
                  Após a conclusão da guerra, Rimuru começa a reconstruir
                  Tempest e fortalecer suas alianças. Ele enfrenta novos
                  desafios relacionados à administração e ao desenvolvimento de
                  sua nação. Este volume foca na diplomacia e na construção de
                  um futuro próspero, além de introduzir novos personagens e
                  conflitos que impactarão a trama.
                </p>
              </div>
            </li>
            <hr />
          </ul>
        </section>
      </main>
      <div className="content"></div>
      <footer>
        <p>&copy; 2024 Light Novels Pedro. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Slime;
