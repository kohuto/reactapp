import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import DefaultPackets from "../../Packet";
import { findPacketsData } from "../../Packet/data/findServerPackets";
import { edgesData } from "../../Flow/data/edges";
import { gatewaysZoom2Data } from "../../Flow/data/gateway/gatewayZoom2";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}
function ShortestPathComponent({ setGame, content }) {
  return (
    <>
      <CloseOpen content={<InputBox setGame={setGame} />} />
      <CircleList
        coordinates={getEdgeCenterCooridnates(
          createEdgesArray(edgesData),
          gatewaysZoom2Data
        )}
      />
    </>
  );
}

function InputBox({ setGame }) {
  const [length, setLength] = useState("");

  const handleSubmit = () => {
    if (length === "20") {
      openModal(29);
      setGame();
    } else {
      alert("Toto není nejkratší délka");
    }
  };
  return (
    <>
      <div>
        <label>Délka nejkratší cesty:</label>
        <input
          type="text"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Zkontrolovat</button>
    </>
  );
}

function createEdgesArray(edgeData) {
  const edges = [];
  for (const edge of edgeData) {
    edges.push([edge.from, edge.to]);
  }
  console.log(edges.length);
  return edges;
}

function getEdgeCenterCooridnates(edges, nodes) {
  const xyPairs = [];

  for (const edge of edges) {
    const [id1, id2] = edge;
    const node1 = nodes.find((node) => node.id === id1);
    const node2 = nodes.find((node) => node.id === id2);

    if (node1 && node2) {
      const centerX = (node1.x + node2.x) / 2;
      const centerY = (node1.y + node2.y) / 2;
      xyPairs.push([centerX, centerY]);
    }
  }
  console.log(xyPairs.length);
  console.log(xyPairs);

  return xyPairs;
}

function CircleList({ coordinates }) {
  const circleStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "black",
  };

  return coordinates.map((coordinate, i) => (
    <div
      key={`circle-${i}`}
      style={{
        ...circleStyle,
        position: "absolute",
        zIndex: 20,
        left: `${coordinate[0] + 25}px`,
        top: `${coordinate[1] + 25}px`,
      }}
    ></div>
  ));
}

export default ShortestPathComponent;
