import FlowWithProvider from "../BuildNetwork/buildNetwork";

function BuildNetwork2({ setOpenDialog, game, info, setGame }) {
  return (
    <FlowWithProvider
      setOpenDialog={setOpenDialog}
      game={game}
      info={info}
      setGame={setGame}
    />
  );
}

export default BuildNetwork2;
