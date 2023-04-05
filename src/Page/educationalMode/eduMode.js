import Sidebar from "../../Sidebar/sidebar";
import QuizzComponents from "../QuizzComponents/Quizzes";
import Flow from "../reactFlow";
import Dialog from "../modalWindow";

/**
 * This component represents the educational mode of the application.
 * It includes the quizz components, the react flow, and the sidebar.
 * @param {Object} props - The component props.
 * @param {string} props.game - The current game.
 * @param {function} props.setGame - A function that sets the current game.
 * @param {function} props.setGameAfterDialogClose - A function that sets the game after the dialog closes.
 * @param {function} props.setDialogMessage - A function that sets the message displayed in the dialog box.
 * @param {function} props.setOpenDialog - A function that sets the state of the main dialog box.
 * @param {function} props.setIsDistroyedProblemWithPath - A function that sets whether a problem with a path is destroyed.
 * @param {boolean} props.isDestroyedProblemWithPath - A boolean indicating whether a problem with a path is destroyed.
 * @param {boolean} props.openOverlayDialog - A boolean indicating whether the overlay dialog box is open.
 * @param {string} props.overlayDialogMessage - The message displayed in the overlay dialog box.
 * @param {string} props.gameAfterDialogClose - The game to be set after the dialog box is closed.
 * @param {Object} props.nodes - The nodes in the react flow.
 * @param {function} props.setNodes - A function that sets the nodes in the react flow.
 * @param {function} props.onNodesChange - A function that handles the change of the nodes in the react flow.
 * @param {function} props.setIsCreativeMode - A function that sets whether the landing page is visible.
 * @param {function} props.setOpenOverlayDialog - A function that sets the state of the overlay dialog box.
 * @param {function} props.setOverlayDialogMessage - A function that sets the message displayed in the overlay dialog box.
 * @param {Array} props.specialFlowGame - An array of games with special flow.
 * @returns {JSX.Element} The educational mode component.
 */
function EducationalMode({
  game,
  setGame,
  setGameAfterDialogClose,
  setDialogMessage,
  setOpenDialog,
  setIsDestroyedProblemWithPath,
  isDestroyedProblemWithPath,
  openOverlayDialog,
  overlayDialogMessage,
  gameAfterDialogClose,
  nodes,
  setNodes,
  onNodesChange,
  setIsCreativeMode,
  setOpenOverlayDialog,
  setOverlayDialogMessage,
  specialFlowGame,
}) {
  return (
    <>
      {/* Extra quizz components visible only within concrete quizz */}
      <QuizzComponents
        game={game}
        setGame={setGame}
        setGameAfterClose={setGameAfterDialogClose}
        setAlertMessage={setDialogMessage}
        setOpenModal={setOpenDialog}
        setIsDistroyedProblemWithPath={setIsDestroyedProblemWithPath}
        isDestroyed={isDestroyedProblemWithPath}
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
      {!specialFlowGame.includes(game) && (
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

      <Sidebar
        showLandingPage={setIsCreativeMode}
        setGame={setGame}
        setAlertMessage={setDialogMessage}
        game={game}
        setGameAfterClose={setGameAfterDialogClose}
        setOpenModal={setOpenDialog}
        setOpenOverlayModal={setOpenOverlayDialog}
        setOverlayDialogMessage={setOverlayDialogMessage}
      />
    </>
  );
}

export default EducationalMode;
