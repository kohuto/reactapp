import { useState } from "react";
import Dialog from "./DialogWindow/dialogWindow";
import EducationalMode from "./educationalMode/eduMode";
import Documentation from "./info/documentation";

function Page() {
  const [game, setGame] = useState("noGame");
  const [dialogMessage, setDialogMessage] = useState("");
  useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [gameAfterDialogClose, setGameAfterDialogClose] = useState("noGame");
  const [isDocumentationMode, setIsDocumentationMode] = useState(true);

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
      {isDocumentationMode ? (
        <Documentation setIsDocumentationMode={setIsDocumentationMode} />
      ) : (
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
            setIsDocumentationMode={setIsDocumentationMode}
          />
        </>
      )}
    </>
  );
}

export default Page;
