import React, { useState } from "react";
import "./Components.css";
import "react-slideshow-image/dist/styles.css";
import CloseOpen from "./CloseOpenWindow/closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function CreatePacketComponent({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  const messengerServers = ["195.113.76.22", "192.168.1.1"];
  const corerctOrder = ["1", "2", "3"];
  const correctSenderIP = "2620:0:862:ed1a::1";
  const firstPartMessage = "AHOJ XAV";
  const secondPartMessage = "I, JAK S";
  const thirdPartMessage = "E MÁŠ?";
  const [id, setId] = useState([]);
  const [order, setOrder] = useState([]);
  const [recipientIP, setRecipientIP] = useState([]);
  const [senderIP, setSenderIP] = useState([]);
  const [content, setContent] = useState([]);

  const handleSubmit = () => {
    setGameAfterModalClose(game);
    const isAllItemsStringsWithLengthGreaterThanZero =
      id.every((item) => typeof item === "string" && item.length > 0) &&
      recipientIP.every(
        (item) => typeof item === "string" && item.length > 0
      ) &&
      senderIP.every((item) => typeof item === "string" && item.length > 0) &&
      content.every((item) => typeof item === "string" && item.length > 0);
    if (
      id.length === 3 &&
      order.length === 3 &&
      recipientIP.length === 3 &&
      senderIP.length === 3 &&
      content.length === 3 &&
      isAllItemsStringsWithLengthGreaterThanZero
    ) {
      if (id[0] === id[1] && id[1] === id[2]) {
        if (
          order.every((order) => corerctOrder.includes(order)) &&
          order[0] != order[1] &&
          order[1] != order[2] &&
          order[0] != order[2]
        ) {
          if (
            senderIP.every((item) => item === senderIP[0]) &&
            senderIP[0] === correctSenderIP
          ) {
            if (
              recipientIP.every((item) => item === recipientIP[0]) &&
              messengerServers.includes(recipientIP[0])
            ) {
              if (
                (order[0] === "1" && content[0] === firstPartMessage) ||
                (order[0] === "2" && content[0] === secondPartMessage) ||
                (order[0] === "3" && content[0] === thirdPartMessage)
              ) {
                if (
                  (order[1] === "1" && content[1] === firstPartMessage) ||
                  (order[1] === "2" && content[1] === secondPartMessage) ||
                  (order[1] === "3" && content[1] === thirdPartMessage)
                ) {
                  if (
                    (order[2] === "1" && content[2] === firstPartMessage) ||
                    (order[2] === "2" && content[2] === secondPartMessage) ||
                    (order[2] === "3" && content[2] === thirdPartMessage)
                  ) {
                    setAlertMessage(
                      "Perfektní! Nezapomeň, že paket přenáší část odeslané zprávy. Navíc je v něm uložená adresa příjemce a odesílatele a také ID a pořadí, aby mohla být zpráva v cíli zpětně sestavená."
                    );
                    setGameAfterModalClose("noGame");
                  } else {
                    setAlertMessage("špatně obsah 3. paketu");
                  }
                } else {
                  setAlertMessage("špatně obsah 2. paketu");
                }
              } else {
                setAlertMessage("špatně obsah 1. paketu");
              }
            } else {
              setAlertMessage("příjemce musí být messenger server");
            }
          } else {
            setAlertMessage("špatně odesílatel");
          }
        } else {
          setAlertMessage(
            "Špatně vyplněné pořadí. Máš tři pakety, takže čísla v pořadí musí být 1, 2 a 3"
          );
        }
      } else {
        setAlertMessage(
          "Špatné vyplněné ID. Pakety patří jedné zprávě, proto musí být ID všude stejné."
        );
      }
    } else {
      setAlertMessage("něco není vyplněné");
    }
    setOpenModal(true);
  };

  return (
    <>
      <CloseOpen
        content={
          <div className="create-packets-form-container">
            <p>Pošli zprávu: AHOJ XAVI, JAK SE MÁŠ?</p>

            <Slideshow
              id={id}
              setId={setId}
              order={order}
              setOrder={setOrder}
              senderIP={senderIP}
              setSenderIP={setSenderIP}
              recipientIP={recipientIP}
              setRecipientIP={setRecipientIP}
              content={content}
              setContent={setContent}
            />

            <Button
              variant="outlined"
              onClick={handleSubmit}
              className="check-button"
            >
              ZKONTROLUJ
            </Button>
          </div>
        }
      />
    </>
  );
}

