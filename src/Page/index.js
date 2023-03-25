import Sidebar from "../Sidebar/sidebar";
import InteractiveSidebar from "../interactive-sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import { useState, useEffect } from "react";
import Flow from "./reactFlow";
import { interactiveModePacketsData } from "../Packet/data/inteactiveModeData";
import { findPacketsData } from "../Packet/data/findServerPackets";
import DefaultPackets from "../Packet";
import { useNodesState, useEdgesState, Background } from "reactflow";
import AlertDialog from "./modalWindow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./QuizzComponents/Components.css";
import "../ModalWindow/Quizzes/quizzesStyles.css";
import "../ModalWindow/modalWindow.css";

function Page() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [isLandingPage, setIsLandingPage] =
    useState(false); /* zde změnit na true */
  const [game, setGame] = useState("noGame");
  const [zoom, setZoom] = useState(0);
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edge, setEdges, onEdgesChange] = useNodesState();
  const [alertMessage, setAlertMessage] = useState("");
  const [overlayDialogMessage, setOverlayDialogMessage] = useState("");
  const [isDistroyedProblemWithPath, setIsDistroyedProblemWithPath] =
    useState(false);
  const [openOverlayDialog, setOpenOverlayDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [gameAfterClose, setGameAfterModalClose] = useState("");

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

  if (isLandingPage) {
    return (
      <div className="page">
        <DefaultPackets
          packetsData={interactiveModePacketsData}
          game={game === "noGame"}
        />
        <div style={{ display: "flex", height: "100vh" }}>
          <InteractiveSidebar
            setIsLandingPage={() => setIsLandingPage(false)}
            setGame={setGame}
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
          />
          <div style={{ flex: 1 }}>
            <Flow
              game={game}
              zoom={zoom}
              nodes={nodes}
              setNodes={setNodes}
              onNodesChange={onNodesChange}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
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

        <AlertDialog
          open={openDialog}
          setOpen={setOpenDialog}
          alertMessage={alertMessage}
          setGame={setGame}
          gameAfterClose={gameAfterClose}
        />

        <div>
          {![
            "client-server-communication",
            "whatIsServer",
            "raceAroundWorld",
            "whatIsWiFi",
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
    );
  }
}

export default Page;
