import Sidebar from "../Sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import { useState } from "react";
import Flow from "./reactFlow";
import { useNodesState } from "reactflow";
import AlertDialog from "./modalWindow";
import "./QuizzComponents/Components.css";
import "../ModalWindow/Quizzes/quizzesStyles.css";
import "../ModalWindow/modalWindow.css";
import LandingPage from "./landingPage";

function Page() {
  const [isLandingPage, setIsLandingPage] =
    useState(true); /* zde změnit na true */
  const [game, setGame] = useState("noGame");
  const [zoom, setZoom] = useState(0);
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edge, setEdges, onEdgesChange] = useNodesState();
  const [alertMessage, setAlertMessage] = useState(
    "Vítej v naší úžasné aplikaci. kecy prdy. zavři toto akno a jdi se dozvědět něco o internetu"
  );
  const [overlayDialogMessage, setOverlayDialogMessage] = useState("");
  const [isDistroyedProblemWithPath, setIsDistroyedProblemWithPath] =
    useState(false);
  const [openOverlayDialog, setOpenOverlayDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [gameAfterClose, setGameAfterModalClose] = useState("noGame");

  function handleOpenDialog(isOpen) {
    setOpenDialog(isOpen);
  }
  function handleIsDistroyedProblemWithPath(isDestroyed) {
    setIsDistroyedProblemWithPath(isDestroyed);
  }

  function handleAlertMessageChange(newMessage) {
    setAlertMessage(newMessage);
  }

  function handleOverlayDialogMessageChange(newMessage) {
    setOverlayDialogMessage(newMessage);
  }

  function handleOpenOverlayDialog(isOpen) {
    setOpenOverlayDialog(isOpen);
  }

  const zoomIn = () => {
    if (zoom > 0) {
      setZoom(zoom - 0.1);
    }
  };

  const zoomOut = () => {
    console.log(zoom);
    if (zoom < 2) {
      setZoom(zoom + 0.1);
    }
  };

  return (
    <>
      <AlertDialog
        open={openDialog}
        setOpen={setOpenDialog}
        alertMessage={alertMessage}
        setGame={setGame}
        gameAfterClose={gameAfterClose}
      />
      {isLandingPage ? (
        <>
          <AlertDialog
            open={openDialog}
            setOpen={setOpenDialog}
            alertMessage={alertMessage}
            setGame={setGame}
            gameAfterClose={gameAfterClose}
          />
          <LandingPage
            setGameAfterModalClose={setGameAfterModalClose}
            setAlertMessage={handleAlertMessageChange}
            setOpenModal={handleOpenDialog}
            game={game}
            setIsLandingPage={() => setIsLandingPage(false)}
          />
        </>
      ) : (
        <>
          <QuizzComponents
            game={game}
            setGame={setGame}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            zoom={zoom}
            setGameAfterModalClose={setGameAfterModalClose}
            setAlertMessage={handleAlertMessageChange}
            setOpenModal={handleOpenDialog}
            setIsDistroyedProblemWithPath={handleIsDistroyedProblemWithPath}
            isDestroyed={isDistroyedProblemWithPath}
          />

          <AlertDialog
            open={openOverlayDialog}
            setOpen={setOpenOverlayDialog}
            alertMessage={overlayDialogMessage}
            setGame={setGame}
            gameAfterClose={gameAfterClose}
          />

          <div>
            {![
              "client-server-communication",
              "whatIsServer",
              "whatIsPath",
              "raceAroundWorld",
              "whatIsWiFi",
              "buildNetwork",
              "build-network-1",
              "build-network-2",
              "build-network-3",
              "build-network-4",
            ].includes(game) && (
              <div
                style={{ height: "95vh", width: "80%", marginLeft: "20%" }}
                className={`${game}-bg`}
              >
                <Flow
                  game={game}
                  zoom={zoom}
                  nodes={nodes}
                  edge={edge}
                  setEdges={setEdges}
                  onEdgesChange={onEdgesChange}
                  setNodes={setNodes}
                  onNodesChange={onNodesChange}
                  isDestroyed={isDistroyedProblemWithPath}
                ></Flow>
              </div>
            )}
            <Sidebar
              showLandingPage={setIsLandingPage}
              setGame={setGame}
              setAlertMessage={handleAlertMessageChange}
              game={game}
              setGameAfterModalClose={setGameAfterModalClose}
              setOpenModal={handleOpenDialog}
              setOpenOverlayModal={handleOpenOverlayDialog}
              setOverlayDialogMessage={handleOverlayDialogMessageChange}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Page;
