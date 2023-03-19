import Sidebar from "../Sidebar/sidebar";
import InteractiveSidebar from "../interactive-sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import { useState } from "react";
import Flow from "./reactFlow";
import { interactiveModePacketsData } from "../Packet/data/inteactiveModeData";
import { findPacketsData } from "../Packet/data/findPackets";
import DefaultPackets from "../Packet";
import { useNodesState } from "reactflow";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Page() {
  const [isLandingPage, setIsLandingPage] =
    useState(false); /* zde změnit na true */
  const [game, setGame] = useState("noGame");
  const [zoom, setZoom] = useState(0);
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [endGameMessage, setEndGameMessage] = useState("");
  const [informMessage, setInformMessage] = useState("");
  const [openInform, setOpenInform] = useState("");
  const [openEndGame, setOpenEndGame] = useState("");

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
          setAlertMessage={handleAlertMessageChange}
          setOpenInform={handleOpenInform}
          setOpenEndGame={handleOpenEndGame}
        />

        <AlertDialog
          open={openEndGame}
          setOpen={setOpenEndGame}
          alertMessage={alertMessage}
          setGame={() => setGame("noGame")}
        />

        <AlertDialog
          open={openInform}
          setOpen={setOpenInform}
          alertMessage={alertMessage}
          setGame={() => setGame(game)}
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
          <Sidebar showLandingPage={setIsLandingPage} setGame={setGame} />
        </div>
      </>
    );
  }
}

function AlertDialog({ open, setOpen, alertMessage, setGame }) {
  const handleClose = () => {
    setOpen(false);
    setGame();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ZAVŘÍT</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Page;
