import { useState } from "react";
import { useNodesState } from "reactflow";
import Dialog from "./DialogWIndow/dialogWindow";
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
  const [overlayDialogMessage, setOverlayDialogMessage] = useState("");
  const [isDestroyedProblemWithPath, setIsDestroyedProblemWithPath] =
    useState(false);
  const [openOverlayDialog, setOpenOverlayDialog] = useState(false);
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
   */
  function handleOpenDialog(isOpen) {
    setOpenDialog(isOpen);
  }

  /**
   * Handles the open state of the overlay dialog box.
   * @param {boolean} isOpen - The new state of the overlay dialog box.
   */
  function handleOpenOverlayDialog(isOpen) {
    setOpenOverlayDialog(isOpen);
  }

  /**
   * Handles the change of the message displayed in the main dialog box.
   * @param {string} newMessage - The new message to be displayed in the main dialog box.
   */
  function handleDialogMessageChange(newMessage) {
    setDialogMessage(newMessage);
  }

  /**
   * Handles the change of the message displayed in the overlay dialog box.
   * @param {string} newMessage - The new message to be displayed in the overlay dialog box.
   */
  function handleOverlayDialogMessageChange(newMessage) {
    setOverlayDialogMessage(newMessage);
  }

  /**
   * Handles the change of the game state after the main dialog box is closed.
   * @param {string} newGame - The new game state.
   */
  function handleGameAfterDialogCloseChange(newGame) {
    setGameAfterDialogClose(newGame);
  }

  /**
   * Handles the change of the state of the problem that needs to be destroyed.
   * @param {boolean} isDestroyed - The new state of the problem that needs to be destroyed.
   */
  function handleIsDestroyedProblemWithPath(isDestroyed) {
    setIsDestroyedProblemWithPath(isDestroyed);
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
            setGameAfterModalClose={handleGameAfterDialogCloseChange}
            setAlertMessage={handleDialogMessageChange}
            setOpenModal={handleOpenDialog}
            game={game}
            setIsLandingPage={() => setIsCreativeMode(false)}
          />
        </>
      ) : (
        <>
          {/* Educational mode */}
          <EducationalMode
            game={game}
            setGame={setGame}
            setGameAfterDialogClose={handleGameAfterDialogCloseChange}
            setDialogMessage={handleDialogMessageChange}
            setOpenDialog={handleOpenDialog}
            setIsDistroyedProblemWithPath={handleIsDestroyedProblemWithPath}
            isDestroyedProblemWithPath={isDestroyedProblemWithPath}
            openOverlayDialog={openOverlayDialog}
            overlayDialogMessage={overlayDialogMessage}
            gameAfterDialogClose={gameAfterDialogClose}
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            setIsCreativeMode={setIsCreativeMode}
            setOpenOverlayDialog={handleOpenOverlayDialog}
            setOverlayDialogMessage={handleOverlayDialogMessageChange}
            specialFlowGame={specialFlowGame}
            isCreativeMode={isCreativeMode}
          />
        </>
      )}
    </>
  );
}

export default Page;
