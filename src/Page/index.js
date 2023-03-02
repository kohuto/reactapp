import Sidebar from "../Sidebar/sidebar";
import InteractiveSidebar from "../interactive-sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import { useState } from "react";
import Flow from "./reactFlow";
import { interactiveModePacketsData } from "../Packet/data/inteactiveModeData";
import { findPacketsData } from "../Packet/data/findPackets";
import DefaultPackets from "../Packet";
import city from "../images/background/city.jpg";
import { useNodesState } from "reactflow";
function Page() {
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [game, setGame] = useState("noGame");
  const [zoom, setZoom] = useState(0);
  const [nodes, setNodes, onNodesChange] = useNodesState();
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
        />

        <div>
          {!["raceAroundWorld"].includes(game) && (
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

export default Page;
