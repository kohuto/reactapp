import { useState } from "react";
import Dialog from "./DialogWindow/dialogWindow";
import EducationalMode from "./educationalMode/eduMode";

function Page() {
  const [game, setGame] = useState("noGame");
  const [dialogMessage, setDialogMessage] = useState("");
  useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [gameAfterDialogClose, setGameAfterDialogClose] = useState("noGame");

  function handleOpenDialog(isOpen, content, gameAfterClose = game) {
    setGame("noGame");
    setDialogMessage(content);
    setGameAfterDialogClose(gameAfterClose);
    setOpenDialog(isOpen);
  }

  function handleGameAfterDialogCloseChange(game) {
    setGameAfterDialogClose(game);
  }

  return (
    <>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        alertMessage={dialogMessage}
        setGame={setGame}
        gameAfterClose={gameAfterDialogClose}
      />

      <EducationalMode
        game={game}
        setGame={setGame}
        setOpenDialog={handleOpenDialog}
        setGameAfterDialogClose={handleGameAfterDialogCloseChange}
        gameAfterDialogClose={gameAfterDialogClose}
      />
    </>
  );
}

export default Page;
