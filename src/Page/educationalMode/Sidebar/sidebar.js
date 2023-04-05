import "reactflow/dist/style.css";
import "./Sidebar.css";
import SummaryTemplate from "../../../ModalWindow/templateSummary";
import { stockData } from "../../../ModalWindow/dataQuizzes";
import { summaryText } from "../../../ModalWindow/dataSummary";
import internet from "../../../images/icons/internet.png";
import packet from "../../../images/icons/packet.png";
import wifi from "../../../images/icons/wifi.png";
import builder from "../../../images/icons/builder.png";
import gateway from "../../../images/icons/gateway.png";
import backarrow from "../../../images/icons/left-arrow.png";
import summary from "../../../images/icons/summary.png";
import question from "../../../images/icons/question-mark.png";
import lightbulb from "../../../images/icons/light-bulb.png";
import Quizz from "../../../ModalWindow/Quizz";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Sidebar({ setIsCreativeMode, setOpenDialog, setOpenOverlayDialog }) {
  return (
    <>
      <Navbar>
        <NavItem>
          <DropdownMenu
            setIsCreativeMode={setIsCreativeMode}
            setOpenDialog={setOpenDialog}
            setOpenOverlayDialog={setOpenOverlayDialog}
          />
        </NavItem>
      </Navbar>
    </>
  );
}

function Navbar(props) {
  return (
    <nav className="custom-navbar">
      <ul className="custom-navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return <li className="custom-nav-item">{props.children}</li>;
}

function DropdownMenu({
  setIsCreativeMode,
  setOpenDialog,
  setOpenOverlayDialog,
}) {
  const [activeMenu, setActiveMenu] = useState("custom-main");
  const dropdownRef = useRef(null);

  /*
  function openQuizzModal(instructionNumber) {
    setGameAfterModalClose("noGame");
    setAlertMessage(
      <>
        {stockData[instructionNumber].content}
        <Quizz
          taskType={stockData[instructionNumber].type}
          setOpenModal={setOpenModal}
          setOpenOverlayModal={setOpenOverlayModal}
        />
      </>
    );
    setOpenModal(true);
  }*/
  //openQuizzModal
  //setOpenDialog(true,  <>{stockData[instructionNumber].content} <QuizztaskType={stockData[instructionNumber].type} setOpenModal={setOpenModal} setOpenOverlayModal={setOpenOverlayModal} /> </>, "noGame")

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
      <CSSTransition
        in={activeMenu === "custom-main"}
        timeout={500}
        classNames="custom-menu-primary"
        unmountOnExit
      >
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
          <div id="downitem" onClick={() => setIsCreativeMode(true)}>
            <DropdownItem leftIcon={backarrow}>KREATIVNÍ MÓD</DropdownItem>
          </div>
        </div>
      </CSSTransition>

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
