import { landingPagePacketsData } from "../../Data/Packets/landingPage";
import DefaultPackets from "../Packet";

function CreativeMode({ setOpenModal, setIsCreativeMode }) {
  return (
    <>
      <DefaultPackets
        packetsData={landingPagePacketsData}
        repeat={Infinity}
        marginleft={0}
      />
      <CreativeMode setOpenModal={handleOpenDialog} />
    </>
  );
}

export default CreativeMode;
