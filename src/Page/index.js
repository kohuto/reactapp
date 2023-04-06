import { useState } from "react";
import { useNodesState } from "reactflow";
import Dialog from "./DialogWindow/dialogWindow";
import "./QuizzComponents/Components.css";
import "../ModalWindow/Quizzes/quizzesStyles.css";
import "../ModalWindow/modalWindow.css";
import CreativeMode from "./CreativeMode/creativeMode";
import DefaultPackets from "../Packet";
import { landingPagePacketsData } from "../Packet/data/landingPage";
import EducationalMode from "./educationalMode/eduMode";

/**
 * This is the main component of the application.
 * It includes the educational mode and the creative mode.
 * @returns {JSX.Element} The main component of the application.
 */

function Page() {
  // Welcome message
  const welcomeMessage =
    "Vítej! Právě ses dostal do aplikace, která tě naučí, jak funguje internet. V případě, že nebudeš vědět, co dál, klikni vpravo dole na otazník a otevře se ti nápověda. Nyní zavři toto okno a můžeš začít zkoumat.";

  // State initialization
  const [isCreativeMode, setIsCreativeMode] = useState(true);
  const [game, setGame] = useState("noGame");
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [dialogMessage, setDialogMessage] = useState(welcomeMessage);
  const [isDestroyedProblemWithPath, setIsDestroyedProblemWithPath] =
    useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [gameAfterDialogClose, setGameAfterDialogClose] = useState("noGame");

  // games that needs special flows
  const specialFlowGame = [
    "client-server-communication",
    "whatIsServer",
    "whatIsPath",
    "raceAroundWorld",
    "whatIsWiFi",
    "buildNetwork",
    "connectClientsWireless",
    "build-network-1",
    "build-network-2",
    "build-network-3",
    "build-network-4",
  ];

  /**
   * Handles the open state of the main dialog box.
   * @param {boolean} isOpen - The new state of the dialog box.
   * @param {object} content - The contnet of the dialog box.
   * @param {string} gameAfterClose - The game thate will be set after close dialog box.
   */
  function handleOpenDialog(isOpen, content, gameAfterClose = game) {
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

      {isCreativeMode ? (
        <>
          {/* Creative mode */}
          <DefaultPackets
            packetsData={landingPagePacketsData}
            repeat={Infinity}
            marginleft={0}
          />
          <CreativeMode
            setOpenModal={handleOpenDialog}
            setIsCreativeMode={() => setIsCreativeMode(false)}
          />
        </>
      ) : (
        <>
          {/* Educational mode */}
          <EducationalMode
            game={game}
            setGame={setGame}
            setOpenDialog={handleOpenDialog}
            setGameAfterDialogClose={handleGameAfterDialogCloseChange}
            isDestroyedProblemWithPath={isDestroyedProblemWithPath}
            gameAfterDialogClose={gameAfterDialogClose}
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            setIsCreativeMode={setIsCreativeMode}
            specialFlowGame={specialFlowGame}
            isCreativeMode={isCreativeMode}
          />
        </>
      )}
    </>
  );
}

export default Page;
