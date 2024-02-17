import { useState, useEffect } from "react";
import client from "../../../../images/nodes/notebook.svg";
import server from "../../../../images/nodes/serverwebhost.svg";
import web from "../../../../images/serverscontent/website-design.png";
import "./style.css";
import BasicModal from "../../../DialogWindow/basicModal";

function ClientServerCommunication({ info }) {
  const [showRequestMessage, setShowRequestMessage] = useState(false);
  const [showSendRequestComponent, setShowSendRequest] = useState(false);
  const [showAnswerMessage, setShowAnswerMessage] = useState(false);
  const [showSendAnswer, setShowSendAnswer] = useState(false);
  const [showHappyClient, setShowHappyClient] = useState(false);
  const [restartAnimation, setRestartAnimation] = useState(false);
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
      /* reset all and start again */
      setShowHappyClient(false);
      setRestartAnimation(!restartAnimation);
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
  }, [restartAnimation]);

  return (
    <div>
      <BasicModal content={info.content} header={info.header}/>
      <div className="csc-client">
        <img src={client}></img>
      </div>
      <div className="csc-server">
        <img src={server}></img>
      </div>
      {showRequestMessage && (
        <div className="csc-clients-wish">
        </div>
      )}
      <div
        className={`csc-request ${
          showSendRequestComponent ? "show" : ""
        }`}
      >
      </div>
      <div
        className={`csc-answer ${showAnswerMessage ? "show" : ""}`}
      >
      </div>
      <div
        className={`csc-message csc-send-answer ${
          showSendAnswer ? "show" : ""
        }`}
      >
        <img src={web}></img>
      </div>
      <div
        className={`csc-happy-client ${
          showHappyClient ? "show" : ""
        }`}
      >
      </div>
    </div>
  );
}

export default ClientServerCommunication;
