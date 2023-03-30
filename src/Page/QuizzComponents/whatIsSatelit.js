import { satelitData } from "../../Packet/data/satelitPackets";
import DefaultPackets from "../../Packet";

function WhatIsSatelitComponent() {
  var packets = [
    {
      id: 180,
      path: [
        "75.110.246.238",
        "260:01:812:ed8a::8",
        "9c8f:7a36::818f:b57a:68a1",
        "31.172.218.103",
        "182.49.39.109",
        "192.135.109.25",
      ],
      content: "to satelit",
      from: "77.75.79.138",
      to: "195.113.76.22",
      speed: 10,
    },
  ];
  return (
    <>
      <DefaultPackets packetsData={packets} repeat={Infinity} marginleft={20} />
    </>
  );
}

export default WhatIsSatelitComponent;
