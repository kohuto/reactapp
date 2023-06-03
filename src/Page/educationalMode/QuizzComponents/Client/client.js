import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

function Client({ intro, setGame, game }) {
  return (
    <>
      <NextLevelModal content={intro} setGame={setGame} game={game} />
    </>
  );
}

export default Client;
