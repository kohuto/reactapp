import { useState, useEffect } from "react";
import client from "../../images/nodes/klient.jpg";
import server from "../../images/nodes/server.jpg";
import web from "../../images/serverscontent/website-design.png";

function ClientServerCommunication() {
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
    }, 2000);
    const timeoutId3 = setTimeout(() => {
      setMoveRight(true);
    }, 2500);

    const timeoutId4 = setTimeout(() => {
      setShowSendRequest(false);
      setShowAnswerMessage(true);
    }, 4000);
    const timeoutId5 = setTimeout(() => {
      setShowSendAnswer(true);
    }, 5000);
    const timeoutId6 = setTimeout(() => {
      setMoveLeft(true);
    }, 5500);
    const timeoutId7 = setTimeout(() => {
      setShowAnswerMessage(false);
      setShowRequestMessage(false);
      setShowSendAnswer(false);
      setShowHappyClient(true);
    }, 7000);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(timeoutId4);
      clearTimeout(timeoutId5);
      clearTimeout(timeoutId6);
      clearTimeout(timeoutId7);
    };
  }, []);

  const firstDivStyle = {
    opacity: showRequestMessage ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
    transitionDelay: moveRight ? "1s" : "0s",
    position: "absolute",
  };

  const secondDivStyle = {
    opacity: showSendRequestComponent ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 2s ease-in-out",
    transform: moveRight ? "translateX(500px)" : "translateX(0)",
    transitionDelay: "1s",
    position: "absolute",
    top: "200px",
  };
  const thirdDivStyle = {
    opacity: showAnswerMessage ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    transitionDelay: "1s",
    position: "absolute",
    left: "500px",
  };
  const fourthDivStyle = {
    opacity: showSendAnswer ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 2s ease-in-out",
    transform: moveLeft ? "translateX(-500px)" : "translateX(0)",
    transitionDelay: "1s",
    position: "absolute",
    top: "200px",
    left: "500px",
  };
  const fithDivStyle = {
    opacity: showHappyClient ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    transitionDelay: "1s",
    position: "absolute",
  };

  return (
    <div style={{ position: "absolute", top: "50px", right: "800px" }}>
      <div style={{ position: "absolute", top: "150px", left: "500px" }}>
        <img src={client}></img>
      </div>
      <div style={{ position: "absolute", top: "150px" }}>
        <img src={server}></img>
      </div>
      <div style={firstDivStyle}>
        <p>Chtěl bych se podívat na webovku</p>
      </div>
      <div style={secondDivStyle}>
        <p>pošli mi webovku</p>
      </div>
      <div style={thirdDivStyle}>
        <p>ok, pošlu ti webovku</p>
      </div>
      <div style={fourthDivStyle}>
        <img src={web} style={{ width: "50px", height: "50px" }}></img>
      </div>
      <div style={fithDivStyle}>
        <p>juchů, to je moje webovka</p>
      </div>
    </div>
  );
}

export default ClientServerCommunication;
