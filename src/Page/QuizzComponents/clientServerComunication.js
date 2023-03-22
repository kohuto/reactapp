import { useState, useEffect } from "react";
import client from "../../images/nodes/klient.jpg";
import server from "../../images/nodes/server-messenger.jpg";
import web from "../../images/serverscontent/website-design.png";

function ClientServerCommunication({
  setAlertMessage,
  setOpenInform,
  setOpenEndGame,
}) {
  const [showRequestMessage, setShowRequestMessage] = useState(false);
  const [showSendRequestComponent, setShowSendRequest] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [showAnswerMessage, setShowAnswerMessage] = useState(false);
  const [showSendAnswer, setShowSendAnswer] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [showHappyClient, setShowHappyClient] = useState(false);

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setShowRequestMessage(true);
    }, 1000);

    const timeoutId2 = setTimeout(() => {
      setShowSendRequest(true);
    }, 4000);
    const timeoutId3 = setTimeout(() => {
      setMoveRight(true);
    }, 5500);

    const timeoutId4 = setTimeout(() => {
      setShowSendRequest(false);
      setShowAnswerMessage(true);
    }, 10000);
    const timeoutId5 = setTimeout(() => {
      setShowSendAnswer(true);
    }, 13000);
    const timeoutId6 = setTimeout(() => {
      setMoveLeft(true);
    }, 14500);
    const timeoutId7 = setTimeout(() => {
      setShowAnswerMessage(false);
      setShowRequestMessage(false);
      setShowSendAnswer(false);
      setShowHappyClient(true);
    }, 19000);
    const timeoutId8 = setTimeout(() => {
      setAlertMessage(
        "Zpamatuj si, že klienti posílají na servery požadavky a servery posílají zpět klientům odpovědi."
      );
      setOpenEndGame(true);
    }, 22000);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(timeoutId4);
      clearTimeout(timeoutId5);
      clearTimeout(timeoutId6);
      clearTimeout(timeoutId7);
      clearTimeout(timeoutId8);
    };
  }, []);

  const firstDivStyle = {
    opacity: showRequestMessage ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
    position: "absolute",
    top: "37vh",
    left: "32vw",
  };

  const secondDivStyle = {
    opacity: showSendRequestComponent ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 4s ease-in-out",
    transform: moveRight ? "translateX(40vw)" : "translateX(0)",
    position: "absolute",
    top: "50vh",
    left: "35vw",
  };
  const thirdDivStyle = {
    opacity: showAnswerMessage ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    position: "absolute",
    top: "37vh",
    left: "73vw",
  };
  const fourthDivStyle = {
    opacity: showSendAnswer ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 4s ease-in-out",
    transform: moveLeft ? "translateX(-40vw)" : "translateX(0)",
    position: "absolute",
    top: "50vh",
    left: "75vw",
  };

  const fithDivStyle = {
    opacity: showHappyClient ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    position: "absolute",
    top: "37vh",
    left: "32vw",
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "50vh", left: "35vw" }}>
        <img src={client}></img>
      </div>
      <div style={{ position: "absolute", top: "50vh", left: "75vw" }}>
        <img src={server}></img>
      </div>
      <div
        className="client-server-communication-message"
        style={firstDivStyle}
      >
        <p>Chtěl bych se podívat na webovku</p>
      </div>
      <div
        className="client-server-communication-message"
        style={secondDivStyle}
      >
        <p>pošli mi webovku</p>
      </div>
      <div
        className="client-server-communication-message"
        style={thirdDivStyle}
      >
        <p>ok, pošlu ti webovku</p>
      </div>
      <div style={fourthDivStyle}>
        <img src={web} style={{ width: "50px", height: "50px" }}></img>
      </div>
      <div className="client-server-communication-message" style={fithDivStyle}>
        <p>juchů, to je moje webovka</p>
      </div>
    </div>
  );
}

export default ClientServerCommunication;
