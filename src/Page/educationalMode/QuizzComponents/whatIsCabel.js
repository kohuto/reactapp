import DefaultPackets from "../../Packet";

function WhatIsCabelComponent({}) {
  var packets = [
    {
      id: 10,
      path: [
        "162.147.249.223",
        "90.123.29.119",
        "126.134.35.41",
        "159.146.191.67",
      ],
      content: "optika",
      from: "162.147.249.223",
      to: "159.146.191.67",
      speed: 2,
    },
    {
      id: 11,
      path: [
        "26::862:ed1a::1",
        "71dd::ad48:7474:3412",
        "224.109.172.5",
        "17.246.37.189",
      ],
      content: "metalika",
      from: "26:0:862:ed1a::1",
      to: "17.246.37.189",
      speed: 60,
    },
  ];

  return (
    <DefaultPackets packetsData={packets} repeat={Infinity} marginleft={20} />
  );
}

export default WhatIsCabelComponent;
