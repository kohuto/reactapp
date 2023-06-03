import Sidebar from "./Sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import Flow from "./Flow/reactFlow";
import Dialog from "../DialogWindow/dialogWindow";
import PlaygroundSpeedDial from "./QuizzHelp/quizzHelp";
import { useState } from "react";
import "./style.css";

/**
 * This component represents the educational mode of the application.
 * It includes the quizz components, the react flow, and the sidebar.
 * @param {Object} props - The component props.
 * @param {string} props.game - The current game.
 * @param {function} props.setGame - A function that sets the current game.
 * @param {function} props.setGameAfterDialogClose - A function that sets the game after close dialog window.
 * @param {function} props.setOpenDialog - A function that sets the state of the main dialog box.
 * @param {function} props.setIsDestroyedProblemWithPath - A function that sets whether a problem with a path is destroyed.
 * @param {boolean} props.isDestroyedProblemWithPath - A boolean indicating whether a problem with a path is destroyed.
 * @param {Object} props.nodes - The nodes in the react flow.
 * @param {function} props.setNodes - A function that sets the nodes in the react flow.
 * @param {function} props.onNodesChange - A function that handles the change of the nodes in the react flow.
 * @param {function} props.setIsCreativeMode - A function that sets whether the landing page is visible.
 * @param {Array} props.specialFlowGame - An array of games with special flow.
 * @returns {JSX.Element} The educational mode component.
 */
function EducationalMode({
  game,
  setGame,
  setGameAfterDialogClose,
  setOpenDialog,
  setIsDestroyedProblemWithPath,
  isDestroyedProblemWithPath,
  gameAfterDialogClose,
  nodes,
  setNodes,
  onNodesChange,
  setIsCreativeMode,
  specialFlowGame,
}) {
  const [overlayDialogMessage, setOverlayDialogMessage] = useState("");
  const [openOverlayDialog, setOpenOverlayDialog] = useState(false);

  /**
   * Handles the open state of the overlay dialog box.
   * @param {boolean} isOpen - The new state of the overlay dialog box.
   */
  function handleOpenOverlayDialog(isOpen, content, gameAfterClose = game) {
    setOverlayDialogMessage(content);
    setGameAfterDialogClose(gameAfterClose);
    setOpenOverlayDialog(isOpen);
  }
  return (
    <>
      {/* Extra quizz components visible only within concrete quizz */}
      <QuizzComponents
        game={game}
        //setOpenDialog={setOpenDialog}
        setIsDistroyedProblemWithPath={setIsDestroyedProblemWithPath}
        isDestroyed={isDestroyedProblemWithPath}
        setOpenDialog={handleOpenOverlayDialog}
        setGame={setGame}
      />

      {/* Overlay dialog */}
      <Dialog
        open={openOverlayDialog}
        setOpen={setOpenOverlayDialog}
        alertMessage={overlayDialogMessage}
        setGame={setGame}
        gameAfterClose={gameAfterDialogClose}
      />

      {/* Main content */}
      {!specialFlowGame.includes(game) && game != "noGame" && (
        <div className="main-flow-container">
          <Flow
            game={game}
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            isDestroyed={isDestroyedProblemWithPath}
          />
        </div>
      )}
      {/* sidebars */}
      {game != "noGame" ? (
        <PlaygroundSpeedDial setGame={setGame} game={game} />
      ) : (
        <Sidebar
          setIsCreativeMode={setIsCreativeMode}
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={handleOpenOverlayDialog}
          setGame={setGame}
        />
      )}
    </>
  );
}

export default EducationalMode;
