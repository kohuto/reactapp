import DefaultPackets from "../../../Packet";
import { whatIsCabelPackets } from "../../../../Data/Packets/whatIsCabel";
import SimpleFlow from "../../Flow/simpleFlow";
import BasicModal from "../../../DialogWindow/basicModal";
import { whatIsCabelNodes } from "../../../../Data/Flow/whatIsCabel";
import { whatIsCabelEdges } from "../../../../Data/Flow/edges/whatIsCabelEdges";
import "./style.css";
/**
 * Renders a component that displays packets explaining what is a cable.
 * @param {object} props - The props object.
 * @returns {JSX.Element} - The component's UI.
 */
function WhatIsCabelComponent({ info, setGame }) {
  return (
    <>
      <BasicModal content={info.content} />
      <div className="what-is-cabel-labels">
        <div>OPTICKÝ KABEL:</div>
        <div>METALICKÝ KABEL:</div>
      </div>
      <SimpleFlow nodes={whatIsCabelNodes} edges={whatIsCabelEdges} />
      <DefaultPackets
        packetsData={whatIsCabelPackets}
        repeat={Infinity}
        marginleft={0}
      />
    </>
  );
}

export default WhatIsCabelComponent;
