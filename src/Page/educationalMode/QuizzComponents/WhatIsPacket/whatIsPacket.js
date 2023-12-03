import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

function WhatIsPacketComponent({ info, setGame }) {
  return (
    <>
      <NextLevelModal
        content={info.content}
        setGame={setGame}
        game={info.type}
        header={info.header}
      />
    </>
  );
}

export default WhatIsPacketComponent;
