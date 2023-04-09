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
import Quizz from "../../DialogWindow/Templates/innerQuizz";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const CREATIVE_WELCOME_MESSAGE =
  "Vítej v kreativním módu. \n Pokud nebudeš vědět, co máš dělat, klikni vpravo dole na nápovědu. Pokud budeš chtít přejít do výukového módu, klikni na ikonku vedle nápovědy.";
/**
 * Renders the sidebar component.
 * @param {function} setIsCreativeMode - Function to set the creative mode.
 * @param {function} setOpenDialog - Function to open the dialog.
 * @param {function} setOpenOverlayDialog - Function to open the overlay dialog.
 * @return {JSX.Element} The rendered component.
 */
function Sidebar({ setIsCreativeMode, setOpenDialog, setOpenOverlayDialog }) {
  return (
    <Navbar>
      <NavItem>
        <DropdownMenu
          setIsCreativeMode={setIsCreativeMode}
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
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
 * @param {function} props.setIsCreativeMode - Function to set the creative mode.
 * @param {function} props.setOpenDialog - Function to open the dialog.
 * @param {function} props.setOpenOverlayDialog - Function to open the overlay dialog.
 * @return {JSX.Element} The rendered component.
 */
function DropdownMenu({
  setIsCreativeMode,
  setOpenDialog,
  setOpenOverlayDialog,
}) {
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

  function handleGoToEduMode() {
    setIsCreativeMode();
    setOpenDialog(true, CREATIVE_WELCOME_MESSAGE);
  }

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
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
       * back to creative mode
       */}
      <div className="custom-menu custom-menu-bottom">
        <div id="downitem" onClick={() => handleGoToEduMode()}>
          <DropdownItem leftIcon={backarrow}>KREATIVNÍ MÓD</DropdownItem>
        </div>
      </div>

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
            onClick={() =>
              setOpenDialog(true, stockData[0].content, stockData[0].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>SERVER</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[1].content, stockData[1].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>KLIENT</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[2].content, stockData[2].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>
              KOMUNIKACE <br /> KLIENT-SERVER
            </DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[3].content, stockData[3].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>PUTOVÁNÍ INFORMACÍ</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[4].content, stockData[4].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>CESTA</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[5].content, stockData[5].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>CHYTRÁ KŘIŽOVATKA</DropdownItem>
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
            onClick={() =>
              setOpenDialog(true, stockData[6].content, stockData[6].type)
            }
          >
            <DropdownItem leftIcon={question}>POSÍLÁNÍ DAT</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[7].content, stockData[7].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>PAKET</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[8].content, stockData[8].type)
            }
          >
            <DropdownItem leftIcon={question}>VYTVOŘ PAKET</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[9].content, stockData[9].type)
            }
          >
            <DropdownItem leftIcon={question}>NAJDI PAKET</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(
                true,
                <>
                  {stockData[10].content}
                  <Quizz
                    taskType={stockData[10].type}
                    setOpenDialog={setOpenDialog}
                    setOpenOverlayDialog={setOpenOverlayDialog}
                  />
                </>,
                "noGame"
              )
            }
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
            onClick={() =>
              setOpenDialog(true, stockData[11].content, stockData[11].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>KABELY</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[12].content, stockData[12].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>WIFI</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[13].content, stockData[13].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>MOBILNÍ DATA</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[14].content, stockData[14].type)
            }
          >
            <DropdownItem leftIcon={lightbulb}>SATELIT</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[15].content, stockData[15].type)
            }
          >
            <DropdownItem leftIcon={question}>DOBA ODEZVY</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(
                true,
                <>
                  {stockData[16].content}
                  <Quizz
                    taskType={stockData[16].type}
                    setOpenDialog={setOpenDialog}
                    setOpenOverlayDialog={setOpenOverlayDialog}
                  />
                </>,
                "noGame"
              )
            }
          >
            <DropdownItem leftIcon={question}>ŠÍŘKA PÁSMA</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[17].content, stockData[17].type)
            }
          >
            <DropdownItem leftIcon={question}>OMEZENÁ VZDÁLENOST</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(
                true,
                <>
                  {stockData[18].content}
                  <Quizz
                    taskType={stockData[18].type}
                    setOpenDialog={setOpenDialog}
                    setOpenOverlayDialog={setOpenOverlayDialog}
                  />
                </>,
                "noGame"
              )
            }
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
            onClick={() =>
              setOpenDialog(
                true,
                <>
                  {stockData[19].content}
                  <Quizz
                    taskType={stockData[19].type}
                    setOpenDialog={setOpenDialog}
                    setOpenOverlayDialog={setOpenOverlayDialog}
                  />
                </>,
                "noGame"
              )
            }
          >
            <DropdownItem leftIcon={lightbulb}>IP ADRESA</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(
                true,
                <>
                  {stockData[20].content}
                  <Quizz
                    taskType={stockData[20].type}
                    setOpenDialog={setOpenDialog}
                    setOpenOverlayDialog={setOpenOverlayDialog}
                  />
                </>,
                "noGame"
              )
            }
          >
            <DropdownItem leftIcon={lightbulb}>IPV4, IPv6</DropdownItem>
          </div>

          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[22].content, stockData[22].type)
            }
          >
            <DropdownItem leftIcon={question}>NEJRYCHLEJŠÍ CESTA</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[23].content, stockData[23].type)
            }
          >
            <DropdownItem leftIcon={question}>POČET CEST</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[24].content, stockData[24].type)
            }
          >
            <DropdownItem leftIcon={question}>PROBLÉM NA CESTĚ</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(
                true,
                <>
                  {stockData[25].content}
                  <Quizz
                    taskType={stockData[25].type}
                    setOpenDialog={setOpenDialog}
                    setOpenOverlayDialog={setOpenOverlayDialog}
                  />
                </>,
                "noGame"
              )
            }
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
            onClick={() =>
              setOpenDialog(true, stockData[26].content, stockData[26].type)
            }
          >
            <DropdownItem leftIcon={question}>ÚKOL 1</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[27].content, stockData[27].type)
            }
          >
            <DropdownItem leftIcon={question}>ÚKOL 2</DropdownItem>
          </div>

          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[28].content, stockData[28].type)
            }
          >
            <DropdownItem leftIcon={question}>ÚKOL 3</DropdownItem>
          </div>
          <div
            className="custom-menu-item-div"
            onClick={() =>
              setOpenDialog(true, stockData[29].content, stockData[29].type)
            }
          >
            <DropdownItem leftIcon={question}>ÚKOL 4</DropdownItem>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
export default Sidebar;
