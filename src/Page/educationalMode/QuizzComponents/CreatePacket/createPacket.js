import { useState } from "react";
import CloseOpen from "../CloseOpenWindow/closeOpenWindow";
import Button from "@mui/material/Button";
import Slideshow from "./slideShow";
import "./style.css";

/**
 * Component that allows the user to create and validate packets of a message
 * @param {function} setOpenDialog - A function that sets the open state of a dialog
 */
function CreatePacketComponent({ setOpenDialog }) {
  const messengerServers = ["195.113.76.22", "192.168.1.1"];
  const correctOrder = ["1", "2", "3"];
  const correctSenderIP = "2620:0:862:ed1a::1";
  const firstPartMessage = "AHOJ XAV";
  const secondPartMessage = "I, JAK S";
  const thirdPartMessage = "E MÁŠ?";
  const [id, setId] = useState([]);
  const [order, setOrder] = useState([]);
  const [recipientIP, setRecipientIP] = useState([]);
  const [senderIP, setSenderIP] = useState([]);
  const [content, setContent] = useState([]);
  const messageToSend = "Pošli zprávu: AHOJ XAVI, JAK SE MÁŠ?";
  const noFilledInputMessage = "něco není vyplněné";
  const incorrectIdMessage =
    "Špatné vyplněné ID. Pakety patří jedné zprávě, proto musí být ID všude stejné.";
  const incorrectOrderMessage =
    "Špatně vyplněné pořadí. Máš tři pakety, takže čísla v pořadí musí být 1, 2 a 3";
  const incorrectSenderMessage = "špatně vyplněný odesílatel";
  const incorrectRecipient = "příjemce musí být messenger server";
  const incorrectFirstContentMessage = "špatně obsah 1. paketu";
  const incorrectSecondContentMessage = "špatně obsah 2. paketu";
  const incorrectThirdContentMessage = "špatně obsah 3. paketu";
  const finalMessage =
    "Perfektní! Nezapomeň, že paket přenáší část odeslané zprávy. Navíc je v něm uložená adresa příjemce a odesílatele a také ID a pořadí, aby mohla být zpráva v cíli zpětně sestavená.";

  /**
   * Handles the submit event of the form and validates the input data
   */
  const handleSubmit = () => {
    const nonEmptyInputs =
      id.every((item) => typeof item.length > 0) &&
      recipientIP.every((item) => typeof item.length > 0) &&
      senderIP.every((item) => item.length > 0) &&
      content.every((item) => item.length > 0);
    if (
      id.length === 3 &&
      order.length === 3 &&
      recipientIP.length === 3 &&
      senderIP.length === 3 &&
      content.length === 3 &&
      nonEmptyInputs
    ) {
      if (id[0] === id[1] && id[1] === id[2]) {
        if (
          order.every((order) => correctOrder.includes(order)) &&
          order[0] !== order[1] &&
          order[1] !== order[2] &&
          order[0] !== order[2]
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
                    setOpenDialog(true, finalMessage, "noGame");
                  } else {
                    setOpenDialog(true, incorrectThirdContentMessage);
                  }
                } else {
                  setOpenDialog(true, incorrectSecondContentMessage);
                }
              } else {
                setOpenDialog(true, incorrectFirstContentMessage);
              }
            } else {
              setOpenDialog(true, incorrectRecipient);
            }
          } else {
            setOpenDialog(true, incorrectSenderMessage);
          }
        } else {
          setOpenDialog(true, incorrectOrderMessage);
        }
      } else {
        setOpenDialog(true, incorrectIdMessage);
      }
    } else {
      setOpenDialog(true, noFilledInputMessage);
    }
  };

  return (
    <CloseOpen
      content={
        <div className="create-packets-form-container">
          <p>{messageToSend}</p>

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
  );
}

export default CreatePacketComponent;
