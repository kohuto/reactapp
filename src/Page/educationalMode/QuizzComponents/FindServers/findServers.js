import CloseOpen from "../CloseOpenWindow/closeOpenWindow";
import DefaultPackets from "../../../Packet";
import { findServerData } from "../../../../Data/Packets/findServerPackets";
import InputBox from "./inputBox";
import "./style.css";

/**
 * Component that renders a find packet form and a list of packets.
 * @param {Object} props - The component props.
 * @param {Function} props.setOpenDialog - A function to open a dialog window.
 * @returns {JSX.Element} The component JSX element.
 */
function FindPacketComponent(props) {
  return (
    <>
      <DefaultPackets
        packetsData={findServerData}
        repeat={Infinity}
        marginleft={20}
      />
      <CloseOpen content={<InputBox setOpenDialog={props.setOpenDialog} />} />
    </>
  );
}

export default FindPacketComponent;
