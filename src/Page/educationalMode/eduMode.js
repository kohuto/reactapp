import Sidebar from "./Sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import Dialog from "../DialogWindow/dialogWindow";
import PlaygroundSpeedDial from "./QuizzHelp/quizzHelp";
import { useState } from "react";
import "./style.css";

function EducationalMode({
  game,
  setGame,
  setOpenDialog,
  setGameAfterDialogClose,
  gameAfterDialogClose,
}) {
  const [overlayDialogMessage, setOverlayDialogMessage] = useState("");
  const [openOverlayDialog, setOpenOverlayDialog] = useState(false);

  function handleOpenOverlayDialog(isOpen, content, gameAfterClose = game) {
    setOverlayDialogMessage(content);
    setGameAfterDialogClose(gameAfterClose);
    setOpenOverlayDialog(isOpen);
  }
  return (
    <>
      <QuizzComponents
        game={game}
        setOpenDialog={handleOpenOverlayDialog}
        setGame={setGame}
      />

      <Dialog
        open={openOverlayDialog}
        setOpen={setOpenOverlayDialog}
        alertMessage={overlayDialogMessage}
        setGame={setGame}
        gameAfterClose={gameAfterDialogClose}
      />

      {game !== "noGame" ? (
        <PlaygroundSpeedDial setGame={setGame} game={game} />
      ) : (
        <Sidebar
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={handleOpenOverlayDialog}
          setGame={setGame}
        />
      )}
    </>
  );
}

export default EducationalMode;
