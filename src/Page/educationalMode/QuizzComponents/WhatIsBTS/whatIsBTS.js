import DefaultPackets from "../../../Packet";
import { btsData } from "../../../../Data/Packets/btsPackets";
import SimpleFlow from "../../Flow/simpleFlow";
import { whatIsBTSNodes } from "../../../../Data/Flow/whatIsBTS";
import "./style.css";
import { whatIsBTSEdges } from "../../../../Data/Flow/edges/whatIsBTSEdges";
import BasicModal from "../../../DialogWindow/basicModal";

/**
 * A React component that renders a container with packets data
 * for BTS (Base Transceiver Station)
 */
function WhatIsBTSComponent({ info, setGame }) {
  return (
    <div className="what-is-bts-container">
      <BasicModal content={info.content} />
      <SimpleFlow nodes={whatIsBTSNodes} edges={whatIsBTSEdges} />
      <DefaultPackets packetsData={btsData} repeat={Infinity} marginleft={0} />
    </div>
  );
}

export default WhatIsBTSComponent;
