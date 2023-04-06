import { useState, useEffect } from "react";
import client from "../../../../images/nodes/klient.jpg";
import server from "../../../../images/nodes/server-messenger.jpg";
import web from "../../../../images/serverscontent/website-design.png";
import "./style.css";

/**
 * Component that demonstrates the process of client-server communication.
 * @param {Function} setOpenDialog - A function that opens a dialog box.
 * @returns {JSX.Element} - Returns a JSX element that renders the client-server communication demo.
 */
function ClientServerCommunication({ setOpenDialog }) {
  const [showRequestMessage, setShowRequestMessage] = useState(false);
  const [showSendRequestComponent, setShowSendRequest] = useState(false);
  const [showAnswerMessage, setShowAnswerMessage] = useState(false);
  const [showSendAnswer, setShowSendAnswer] = useState(false);
  const [showHappyClient, setShowHappyClient] = useState(false);
  const finalMessage =
    "Zpamatuj si, že klienti posílají na servery požadavky a servery posílají zpět klientům odpovědi.";

  // set up timing for showing different messages
  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setShowRequestMessage(true);
    }, 1000);

    const timeoutId2 = setTimeout(() => {
      setShowSendRequest(true);
    }, 4000);

    const timeoutId4 = setTimeout(() => {
      setShowSendRequest(false);
      setShowAnswerMessage(true);
    }, 10000);
    const timeoutId5 = setTimeout(() => {
      setShowSendAnswer(true);
    }, 13000);

    const timeoutId7 = setTimeout(() => {
      setShowAnswerMessage(false);
      setShowRequestMessage(false);
      setShowSendAnswer(false);
      setShowHappyClient(true);
    }, 19000);
    const timeoutId8 = setTimeout(() => {
      setOpenDialog(true, finalMessage, "noGame");
    }, 22000);

    // clear timeouts when the component unmounts
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId4);
      clearTimeout(timeoutId5);
      clearTimeout(timeoutId7);
      clearTimeout(timeoutId8);
    };
  }, []);

  return (
    <div>
      <div className="csc-client">
        <img src={client}></img>
      </div>
      <div className="csc-server">
        <img src={server}></img>
      </div>
      {showRequestMessage && (
        <div className="csc-message csc-clients-wish">
          <p>Chtěl bych se podívat na webovku</p>
        </div>
      )}
      <div
        className={`csc-message csc-request ${
          showSendRequestComponent ? "show" : ""
        }`}
      >
        <p>pošli mi webovku</p>
      </div>
      <div
        className={`csc-message csc-answer ${showAnswerMessage ? "show" : ""}`}
      >
        <p>ok, pošlu ti webovku</p>
      </div>
      <div
        className={`csc-message csc-send-answer ${
          showSendAnswer ? "show" : ""
        }`}
      >
        <img src={web}></img>
      </div>
      <div
        className={`csc-message csc-happy-client ${
          showHappyClient ? "show" : ""
        }`}
      >
        <p>juchů, to je moje webovka</p>
      </div>
    </div>
  );
}

export default ClientServerCommunication;
