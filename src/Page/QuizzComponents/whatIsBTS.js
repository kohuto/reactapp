import DefaultPackets from "../../Packet";
import { btsData } from "../../Packet/data/btsPackets";

function WhatIsBTSComponent({ setGame, game }) {
  return (
    <>
      <DefaultPackets packetsData={btsData} />
    </>
  );
}

export default WhatIsBTSComponent;
