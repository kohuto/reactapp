import { useState } from "react";
import DefaultPackets from "../../Packet";
import profileImageMan from "../../../images/profile/man.png";
import profileImageWoman from "../../../images/profile/woman.png";
import gallery from "../../../images/icons/image-gallery.png";
import plus from "../../../images/icons/plusmess.png";
import gif from "../../../images/icons/gif.png";

function DataIntoPackets({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
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

  var packets1 = [
    {
      id: 180,
      path: [
        "77.75.79.138",
        "147.32.3.202",
        "217.31.205.50",
        "82.208.6.9",
        "57.200.0.1",
        "208.67.222.222",
        "2002:c0a8:101::1",
        "195.113.76.22",
      ],
      content: content1,
      from: "77.75.79.138",
      to: "195.113.76.22",
      speed: 40,
    },
    {
      id: 181,
      path: [
        "77.75.79.138",
        "147.32.3.202",
        "91.198.174.192",
        "82.208.6.9",
        "208.67.222.222",
        "222.173.190.239",
        "2002:c0a8:101::1",
        "195.113.76.22",
      ],
      content: content2,
      from: "77.75.79.138",
      to: "195.113.76.22",
      speed: 40,
    },
    {
      id: 182,
      path: [
        "77.75.79.138",
        "147.32.3.202",
        "217.31.205.50",
        "193.85.9.76",
        "82.208.6.9",
        "57.200.0.1",
        "2002:c0a8:101::1",
        "195.113.76.22",
      ],
      content: content3,
      from: "77.75.79.138",
      to: "195.113.76.22",
      speed: 40,
    },
  ];
  var packets2 = [
    {
      id: 10,
      path: [
        "195.113.76.22",
        "2002:c0a8:101::1",
        "57.200.0.1",
        "82.208.6.9",
        "208.67.222.222",
        "222.173.190.239",
        "195.113.27.221",
      ],
      content: content1,
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 40,
    },
    {
      id: 11,
      path: [
        "195.113.76.22",
        "2002:c0a8:101::1",
        "208.67.222.222",
        "57.200.0.1",
        "2002:c0a8:101::1",
        "222.173.190.239",
        "195.113.27.221",
      ],
      content: content2,
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 40,
    },
    {
      id: 12,
      path: [
        "195.113.76.22",
        "2002:c0a8:101::1",
        "57.200.0.1",
        "208.67.222.222",
        "2002:c0a8:101::1",
        "222.173.190.239",
        "195.113.27.221",
      ],
      content: content3,
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 40,
    },
  ];

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
    } else {
      setAlertMessage("napis zpravu, ktera ma max 24 znaku.");
      setGameAfterModalClose(game);
      setOpenModal(true);
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

  function handleClose() {
    setAlertMessage(
      "Perfektní! Právě jsi viděl, že se zpráva před odesláním rozloží na malé části, kterým říkáme pakety. Každá informace (fotka, webová stránka, video), je před odesláním rozložená a posílá se po částech."
    );
    setGameAfterModalClose("noGame");
    setOpenModal(true);
  }

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
        <div className="chat-header">
          <span className="close data-into-packet" onClick={handleClose}>
            &times;
          </span>
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
              if (!isSwapedSenders) {
                handleSend();
              }
            }}
          ></button>
        </div>
      </div>
    );
  } else if (showPackets1) {
    return content3.length > 0 ? (
      <DefaultPackets packetsData={packets1} repeat={0} marginleft={20} />
    ) : content2.length > 0 ? (
      <DefaultPackets
        packetsData={packets1.slice(0, 2)}
        repeat={0}
        marginleft={20}
      />
    ) : (
      <DefaultPackets
        packetsData={packets1.slice(0, 1)}
        repeat={0}
        marginleft={20}
      />
    );
  } else if (showPackets2) {
    return content3.length > 0 ? (
      <DefaultPackets packetsData={packets2} repeat={0} marginleft={20} />
    ) : content2.length > 0 ? (
      <DefaultPackets
        packetsData={packets2.slice(0, 2)}
        repeat={0}
        marginleft={20}
      />
    ) : (
      <DefaultPackets
        packetsData={packets2.slice(0, 1)}
        repeat={0}
        marginleft={20}
      />
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
