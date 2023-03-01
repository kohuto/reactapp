import "reactflow/dist/style.css";
import "./Sidebar.css";
import ModalWindowTemplate from "../ModalWindow/templateModalWindow";
import QuizzTemplate from "../ModalWindow/templateQuizz";
import SummaryTemplate from "../ModalWindow/templateSummary";
import { stockData } from "../ModalWindow/dataQuizzes";
import { correctAnswers } from "../ModalWindow/dataCorrectAnswers";
import { ReactComponent as CogIcon } from "../images/icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../images/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../images/icons/bolt.svg";
import internet from "../images/icons/internet.png";
import packet from "../images/icons/packet.png";
import wifi from "../images/icons/wifi.png";
import builder from "../images/icons/builder.png";
import gateway from "../images/icons/gateway.png";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

function Sidebar({ setGame, showLandingPage }) {
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
          <QuizzTemplate setGame={setGame} quizzID={i} modalWindowID={i} />
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
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return <li className="nav-item">{props.children}</li>;
}

function DropdownMenu({ showLandingPage, setGame }) {
  const [activeMenu, setActiveMenu] = useState("main");
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
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">
          <img src={props.leftIcon} alt="" />
        </span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
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
          <div id="downitem" onClick={() => showLandingPage(true)}>
            <DropdownItem leftIcon={<ArrowIcon />}>Land Page</DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "internet-z-dalky"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>INTERNET Z DÁLKY</h2>
          </DropdownItem>
          <div
            className="menu-item-div"
            onClick={() => openModal(countOfQuizzes)}
          >
            <DropdownItem leftIcon={<BoltIcon />}>ÚVOD</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(0)}>
            <DropdownItem leftIcon={<BoltIcon />}>SERVER</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(1)}>
            <DropdownItem leftIcon={<BoltIcon />}>KLIENT</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(2)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              CHYTRÁ KŘIŽOVATKA
            </DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(3)}>
            <DropdownItem leftIcon={<BoltIcon />}>CESTA</DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "klienti-a-pakety"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>KLIENTI A PAKETY</h2>
          </DropdownItem>
          <div
            className="menu-item-div"
            onClick={() => openModal(countOfQuizzes + 1)}
          >
            <DropdownItem leftIcon={<BoltIcon />}>ÚVOD</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(4)}>
            <DropdownItem leftIcon={<BoltIcon />}>POSÍLÁNÍ DAT</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(5)}>
            <DropdownItem leftIcon={<BoltIcon />}>PAKET</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(6)}>
            <DropdownItem leftIcon={<BoltIcon />}>VYTVOŘ PAKET</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(7)}>
            <DropdownItem leftIcon={<BoltIcon />}>NAJDI PAKET</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(8)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              JAK VELKÁ BUDE ZPRÁVA
            </DropdownItem>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "typy-pripojeni"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>TYPY PŘIPOJENÍ</h2>
          </DropdownItem>
          <div
            className="menu-item-div"
            onClick={() => openModal(countOfQuizzes + 2)}
          >
            <DropdownItem leftIcon={<BoltIcon />}>ÚVOD</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(9)}>
            <DropdownItem leftIcon={<BoltIcon />}>KABELY</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(10)}>
            <DropdownItem leftIcon={<BoltIcon />}>WIFI</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(11)}>
            <DropdownItem leftIcon={<BoltIcon />}>MOBILNÍ DATA</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(12)}>
            <DropdownItem leftIcon={<BoltIcon />}>SATELIT</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(13)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              CESTA KOLEM SVĚTA
            </DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(14)}>
            <DropdownItem leftIcon={<BoltIcon />}>RYCHLOST</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(15)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              OMEZENÁ VZDÁLENOST
            </DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(16)}>
            <DropdownItem leftIcon={<BoltIcon />}>JAK SE PŘIPOJIT</DropdownItem>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "servery-a-krizovatky"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>SERVERY A KŘIŽOVATKY</h2>
          </DropdownItem>
          <div
            className="menu-item-div"
            onClick={() => openModal(countOfQuizzes + 3)}
          >
            <DropdownItem leftIcon={<BoltIcon />}>ÚVOD</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(17)}>
            <DropdownItem leftIcon={<BoltIcon />}>IP ADRESA</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(18)}>
            <DropdownItem leftIcon={<BoltIcon />}>IPV4, IPv6</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(19)}>
            <DropdownItem leftIcon={<BoltIcon />}>NEZÁVISLÝ PAKET</DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(20)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              KUDY TUDY CESTIČKA
            </DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(21)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              VŠECHNY CESTY VEDOU DO ŘÍMA
            </DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(22)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              PROBLÉM NA CESTĚ
            </DropdownItem>
          </div>
          <div className="menu-item-div" onClick={() => openModal(23)}>
            <DropdownItem leftIcon={<BoltIcon />}>
              SESTAVENÍ ZPRÁVY
            </DropdownItem>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
export default Sidebar;
