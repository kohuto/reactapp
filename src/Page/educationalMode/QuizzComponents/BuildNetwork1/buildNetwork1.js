import FlowWithProvider from "../BuildNetwork/buildNetwork";

function BuildNetwork1({ setOpenDialog, game, info, setGame }) {
  return (
    <FlowWithProvider
      setOpenDialog={setOpenDialog}
      game={game}
      info={info}
      setGame={setGame}
    />
  );
}

export default BuildNetwork1;
