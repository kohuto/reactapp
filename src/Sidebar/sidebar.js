import "reactflow/dist/style.css";
import "./Sidebar.css";

import ModalWindowTemplate from "../ModalWindow/templateModalWindow";
import QuizzTemplate from "../ModalWindow/templateQuizz";
import SummaryTemplate from "../ModalWindow/templateSummary";
import { stockData } from "../ModalWindow/dataQuizzes";
import { correctAnswers } from "../ModalWindow/dataCorrectAnswers";
import internet from "../images/icons/internet.png";
import packet from "../images/icons/packet.png";
import wifi from "../images/icons/wifi.png";
import builder from "../images/icons/builder.png";
import gateway from "../images/icons/gateway.png";
import backarrow from "../images/icons/left-arrow.png";
import summary from "../images/icons/summary.png";
import question from "../images/icons/question-mark.png";
import lightbulb from "../images/icons/light-bulb.png";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

function Sidebar({
  setGame,
  showLandingPage,
  setOpenEndGame,
  setOpenInform,
  setAlertMessage,
}) {
  let quizzModalWindows = [];
  let summaryModalWindows = [];
  let correctAnswersModalWindows = [];
  let countOfCorrectAnswers = correctAnswers.length;
  let countOfQuizzes = stockData.length;
  for (let i = 0; i < countOfQuizzes; i++) {
    // create modal windows for quizzes
    quizzModalWindows.push(
      <ModalWindowTemplate
        setGame={setGame}
        ID={i}
        content={
          <QuizzTemplate
            setGame={setGame}
            quizzID={i}
            modalWindowID={i}
            setAlertMessage={setAlertMessage}
            setOpenInform={setOpenInform}
            setOpenEndGame={setOpenEndGame}
          />
        }
      />
    );
  }
  for (let i = 0; i < 4; i++) {
    // create modal windows for summary texts
    quizzModalWindows.push(
      <ModalWindowTemplate
        setGame={setGame}
        ID={i + countOfQuizzes}
        content={
          <SummaryTemplate summaryID={i} modalWindowID={i + countOfQuizzes} />
        }
      />
    );
  }
  for (let i = 0; i < countOfCorrectAnswers; i++) {
    //create modal windows for answers
    correctAnswersModalWindows.push(
      <ModalWindowTemplate
        setGame={setGame}
        ID={i + countOfQuizzes + 4}
        content={correctAnswers[i].content}
      />
    );
  }

  return (
    <>
      {quizzModalWindows}
      {summaryModalWindows}
      {correctAnswersModalWindows}
      <Navbar>
        <NavItem>
          <DropdownMenu showLandingPage={showLandingPage} setGame={setGame} />
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

function DropdownMenu({ showLandingPage, setGame }) {
  const [activeMenu, setActiveMenu] = useState("custom-main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  let countOfQuizzes = stockData.length;
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

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
        onEnter={calcHeight}
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
          <div onClick={() => setGame("buildNetwork")}>
            <DropdownItem leftIcon={builder}>POSTAV SÍŤ</DropdownItem>
          </div>
          <div id="downitem" onClick={() => showLandingPage(false)}>
            <DropdownItem leftIcon={backarrow}>INTERAKTIVNÍ MÓD</DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "internet-z-dalky"}
        timeout={500}
        classNames="custom-menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="custom-menu">
          <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
            <h2>INTERNET Z DÁLKY</h2>
          </DropdownItem>
          <div
            className="custom-menu-item-div"
            onClick={() => openModal(countOfQuizzes)}
          >
            <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(0)}>
            <DropdownItem leftIcon={lightbulb}>SERVER</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(1)}>
            <DropdownItem leftIcon={lightbulb}>KLIENT</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(2)}>
            <DropdownItem leftIcon={lightbulb}>
              KOMUNIKACE <br /> KLIENT-SERVER
            </DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(3)}>
            <DropdownItem leftIcon={lightbulb}>PUTOVÁNÍ INFORMACÍ</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(4)}>
            <DropdownItem leftIcon={lightbulb}>CESTA</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(5)}>
            <DropdownItem leftIcon={lightbulb}>CHYTRÁ KŘIŽOVATKA</DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "klienti-a-pakety"}
        timeout={500}
        classNames="custom-menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="custom-menu">
          <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
            <h2>KLIENTI A PAKETY</h2>
          </DropdownItem>
          <div
            className="custom-menu-item-div"
            onClick={() => openModal(countOfQuizzes + 1)}
          >
            <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(6)}>
            <DropdownItem leftIcon={question}>POSÍLÁNÍ DAT</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(7)}>
            <DropdownItem leftIcon={lightbulb}>PAKET</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(8)}>
            <DropdownItem leftIcon={question}>VYTVOŘ PAKET</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(9)}>
            <DropdownItem leftIcon={question}>NAJDI PAKET</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(10)}>
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
        onEnter={calcHeight}
      >
        <div className="custom-menu">
          <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
            <h2>TYPY PŘIPOJENÍ</h2>
          </DropdownItem>
          <div
            className="custom-menu-item-div"
            onClick={() => openModal(countOfQuizzes + 2)}
          >
            <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(11)}>
            <DropdownItem leftIcon={lightbulb}>KABELY</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(12)}>
            <DropdownItem leftIcon={lightbulb}>WIFI</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(13)}>
            <DropdownItem leftIcon={lightbulb}>MOBILNÍ DATA</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(14)}>
            <DropdownItem leftIcon={lightbulb}>SATELIT</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(15)}>
            <DropdownItem leftIcon={question}>CESTA KOLEM SVĚTA</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(16)}>
            <DropdownItem leftIcon={question}>RYCHLOST</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(17)}>
            <DropdownItem leftIcon={question}>OMEZENÁ VZDÁLENOST</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(18)}>
            <DropdownItem leftIcon={question}>JAK SE PŘIPOJIT</DropdownItem>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "servery-a-krizovatky"}
        timeout={500}
        classNames="custom-menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="custom-menu">
          <DropdownItem goToMenu="custom-main" leftIcon={backarrow}>
            <h2>SERVERY A KŘIŽOVATKY</h2>
          </DropdownItem>
          <div
            className="custom-menu-item-div"
            onClick={() => openModal(countOfQuizzes + 3)}
          >
            <DropdownItem leftIcon={summary}>ÚVOD</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(19)}>
            <DropdownItem leftIcon={lightbulb}>IP ADRESA</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(20)}>
            <DropdownItem leftIcon={lightbulb}>IPV4, IPv6</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(21)}>
            <DropdownItem leftIcon={question}>NEZÁVISLÝ PAKET</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(22)}>
            <DropdownItem leftIcon={question}>NEJRYCHLEJŠÍ CESTA</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(23)}>
            <DropdownItem leftIcon={question}>
              VŠECHNY CESTY VEDOU DO ŘÍMA
            </DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(24)}>
            <DropdownItem leftIcon={question}>PROBLÉM NA CESTĚ</DropdownItem>
          </div>
          <div className="custom-menu-item-div" onClick={() => openModal(25)}>
            <DropdownItem leftIcon={question}>SESTAVENÍ ZPRÁVY</DropdownItem>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
export default Sidebar;
