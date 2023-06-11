import { useState } from "react";
import DefaultPackets from "../../../Packet";
import profileImageMan from "../../../../images/profile/man.png";
import profileImageWoman from "../../../../images/profile/woman.png";
import gallery from "../../../../images/icons/image-gallery.png";
import plus from "../../../../images/icons/plusmess.png";
import gif from "../../../../images/icons/gif.png";
import { packetsFromClientToServer } from "../../../../Data/Packets/dataIntoPakcetsClientServer";
import { packetsFromServerToClient } from "../../../../Data/Packets/dataIntoPacketsServerClient";
import "./style.css";
import BasicModal from "../../../DialogWindow/basicModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import SimpleFlow from "../../Flow/simpleFlow";
import { edgesData } from "../../../../Data/Flow/edges/edges";
import { clientsZoom2Data } from "../../../../Data/Flow/client/clientsZoom2";
import { serversZoom2Data } from "../../../../Data/Flow/server/serverZoom2";
import { gatewaysZoom2Data } from "../../../../Data/Flow/gateway/gatewayZoom2";

function DataIntoPackets({ info }) {
  const defaultNodes = [
    ...clientsZoom2Data,
    ...serversZoom2Data,
    ...gatewaysZoom2Data,
  ];

  const [messages, setMessages] = useState([
    { text: "Ahoj Xavi! Jak se dneska daří?", sender: "other" },
    {
      text: "Ahoj Jeronýme!",
      sender: "user",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(true);
  const [showPackets1, setShowPackets1] = useState(false);
  const [showPackets2, setShowPackets2] = useState(false);
  const [isSwapedSenders, setIsSwapedSenders] = useState(false);
  const [showPacketsCreatedMessageBox, setShowPacketsCreatedMessageBox] =
    useState(false);
  const [showPacketsInServerMessageBox, setShowPacketsInServerMessageBox] =
    useState(false);
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [isErrorInput, setIsErrorInput] = useState(false);
  const longMessageErrorMessage = "napis zpravu, ktera ma max 24 znaku.";
  const firstInform =
    "Zpráva se rozložila na pakety. Každý paket, má určitou velikost. Může se stát, že poslední paket, který obsahuje zbytek dat, nemá stejnou velikost jako předchozí pakety. Je to proto, že poslední část zprávy je menší než velikost běžného paketu. To ale nevadí, paket dorazí do cíle stejně jako ostatní pakety. Zavři nyní toto okno a sleduj, jak se v mapě objeví pakety. Na pakety můžeš kliknout a podívat se, co je uvnitř.";
  const secondInform =
    "Zpráva dorazila v paketech do messenger serveru. Z předchozí kapitoly už víme, že klient posílá zprávy na server. Jiní klienti si pak zprávu můžou od serveru vyžádat. Když si Anička bude chtít zobrazit zprávu, pošle požadavek serveru a ten ji zprávu pošle. Zavři nyní okno a podívej, jak zpráva dorazí ze serveru k Aničce. Opět se můžeš podívat dovnitř paketů.";
  let packets1 = packetsFromClientToServer;
  let packets2 = packetsFromServerToClient;

  function swapSenders() {
    setIsSwapedSenders(true);
    setMessages(
      messages.map((message) => {
        if (message.sender === "user") {
          return { ...message, sender: "other" };
        } else if (message.sender === "other") {
          return { ...message, sender: "user" };
        } else {
          return message;
        }
      })
    );
  }

  const endPackets1 = () => {
    setTimeout(() => {
      setShowPackets1(false);
      setShowPacketsInServerMessageBox(true);
    }, 19000);
  };

  const endPackets2 = () => {
    setTimeout(() => {
      setShowPackets2(false);
      setShowPacketsInServerMessageBox(true);
      swapSenders();
      setShowChat(true);
    }, 18000);
  };

  const handleSend = () => {
    if (newMessage.length <= 24 && newMessage.length > 0) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
      setShowChat(false);
      setShowPacketsCreatedMessageBox(true);

      setContent1(newMessage.substring(0, 8));
      if (newMessage.length > 8) setContent2(newMessage.substring(8, 16));
      if (newMessage.length > 16);
      setContent3(newMessage.substring(16, 24));
      packets1[0].content = content1;
      packets1[1].content = content2;
      packets1[2].content = content3;
      packets2[0].content = content1;
      packets2[1].content = content2;
      packets2[2].content = content3;
    } else {
      setIsErrorInput(true);
    }
  };

  const hidePacketsCreatedMessageContainer = () => {
    setShowPacketsCreatedMessageBox(false);
    setShowPackets1(true);
    endPackets1();
  };
  const hidePacketsInServerMessageContainer = () => {
    setShowPacketsInServerMessageBox(false);
    setShowPackets2(true);
    endPackets2();
  };

  if (showPacketsCreatedMessageBox) {
    return (
      <>
        <div className="data-into-packets-container-bg">
          <div className="data-into-packets-container">
            <span
              className="close data-into-packet"
              onClick={hidePacketsCreatedMessageContainer}
            >
              &times;
            </span>
            <p>{firstInform}</p>
            <div>
              {[
                ...Array(
                  Math.ceil(messages[messages.length - 1].text.length / 8)
                ),
              ].map((_, index) => (
                <div key={index} className="new-message-box">
                  {messages[messages.length - 1].text.substring(
                    index * 8,
                    (index + 1) * 8
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else if (showChat) {
    return (
      <>
        {isErrorInput && (
          <AlertDialog
            closeAction={() => setIsErrorInput(false)}
            content={longMessageErrorMessage}
          />
        )}
        <div className={`chat-container ${showChat ? "" : "hidden"}`}>
          <div className="chat-header">
            <img
              className="profile-image"
              src={isSwapedSenders ? profileImageWoman : profileImageMan}
            />
            <h6>{isSwapedSenders ? "Xavier" : "Jeroným"}</h6>
          </div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user-message" : "other-message"
              }`}
            >
              {message.text}
            </div>
          ))}
          <div className="input-container">
            <img src={plus} alt="" />
            <img src={gif} alt="" />
            <img src={gallery} alt="" />
            <input
              type="text"
              placeholder="Aa"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={() => {
                handleSend();
              }}
            ></button>
          </div>
          {!isSwapedSenders && <BasicModal content={info.content} />}
        </div>
      </>
    );
  } else if (showPackets1) {
    return (
      <>
        <SimpleFlow nodes={defaultNodes} edges={edgesData} />
        {content3.length > 0 ? (
          <DefaultPackets packetsData={packets1} repeat={0} marginleft={0} />
        ) : content2.length > 0 ? (
          <DefaultPackets
            packetsData={packets1.slice(0, 2)}
            repeat={0}
            marginleft={0}
          />
        ) : (
          <DefaultPackets
            packetsData={packets1.slice(0, 1)}
            repeat={0}
            marginleft={0}
          />
        )}
      </>
    );
  } else if (showPackets2) {
    return (
      <>
        <SimpleFlow nodes={defaultNodes} edges={edgesData} />
        {content3.length > 0 ? (
          <DefaultPackets packetsData={packets2} repeat={0} marginleft={0} />
        ) : content2.length > 0 ? (
          <DefaultPackets
            packetsData={packets2.slice(0, 2)}
            repeat={0}
            marginleft={0}
          />
        ) : (
          <DefaultPackets
            packetsData={packets2.slice(0, 1)}
            repeat={0}
            marginleft={0}
          />
        )}
      </>
    );
  } else if (showPacketsInServerMessageBox) {
    return (
      <>
        <div className="data-into-packets-container-bg">
          <div className="data-into-packets-container">
            <span
              className="close data-into-packet"
              onClick={hidePacketsInServerMessageContainer}
            >
              &times;
            </span>
            <p>{secondInform}adresu</p>
          </div>
        </div>
      </>
    );
  }
}

export default DataIntoPackets;
