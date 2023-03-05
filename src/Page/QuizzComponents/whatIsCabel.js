import { interactiveModePacketsData } from "../../Packet/data/inteactiveModeData";
import DefaultPackets from "../../Packet";

function WhatIsCabelComponent({ setGame, game }) {
  return (
    <>
      <DefaultPackets packetsData={interactiveModePacketsData} />
    </>
  );
}

export default WhatIsCabelComponent;
