import DefaultPackets from "../../Packet";
import { btsData } from "../../Packet/data/btsPackets";

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
      from: "77.75.79.138",
      to: "195.113.76.22",
      speed: 20,
    },
  ];
  return (
    <>
      <DefaultPackets packetsData={packets} />
    </>
  );
}

export default WhatIsBTSComponent;
