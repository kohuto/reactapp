import DefaultPackets from "../../Packet";
import { btsData } from "../../../Data/Packets/btsPackets";

function WhatIsBTSComponent() {
  var packets = [
    {
      id: 180,
      path: [
        "69.131.176.185",
        "186.1.43.90",
        "94.113.91.4",
        "86.108.103.180",
        "43.27.66.183",
      ],
      content: "to satelit",
      from: "69.131.176.185",
      to: "43.27.66.183",
      speed: 20,
    },
  ];
  return (
    <>
      <DefaultPackets packetsData={packets} repeat={Infinity} marginleft={20} />
    </>
  );
}

export default WhatIsBTSComponent;
