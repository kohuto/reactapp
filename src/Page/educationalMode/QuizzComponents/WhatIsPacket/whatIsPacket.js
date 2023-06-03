import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

function WhatIsPacketComponent({ info, setGame }) {
  return (
    <>
      <NextLevelModal
        content={info.content}
        setGame={setGame}
        game={info.type}
      />
    </>
  );
}

export default WhatIsPacketComponent;
