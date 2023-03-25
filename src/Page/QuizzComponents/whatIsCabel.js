import React, { useState } from "react";
import DefaultPackets from "../../Packet";
import profileImageMan from "../../images/profile/man.png";
import profileImageWoman from "../../images/profile/woman.png";
import gallery from "../../images/icons/image-gallery.png";
import plus from "../../images/icons/plusmess.png";
import gif from "../../images/icons/gif.png";

function WhatIsCabelComponent({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  var packets = [
    {
      id: 10,
      path: ["195.113.76.22", "2002:c0a8:101::1"],
      content: "optika",
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 40,
    },
    {
      id: 11,
      path: ["195.113.76.22", "2002:c0a8:101::1"],
      content: "metalika",
      from: "195.113.76.22",
      to: "195.113.27.221",
      speed: 40,
    },
  ];

  return <DefaultPackets packetsData={packets} />;
}

export default WhatIsCabelComponent;
