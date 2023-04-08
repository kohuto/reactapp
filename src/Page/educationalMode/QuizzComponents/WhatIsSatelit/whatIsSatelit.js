import DefaultPackets from "../../../Packet";
import { satelitData } from "../../../../Data/Packets/satelitPackets";
import "./style.css";

/**
 * A React component that renders a container with packets data
 * for a satellite.
 */
function WhatIsSatelitComponent() {
  return (
    <div className="what-is-satelit-container">
      <DefaultPackets
        packetsData={satelitData}
        repeat={Infinity}
        marginleft={20}
      />
    </div>
  );
}

export default WhatIsSatelitComponent;
