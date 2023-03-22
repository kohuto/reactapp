import Sidebar from "../Sidebar/sidebar";
import InteractiveSidebar from "../interactive-sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import { useState, useEffect } from "react";
import Flow from "./reactFlow";
import { interactiveModePacketsData } from "../Packet/data/inteactiveModeData";
import { findPacketsData } from "../Packet/data/findServerPackets";
import DefaultPackets from "../Packet";
import { useNodesState } from "reactflow";
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
  const [alertMessage, setAlertMessage] = useState("");
  const [openInform, setOpenInform] = useState("");
  const [openEndGame, setOpenEndGame] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [gameAfterClose, setGameAfterModalClose] = useState("");
  function handleAlertMessageChange(newMessage) {
    setAlertMessage(newMessage);
  }

  function handleOpenInform(newState) {
    setOpenInform(newState);
  }

  function handleOpenEndGame(newState) {
    setOpenInform(false);
    setOpenEndGame(newState);
  }

  function handleOpenDialog(isOpen) {
    setOpenDialog(isOpen);
  }

  const zoomIn = () => {
    if (zoom > 0) {
      setZoom(zoom - 1);
    }
  };

  const zoomOut = () => {
    console.log(zoom);
    if (zoom < 2) {
      setZoom(zoom + 1);
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
          setOpenDialog={handleOpenDialog}
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
            "raceAroundWorld",
            "client-server-communication",
            "whatIsServer",
          ].includes(game) && (
            <div style={{ height: "95vh", width: "80%", marginLeft: "20%" }}>
              <Flow
                game={game}
                zoom={zoom}
                nodes={nodes}
                setNodes={setNodes}
                onNodesChange={onNodesChange}
              />
            </div>
          )}
          <Sidebar
            showLandingPage={setIsLandingPage}
            setGame={setGame}
            setAlertMessage={handleAlertMessageChange}
            setOpenInform={handleOpenInform}
            setOpenEndGame={handleOpenEndGame}
            game={game}
            setGameAfterModalClose={setGameAfterModalClose}
            setOpenModal={handleOpenDialog}
          />
        </div>
      </>
    );
  }
}

function AlertDialog({ open, setOpen, alertMessage, setGame, gameAfterClose }) {
  const handleClose = () => {
    setGame(gameAfterClose);
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",

    // minHeight: "75vh",
    //minWidth: "75vw",
    display: "inline-block",
    width: "auto",
    height: "auto",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={style}>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {alertMessage}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Page;
