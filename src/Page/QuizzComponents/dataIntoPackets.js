import React, { useState } from "react";
import DefaultPackets from "../../Packet";

function DataIntoPackets({ setGame }) {
  const [messages, setMessages] = useState([
    { text: "Hey there! How are you doing today?", sender: "other" },
    {
      text: "I'm doing great, thanks for asking! How about you?",
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
              Zpr??va se rozlo??ila na pakety. Ka??d?? paket, m?? ur??itou velikost.
              M????e se st??t, ??e posledn?? paket, kter?? obsahuje zbytek dat, nem??
              stejnou velikost jako p??edchoz?? pakety. Je to proto, ??e posledn??
              ????st zpr??vy je men???? ne?? velikost b????n??ho paketu. To ale nevad??,
              paket doraz?? do c??le stejn?? jako ostatn?? pakety. Zav??i nyn?? toto
              okno a sleduj, jak se v map?? objev?? pakety. Na pakety m????e??
              kliknout a pod??vat se, co je uvnit??.
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
              Zpr??va dorazila v paketech do messenger serveru. Z p??edchoz??
              kapitoly u?? v??me, ??e klient pos??l?? zpr??vy na server. Jin?? klienti
              si pak zpr??vu m????ou od serveru vy????dat. Kdy?? si Ani??ka bude cht??t
              zobrazit zpr??vu, po??le po??adavek serveru a ten ji zpr??vu po??le.
              Zav??i nyn?? okno a pod??vej, jak zpr??va doraz?? ze serveru k Ani??ce.
              Op??t se m????e?? pod??vat dovnit?? paket??.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default DataIntoPackets;
