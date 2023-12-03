import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

function WhatIsGatewayComponent({ info, setGame }) {
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

export default WhatIsGatewayComponent;
