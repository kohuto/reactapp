import { satelitData } from "../../Packet/data/satelitPackets";
import DefaultPackets from "../../Packet";

function WhatIsSatelitComponent() {
  return (
    <>
      <DefaultPackets packetsData={satelitData} />
    </>
  );
}

export default WhatIsSatelitComponent;
