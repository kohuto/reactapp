import Packet from "./Packet";

function DefaultPackets({ packetsData, game }) {
  const Packets = ({ packetsData }) => (
    <>
      {packetsData.map((packet) => (
        <Packet
          key={"packet" + packet.id}
          content={packet.content}
          from={packet.from}
          to={packet.to}
          path={packet.path}
          color="#666666"
          speed={packet.speed}
        ></Packet>
      ))}
    </>
  );
  return (
    <>
      <Packets packetsData={packetsData} />
    </>
  );
}

export default DefaultPackets;
