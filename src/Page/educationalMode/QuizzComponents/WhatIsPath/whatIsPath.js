import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

function WhatIsPathComponent({ info, setGame }) {
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

export default WhatIsPathComponent;
