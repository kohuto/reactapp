import DefaultPackets from "../../Packet";
import { wifiData } from "../../Packet/data/wifiPackets";

function WhatIsWiFiComponent({ setGame, game }) {
  return (
    <>
      <DefaultPackets packetsData={wifiData} />
    </>
  );
}

export default WhatIsWiFiComponent;
