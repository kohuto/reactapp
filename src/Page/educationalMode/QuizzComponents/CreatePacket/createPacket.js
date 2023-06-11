import { useState } from "react";
import Button from "@mui/material/Button";
import "./style.css";
import BasicModal from "../../../DialogWindow/basicModal";
import InsidePacket from "./insidePacket";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import SimpleFlow from "../../Flow/simpleFlow";
import { createPacketsNodes } from "../../../../Data/Flow/createPackets";
import { createPacketsEdges } from "../../../../Data/Flow/edges/createPackets";
/**
 * Component that allows the user to create and validate packets of a message
 * @param {function} setOpenDialog - A function that sets the open state of a dialog
 */
function CreatePacketComponent({ info, setGame }) {
  const messengerServer = "195.113.76.22";
  const correctSenderIP = "214.17.55.99";
  const firstPartMessage = "AHOJ XAV";
  const secondPartMessage = "I, JAK S";
  const thirdPartMessage = "E MÁŠ?";
  const [recipientIP, setRecipientIP] = useState([]);
  const [senderIP, setSenderIP] = useState([]);
  const [content, setContent] = useState([]);
  const finalMessage =
    "Perfektní! Nezapomeň, že paket přenáší část odeslané zprávy. Navíc je v něm uložená adresa příjemce a odesílatele. Pakety jsou očíslované, aby bylo možné v cíli zprávu správně poskládat.";
  const incorrectContent =
    "Špatně vyplněný OBSAH některého z paketů. Do jednoho paketu se vleze 8 znaků z původní zprávy. V prvním paketu bude prvních 8 znaků, ve druhém dalších 8 znaků, ve třetím bude zbytek zprávy.";
  const incorrectSender =
    "Špatně vyplněný ODESÍLATEL některého z paketů. Nezapomeň, že odesílatel je Karin, tudíž musíš napsat její IP adresu.";
  const incorrectRecipient =
    "Špatně vyplněný PŘÍJEMCE některého z paketů. Nezapomeň, že zpráva je první poslaná do serveru, musíš tedy napsat IP adresu serveru.";
  const unfilledInput = "Nějaké pole není vyplněné.";
  const [filledCorrectly, setfilledCorrectly] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  /**
   * Handles the submit event of the form and validates the input data
   */
  const handleSubmit = () => {
    const nonEmptyInputs =
      recipientIP.every((item) => item.length > 0) &&
      senderIP.every((item) => item.length > 0) &&
      content.every((item) => item.length > 0);
    if (
      recipientIP.length === 3 &&
      senderIP.length === 3 &&
      content.length === 3 &&
      nonEmptyInputs
    ) {
      if (senderIP.every((item) => item === correctSenderIP)) {
        if (recipientIP.every((item) => item === messengerServer)) {
          if (
            content[0] === firstPartMessage &&
            content[1] === secondPartMessage &&
            content[2] === thirdPartMessage
          ) {
            setfilledCorrectly(true);
            return;
          } else {
            setErrorMessage(incorrectContent);
          }
        } else {
          setErrorMessage(incorrectRecipient);
        }
      } else {
        setErrorMessage(incorrectSender);
      }
    } else {
      setErrorMessage(unfilledInput);
    }
    setIsIncorrect(true);
  };

  return (
    <>
      <SimpleFlow nodes={createPacketsNodes} edges={createPacketsEdges} />
      {isIncorrect && (
        <AlertDialog
          content={errorMessage}
          closeAction={() => setIsIncorrect(false)}
        />
      )}
      {filledCorrectly && (
        <NextLevelModal
          setGame={setGame}
          game={info.type}
          content={finalMessage}
        />
      )}
      <BasicModal content={info.content} />
      <div className="create-packet-packets-container">
        <div className="create-packet-packet1">
          <div className="create-packet-content">
            <InsidePacket
              number={0}
              senderIP={senderIP}
              setSenderIP={setSenderIP}
              recipientIP={recipientIP}
              setRecipientIP={setRecipientIP}
              content={content}
              setContent={setContent}
            />
          </div>
        </div>
        <div className="create-packet-packet2">
          <div className="create-packet-content">
            <InsidePacket
              number={1}
              senderIP={senderIP}
              setSenderIP={setSenderIP}
              recipientIP={recipientIP}
              setRecipientIP={setRecipientIP}
              content={content}
              setContent={setContent}
            />
          </div>
        </div>
        <div className="create-packet-packet3">
          <div className="create-packet-content">
            <InsidePacket
              number={2}
              senderIP={senderIP}
              setSenderIP={setSenderIP}
              recipientIP={recipientIP}
              setRecipientIP={setRecipientIP}
              content={content}
              setContent={setContent}
            />
          </div>
        </div>
      </div>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        className="create-packet-check-button"
      >
        ZKONTROLUJ
      </Button>
    </>
  );
}

export default CreatePacketComponent;
