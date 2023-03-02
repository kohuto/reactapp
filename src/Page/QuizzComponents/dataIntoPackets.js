import React, { useState } from "react";
import DefaultPackets from "../../Packet";

function DataIntoPackets({ setGame }) {
  const [messages, setMessages] = useState([
    { text: "Ahoj Pepo! Jak se dneska daří?", sender: "other" },
    {
      text: "Ahoj Aničko!",
      sender: "user",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(true);
  const [showPackets, setShowPackets] = useState(false);
  const [showPacketsCreatedMessageBox, setShowPacketsCreatedMessageBox] =
    useState(false);
  const [showPacketsInServerMessageBox, setShowPacketsInServerMessageBox] =
    useState(false);
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");

  var packets = [
    {
      id: 180,
      path: [
        "195.113.76.22",
        "2002:c0a8:101::1",
        "217.31.205.50",
        "193.85.9.76",
        "195.113.27.221",
      ],
      content: content1,
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 50,
    },
    {
      id: 181,
      path: [
        "172.16.0.1",
        "2001:1488:0:3::2",
        "2001:718:1202:240::201",
        "57.200.0.1",
        "193.85.9.76",
        "82.208.6.9",
        "208.67.222.222",
        "45.87.28.93",
        "147.32.3.202",
        "195.113.89.35",
      ],
      content: content2,
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 50,
    },
    {
      id: 182,
      path: [
        "2620:0:862:ed1a::1",
        "91.198.174.192",
        "208.67.222.222",
        "45.87.28.93",
        "222.173.190.239",
        "192.168.1.1",
      ],
      content: content3,
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 50,
    },
  ];

  function swapSenders() {
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
      setShowPackets(false);
      setShowPacketsInServerMessageBox(true);
    }, 5000);
  };

  const endPackets2 = () => {
    setTimeout(() => {
      setShowPackets(false);
      setShowPacketsInServerMessageBox(true);
      swapSenders();
      setShowChat(true);
    }, 5000);
  };

  const handleSend = () => {
    if (newMessage.length <= 32) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
      setShowChat(false);
      setShowPacketsCreatedMessageBox(true);

      setContent1(newMessage.substring(0, 8));
    }
  };

  const hidePacketsCreatedMessageContainer = () => {
    setShowPacketsCreatedMessageBox(false);
    setShowPackets(true);
    endPackets1();
  };
  const hidePacketsInServerMessageContainer = () => {
    setShowPacketsInServerMessageBox(false);
    setShowPackets(true);
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
            <p>
              Zpráva se rozložila na pakety. Každý paket, má určitou velikost.
              Může se stát, že poslední paket, který obsahuje zbytek dat, nemá
              stejnou velikost jako předchozí pakety. Je to proto, že poslední
              část zprávy je menší než velikost běžného paketu. To ale nevadí,
              paket dorazí do cíle stejně jako ostatní pakety. Zavři nyní toto
              okno a sleduj, jak se v mapě objeví pakety. Na pakety můžeš
              kliknout a podívat se, co je uvnitř.
            </p>
            <div>
              {[
                ...Array(
                  Math.ceil(messages[messages.length - 1].text.length / 8)
                ),
              ].map((_, index) => (
                <div
                  key={index}
                  className="new-message-box"
                  style={{ marginRight: 10, display: "inline-block" }}
                >
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
      <div className={`chat-container ${showChat ? "" : "hidden"}`}>
        <span className="close data-into-packet" onClick={setGame}>
          &times;
        </span>
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
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    );
  } else if (showPackets) {
    return <DefaultPackets packetsData={packets} />;
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
            <p>
              Zpráva dorazila v paketech do messenger serveru. Z předchozí
              kapitoly už víme, že klient posílá zprávy na server. Jiní klienti
              si pak zprávu můžou od serveru vyžádat. Když si Anička bude chtít
              zobrazit zprávu, pošle požadavek serveru a ten ji zprávu pošle.
              Zavři nyní okno a podívej, jak zpráva dorazí ze serveru k Aničce.
              Opět se můžeš podívat dovnitř paketů.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default DataIntoPackets;
