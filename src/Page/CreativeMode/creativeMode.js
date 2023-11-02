import CreativeModeWithoutPackets from "./creativeModeWithoutPackets";

function CreativeMode({ info, setGame }) {
  return (
    <>
      <CreativeModeWithoutPackets info={info} setGame={setGame} />
    </>
  );
}

export default CreativeMode;
