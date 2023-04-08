import DefaultPackets from "../../../Packet";
import { btsData } from "../../../../Data/Packets/btsPackets";
import "./style.css";

/**
 * A React component that renders a container with packets data
 * for BTS (Base Transceiver Station)
 */
function WhatIsBTSComponent() {
  return (
    <div className="what-is-bts-container">
      <DefaultPackets packetsData={btsData} repeat={Infinity} marginleft={20} />
    </div>
  );
}

export default WhatIsBTSComponent;
