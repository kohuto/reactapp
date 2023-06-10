import { landingPagePacketsData } from "../../Data/Packets/landingPage";
import DefaultPackets from "../Packet";
import CreativeModeWithoutPackets from "./creativeModeWithoutPackets";

function CreativeMode({ info, setGame }) {
  return (
    <>
      <DefaultPackets
        packetsData={landingPagePacketsData}
        repeat={Infinity}
        marginleft={0}
      />
      <CreativeModeWithoutPackets info={info} setGame={setGame} />
    </>
  );
}

export default CreativeMode;
