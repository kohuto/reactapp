import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

function Client({ info, setGame }) {
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

export default Client;
