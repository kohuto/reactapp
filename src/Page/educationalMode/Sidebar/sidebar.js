import "reactflow/dist/style.css";
import "./Sidebar.css";
import SummaryTemplate from "../../DialogWindow/Templates/summary";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";
import { summaryText } from "../../../Data/Quizzes/dataSummary";
import internet from "../../../images/icons/internet.png";
import packet from "../../../images/icons/packet.png";
import wifi from "../../../images/icons/wifi.png";
import builder from "../../../images/icons/builder.png";
import gateway from "../../../images/icons/gateway.png";
import backarrow from "../../../images/icons/left-arrow.png";
import summary from "../../../images/icons/summary.png";
import question from "../../../images/icons/question-mark.png";
import lightbulb from "../../../images/icons/light-bulb.png";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Sidebar({ setOpenDialog, setOpenOverlayDialog, setGame }) {
  return (
    <Navbar>
      <NavItem>
        <DropdownMenu setOpenDialog={setOpenDialog} setGame={setGame} />
      </NavItem>
    </Navbar>
  );
}

/**
 * Renders the navbar component.
 * @param {object} props - The component props.
 * @param {JSX.Element} props.children - The child elements of the component.
 * @return {JSX.Element} The rendered component.
 */
function Navbar(props) {
  return (
    <nav className="custom-navbar">
      <ul className="custom-navbar-nav">{props.children}</ul>
    </nav>
  );
}

/**
 * Renders a navigation item.
 * @param {object} props - The component props.
 * @param {JSX.Element} props.children - The child elements of the component.
 * @return {JSX.Element} The rendered component.
 */
function NavItem(props) {
  return <li className="custom-nav-item">{props.children}</li>;
}

/**
 * Renders the dropdown menu component.
 * @param {object} props - The component props.
 * @param {function} props.setOpenDialog - Function to open the dialog.
 * @return {JSX.Element} The rendered component.
 */
