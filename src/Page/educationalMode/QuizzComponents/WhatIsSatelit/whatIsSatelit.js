import DefaultPackets from "../../../Packet";
import { satelitData } from "../../../../Data/Packets/satelitPackets";
import "./style.css";
import BasicModal from "../../../DialogWindow/basicModal";
import SimpleFlow from "../../Flow/simpleFlow";
import { whatIsSatelitNodes } from "../../../../Data/Flow/whatIsSatelit";
import { whatIsSatelitEdges } from "../../../../Data/Flow/edges/whatIsSatelitEdges";

/**
 * A React component that renders a container with packets data
 * for a satellite.
 */
function WhatIsSatelitComponent({ info }) {
  return (
    <div className="what-is-satelit-container">
      <BasicModal content={info.content} />
      <SimpleFlow nodes={whatIsSatelitNodes} edges={whatIsSatelitEdges} />
      <DefaultPackets
        packetsData={satelitData}
        repeat={Infinity}
        marginleft={0}
      />
    </div>
  );
}

export default WhatIsSatelitComponent;