function InsidePacket(props) {
  return (
    <>
      <div className="">
        <TextField
          id="standard-basic"
          label="ID paketu"
          variant="standard"
          value={props.id[props.number]}
          onChange={(e) =>
            props.setId((prevId) => {
              const newId = [...prevId];
              newId[props.number] = e.target.value;
              return newId;
            })
          }
        />
        <br />
        <TextField
          id="standard-basic"
          label="Pořadí"
          variant="standard"
          value={props.order[props.number]}
          onChange={(e) =>
            props.setOrder((prevOrder) => {
              const newOrder = [...prevOrder];
              newOrder[props.number] = e.target.value;
              return newOrder;
            })
          }
        />
        <br />
        <TextField
          id="standard-basic"
          label="Odesílatel"
          variant="standard"
          value={props.senderIP[props.number]}
          onChange={(e) =>
            props.setSenderIP((prevSenderIP) => {
              const newSenderIP = [...prevSenderIP];
              newSenderIP[props.number] = e.target.value;
              return newSenderIP;
            })
          }
        />
        <br />
        <TextField
          id="standard-basic"
          label="Příjemce"
          variant="standard"
          value={props.recipientIP[props.number]}
          onChange={(e) =>
            props.setRecipientIP((prevRecipientIP) => {
              const newRecipientIP = [...prevRecipientIP];
              newRecipientIP[props.number] = e.target.value;
              return newRecipientIP;
            })
          }
        />
        <br />
        <TextField
          id="standard-basic"
          label="Obsah paketu"
          variant="standard"
          value={props.content[props.content]}
          onChange={(e) =>
            props.setContent((prevContent) => {
              const newContent = [...prevContent];
              newContent[props.number] = e.target.value;
              return newContent;
            })
          }
        />
      </div>
    </>
  );
}

function Slideshow(props) {
  const [index, setIndex] = useState(0);

  return (
    <div className="create-packets-slideshow">
      <div
        className="create-packets-slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="create-packets-slide">
          <InsidePacket
            number={0}
            id={props.id}
            setId={props.setId}
            order={props.order}
            setOrder={props.setOrder}
            senderIP={props.senderIP}
            setSenderIP={props.setSenderIP}
            recipientIP={props.recipientIP}
            setRecipientIP={props.setRecipientIP}
            content={props.content}
            setContent={props.setContent}
          />
        </div>
        <div className="create-packets-slide">
          <InsidePacket
            number={1}
            id={props.id}
            setId={props.setId}
            order={props.order}
            setOrder={props.setOrder}
            senderIP={props.senderIP}
            setSenderIP={props.setSenderIP}
            recipientIP={props.recipientIP}
            setRecipientIP={props.setRecipientIP}
            content={props.content}
            setContent={props.setContent}
          />
        </div>
        <div className="create-packets-slide">
          <InsidePacket
            number={2}
            id={props.id}
            setId={props.setId}
            order={props.order}
            setOrder={props.setOrder}
            senderIP={props.senderIP}
            setSenderIP={props.setSenderIP}
            recipientIP={props.recipientIP}
            setRecipientIP={props.setRecipientIP}
            content={props.content}
            setContent={props.setContent}
          />
        </div>
      </div>

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group small"
        className="create-packet-buttons"
        size="small"
      >
        <Button
          onClick={() => {
            setIndex(0);
          }}
        >
          One
        </Button>
        <Button
          onClick={() => {
            setIndex(1);
          }}
        >
          Two
        </Button>
        <Button
          onClick={() => {
            setIndex(2);
          }}
        >
          Three
        </Button>
      </ButtonGroup>
    </div>
  );
}
export default CreatePacketComponent;
