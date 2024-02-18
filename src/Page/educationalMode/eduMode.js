import Sidebar from "./Sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import Dialog from "../DialogWindow/dialogWindow";
import PlaygroundSpeedDial from "./QuizzHelp/quizzHelp";
import { useState } from "react";
import "./style.css";
import ActivityNavigation from "./navigation";

function EducationalMode({
  game,
  setGame,
  setOpenDialog,
  setGameAfterDialogClose,
  gameAfterDialogClose,
  setIsDocumentationMode,
}) {
  const [overlayDialogMessage, setOverlayDialogMessage] = useState("");
  const [openOverlayDialog, setOpenOverlayDialog] = useState(false);

  function handleOpenOverlayDialog(isOpen, content, gameAfterClose = game) {
    setOverlayDialogMessage(content);
    setGameAfterDialogClose(gameAfterClose);
    setOpenOverlayDialog(isOpen);
  }

  // zajisti refresh aktuálního úkolu
  function reloadGame() {
    const currentGame = game;
    setGame("noGame"); 
    setTimeout(() => setGame(currentGame), 0); // Nastaví hru zpět na původní hru
  };
  

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

      <ActivityNavigation game={game} />

      {game !== "noGame" ? (
        <PlaygroundSpeedDial setGame={setGame} game={game} reloadGame={reloadGame}/>
      ) : (
        <Sidebar
          setOpenDialog={setOpenDialog}
          setGame={setGame}
          setIsDocumentationMode={setIsDocumentationMode}
        />
      )}
    </>
  );
}

export default EducationalMode;
