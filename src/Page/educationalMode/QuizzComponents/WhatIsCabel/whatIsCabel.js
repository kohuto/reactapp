import DefaultPackets from "../../../Packet";
import { whatIsCabelPackets } from "../../../../Data/Packets/whatIsCabel";

/**
 * Renders a component that displays packets explaining what is a cable.
 * @param {object} props - The props object.
 * @returns {JSX.Element} - The component's UI.
 */
function WhatIsCabelComponent({}) {
  return (
    <DefaultPackets
      packetsData={whatIsCabelPackets}
      repeat={Infinity}
      marginleft={20}
    />
  );
}

export default WhatIsCabelComponent;
