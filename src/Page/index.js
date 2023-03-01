import Sidebar from "../Sidebar/sidebar";
import InteractiveSidebar from "../interactive-sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/QuizzComponents";
import { useState } from "react";
import Flow from "./reactFlow";
import { interactiveModePacketsData } from "../Packet/data/inteactiveModeData";
import { findPacketsData } from "../Packet/data/findPackets";
import DefaultPackets from "../Packet";
import { useNodesState } from "reactflow";
function Page() {
  /*<div                           toto patri do return
          style={{
            width: "70vw",
            height: "100vh",
            backgroundImage: `url(${
              zoom === 0 ? city : zoom === 1 ? czech : europe
            })`,
            position: "absolute",
            left: "30vw",
            backgroundRepeat: "no-repeat",
          }}
        ></div>*/
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
      <>
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
          <div style={{ flex: 1, marginLeft: "12%" }}>
            <Flow
              game={game}
              zoom={zoom}
              nodes={nodes}
              setNodes={setNodes}
              onNodesChange={onNodesChange}
            />
          </div>
        </div>
      </>
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