function DropdownMenu({ setOpenDialog, setGame }) {
  const [activeMenu, setActiveMenu] = useState("custom-main");
  const dropdownRef = useRef(null);

  /**
   * Renders a dropdown item.
   * @param {object} props - The component props.
   * @param {string} props.goToMenu - The menu to go to.
   * @param {string} props.leftIcon - The URL of the left icon.
   * @param {JSX.Element} props.children - The child elements of the component.
   * @return {JSX.Element} The rendered component.
   */
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="custom-menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="custom-icon-button">
          <img src={props.leftIcon} alt="" />
        </span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="over-flow-container">
        <CSSTransition
          in={activeMenu === "custom-main"}
          timeout={500}
          classNames="custom-menu-primary"
          unmountOnExit
        >
          {/**
           * main menu with five categories
           */}
          <div className="custom-menu">
            <DropdownItem leftIcon={internet} goToMenu="internet-z-dalky">
              INTERNET Z DÁLKY
            </DropdownItem>
            <DropdownItem leftIcon={packet} goToMenu="klienti-a-pakety">
              KLIENTI A PAKETY
            </DropdownItem>
            <DropdownItem leftIcon={wifi} goToMenu="typy-pripojeni">
              TYPY PŘIPOJENÍ
            </DropdownItem>
            <DropdownItem leftIcon={gateway} goToMenu="servery-a-krizovatky">
              SERVERY A KŘIŽOVATKY
            </DropdownItem>
            <DropdownItem leftIcon={builder} goToMenu="build-network">
              POSTAV SÍŤ
            </DropdownItem>
          </div>
        </CSSTransition>

        {/**
         * first submenu with tasks
         */}
        <CSSTransition
          in={activeMenu === "internet-z-dalky"}
          timeout={500}
          classNames="custom-menu-secondary"
          unmountOnExit
        >
          <div className="custom-menu">
            <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
              <h2>INTERNET Z DÁLKY</h2>
            </DropdownItem>
            <div
              className="custom-menu-item-div"
              onClick={() =>
                setOpenDialog(
                  true,
                  <SummaryTemplate data={summaryText[0]} />,
                  "noGame"
                )
              }
            >
              <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[0].type)}
            >
              <DropdownItem leftIcon={lightbulb}>SERVER</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[1].type)}
            >
              <DropdownItem leftIcon={lightbulb}>KLIENT</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[2].type)}
            >
              <DropdownItem leftIcon={lightbulb}>
                KOMUNIKACE KLIENT-SERVER
              </DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[3].type)}
            >
              <DropdownItem leftIcon={lightbulb}>
                PUTOVÁNÍ INFORMACÍ
              </DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[4].type)}
            >
              <DropdownItem leftIcon={lightbulb}>CESTA</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[5].type)}
            >
              <DropdownItem leftIcon={lightbulb}>
                CHYTRÁ KŘIŽOVATKA
              </DropdownItem>
            </div>
          </div>
        </CSSTransition>

        {/**
         * second submenu with tasks
         */}
        <CSSTransition
          in={activeMenu === "klienti-a-pakety"}
          timeout={500}
          classNames="custom-menu-secondary"
          unmountOnExit
        >
          <div className="custom-menu">
            <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
              <h2>KLIENTI A PAKETY</h2>
            </DropdownItem>
            <div
              className="custom-menu-item-div"
              onClick={() =>
                setOpenDialog(
                  true,
                  <SummaryTemplate data={summaryText[1]} />,
                  "noGame"
                )
              }
            >
              <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[6].type)}
            >
              <DropdownItem leftIcon={question}>POSÍLÁNÍ DAT</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[7].type)}
            >
              <DropdownItem leftIcon={lightbulb}>PAKET</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[8].type)}
            >
              <DropdownItem leftIcon={question}>VYTVOŘ PAKET</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[9].type)}
            >
              <DropdownItem leftIcon={question}>NAJDI PAKET</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[10].type)}
            >
              <DropdownItem leftIcon={question}>
                JAK VELKÁ BUDE ZPRÁVA
              </DropdownItem>
            </div>
          </div>
        </CSSTransition>

        {/**
         * third submenu with tasks
         */}
        <CSSTransition
          in={activeMenu === "typy-pripojeni"}
          timeout={500}
          classNames="custom-menu-secondary"
          unmountOnExit
        >
          <div className="custom-menu">
            <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
              <h2>TYPY PŘIPOJENÍ</h2>
            </DropdownItem>
            <div
              className="custom-menu-item-div"
              onClick={() =>
                setOpenDialog(
                  true,
                  <SummaryTemplate data={summaryText[2]} />,
                  "noGame"
                )
              }
            >
              <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[11].type)}
            >
              <DropdownItem leftIcon={lightbulb}>KABELY</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[12].type)}
            >
              <DropdownItem leftIcon={lightbulb}>WIFI</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[13].type)}
            >
              <DropdownItem leftIcon={lightbulb}>MOBILNÍ DATA</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[14].type)}
            >
              <DropdownItem leftIcon={lightbulb}>SATELIT</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[15].type)}
            >
              <DropdownItem leftIcon={question}>DOBA ODEZVY</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[16].type)}
            >
              <DropdownItem leftIcon={question}>ŠÍŘKA PÁSMA</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[17].type)}
            >
              <DropdownItem leftIcon={question}>
                OMEZENÁ VZDÁLENOST
              </DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[18].type)}
            >
              <DropdownItem leftIcon={question}>JAK SE PŘIPOJIT</DropdownItem>
            </div>
          </div>
        </CSSTransition>

        {/**
         * fourth submenu with tasks
         */}
        <CSSTransition
          in={activeMenu === "servery-a-krizovatky"}
          timeout={500}
          classNames="custom-menu-secondary"
          unmountOnExit
        >
          <div className="custom-menu">
            <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
              <h2>SERVERY A KŘIŽOVATKY</h2>
            </DropdownItem>
            <div
              className="custom-menu-item-div"
              onClick={() =>
                setOpenDialog(
                  true,
                  <SummaryTemplate data={summaryText[3]} />,
                  "noGame"
                )
              }
            >
              <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[19].type)}
            >
              <DropdownItem leftIcon={lightbulb}>IP ADRESA</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[20].type)}
            >
              <DropdownItem leftIcon={lightbulb}>IPV4, IPv6</DropdownItem>
            </div>

            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[21].type)}
            >
              <DropdownItem leftIcon={question}>
                NEJRYCHLEJŠÍ CESTA
              </DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[22].type)}
            >
              <DropdownItem leftIcon={question}>POČET CEST</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[23].type)}
            >
              <DropdownItem leftIcon={question}>PROBLÉM NA CESTĚ</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[24].type)}
            >
              <DropdownItem leftIcon={question}>SESTAVENÍ ZPRÁVY</DropdownItem>
            </div>
          </div>
        </CSSTransition>

        {/**
         * fifth submenu with tasks
         */}
        <CSSTransition
          in={activeMenu === "build-network"}
          timeout={500}
          classNames="custom-menu-secondary"
          unmountOnExit
        >
          <div className="custom-menu">
            <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
              <h2>POSTAV SÍŤ</h2>
            </DropdownItem>
            <div
              className="custom-menu-item-div"
              onClick={() =>
                setOpenDialog(
                  true,
                  <SummaryTemplate data={summaryText[4]} />,
                  "noGame"
                )
              }
            >
              <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[26].type)}
            >
              <DropdownItem leftIcon={question}>ÚKOL 1</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[27].type)}
            >
              <DropdownItem leftIcon={question}>ÚKOL 2</DropdownItem>
            </div>

            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[28].type)}
            >
              <DropdownItem leftIcon={question}>ÚKOL 3</DropdownItem>
            </div>
            <div
              className="custom-menu-item-div"
              onClick={() => setGame(stockData[29].type)}
            >
              <DropdownItem leftIcon={question}>ÚKOL 4</DropdownItem>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
export default Sidebar;
