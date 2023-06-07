import DefaultPackets from "../../../Packet";
import { findServerData } from "../../../../Data/Packets/findServerPackets";
import InputBox from "./inputBox";
import "./style.css";
import BasicModal from "../../../DialogWindow/basicModal";
import { useState } from "react";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import SimpleFlow from "../../Flow/simpleFlow";
import { findServerNodes } from "../../../../Data/Flow/findServers";
import { findServerEdges } from "../../../../Data/Flow/edges/findServers";
/**
 * Component that renders a find packet form and a list of packets.
 * @param {Object} props - The component props.
 * @param {Function} props.setOpenDialog - A function to open a dialog window.
 * @returns {JSX.Element} The component JSX element.
 */

function FindPacketComponent({ info, setGame }) {
  const finalMessage =
    "Perfektní! Nezpomeň, že v každém paketu najdeš informaci o tom, kdo paket poslal a komu má být paket doručen.";
  const incorrectServerMessage = "Něco není vyplněné správně.";

  const [filledCorrectly, setFilledCorrectly] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  return (
    <>
      {filledCorrectly && (
        <NextLevelModal
          setGame={setGame}
          game={info.game}
          content={finalMessage}
        />
      )}
      {isIncorrect && (
        <AlertDialog
          content={incorrectServerMessage}
          closeAction={() => setIsIncorrect(false)}
        />
      )}
      <BasicModal content={info.content} />
      <SimpleFlow nodes={findServerNodes} edges={findServerEdges} />
      <DefaultPackets
        packetsData={findServerData}
        repeat={Infinity}
        marginleft={0}
      />
      <InputBox
        setFilledCorrectly={() => setFilledCorrectly(true)}
        setIsIncorrect={() => setIsIncorrect(true)}
      />
    </>
  );
}

export default FindPacketComponent;
