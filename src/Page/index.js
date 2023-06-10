import { useState } from "react";
import { useNodesState } from "reactflow";
import Dialog from "./DialogWindow/dialogWindow";
import CreativeMode from "./CreativeMode/creativeModeWithoutPackets";
import DefaultPackets from "./Packet";
import { landingPagePacketsData } from "../Data/Packets/landingPage";
import EducationalMode from "./educationalMode/eduMode";

/**
 * This is the main component of the application.
 * It includes the educational mode and the creative mode.
 * @returns {JSX.Element} The main component of the application.
 */
function Page() {
  // State initialization
  const [game, setGame] = useState("noGame");
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [dialogMessage, setDialogMessage] = useState("");
  const [isDestroyedProblemWithPath, setIsDestroyedProblemWithPath] =
    useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [gameAfterDialogClose, setGameAfterDialogClose] = useState("noGame");
  const [mode, setMode] = useState("educational");
  // games that needs special flows
  const specialFlowGame = [
    /*"client-server-communication",
    "whatIsServer",
    "whatIsPath",
    "",
    "raceAroundWorld",
    "whatIsWiFi",
    "buildNetwork",
    "connectClientsWireless",
    "build-network-1",
    "build-network-2",
    "build-network-3",
    "build-network-4",
    "dataIntoPackets",*/
  ];

  /**
   * Handles the open state of the main dialog box.
   * @param {boolean} isOpen - The new state of the dialog box.
   * @param {object} content - The contnet of the dialog box.
   * @param {string} gameAfterClose - The game thate will be set after close dialog box.
   */
  function handleOpenDialog(isOpen, content, gameAfterClose = game) {
    setGame("noGame");
    setDialogMessage(content);
    setGameAfterDialogClose(gameAfterClose);
    setOpenDialog(isOpen);
  }

  /**
   * Handles the set of game after dialog window is closed.
   * @param {string} game - The game that will be set after close.
   */
  function handleGameAfterDialogCloseChange(game) {
    setGameAfterDialogClose(game);
  }

  return (
    <>
      {/* Main dialog */}
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
