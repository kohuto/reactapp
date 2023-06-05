import { useState, useEffect } from "react";
import ReactFlow from "reactflow";
import { jitterEdges } from "../../../../Data/Flow/edges/latencyEdges";
import { latencyNodes } from "../../../../Data/Flow/latency";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import BasicModal from "../../../DialogWindow/basicModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import "./style.css";

// The correct sequence of node IDs to be clicked in order to complete the task
const CORRECT_PATH = [
  "2620:0:862:ed1a::1",
  "147.32.3.202",
  "126.134.35.41",
  "71dd::ad48:7474:3412",
  "224.109.172.5",
  "81.119.95.47",
  "2bb6::ae76:435a::1246",
  "195.113.89.35",
];

// Error message to be displayed when the user clicks an incorrect node
const INCORRECT_CLICK_MESSAGE = "začni v klientovi a nepřeskakuj křižovatky";

/**
 * A component for measuring the latency of network nodes by clicking on them in a specified order.
 *
 * @param {function} setOpenDialog - A function for opening a dialog window to display results or error messages.
 * @returns A React component that renders a network graph and measures latency on node clicks.
 */
function LatencyComponent({ info, setGame }) {
  const [isIncorrectClick, setIsIncorrectClick] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  // State variable for counting the number of correctly clicked nodes
  const [countClickedJitter, setCountClickedJitter] = useState(0);

  // State variable for storing the timestamp of when the first node is clicked
  const [startTime, setStartTime] = useState(null);
  const [finalMessage, setFinalMessage] = useState("");
  /**
   * Event handler for when a node is clicked.
   * If the clicked node is the correct one in the sequence, the count of correctly clicked nodes is incremented.
   * If it is the first node in the sequence, the start time is recorded.
   * If it is an incorrect node, an error message is displayed in a dialog.
   *
   * @param {object} event - The event object representing the click event.
   * @param {object} node - The node object that was clicked.
   */
  const onNodeClick = (event, node) => {
    if (node.id === CORRECT_PATH[countClickedJitter]) {
      setCountClickedJitter(countClickedJitter + 1);
      const clickedNode = event.target;
      clickedNode.style.backgroundColor = "red";
      if (countClickedJitter === 0) {
        setStartTime(Date.now());
      }
    } else {
      setIsIncorrectClick(true);
    }
  };

  /**
   * Effect hook that triggers when the count of correctly clicked nodes changes.
   * If all nodes in the sequence have been clicked, the end time is recorded and the elapsed time is calculated.
   * A dialog is opened to display the results and provide feedback.
   */
  useEffect(() => {
    if (countClickedJitter === CORRECT_PATH.length) {
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000;
      setFinalMessage(
        `Perfektní! Tvá doba odezvy je ${elapsedTime} sekund \n Je dobré zmínit, že v roce 2023 je ideální doba odezvy 30-40 ms. Z toho vyplývá, že bys musel  ${Math.ceil(
          (elapsedTime * 1000) / 30
        )}x rychleji naklikat cestu dlouhou i několik kilometrů , abys dosáhl stejné rychlosti.`
      );
      setIsFinished(true);
    }
  }, [countClickedJitter]);

  return (
    <>
      <div className="latency-container">
        <BasicModal content={info.content} />
        {isFinished && (
          <NextLevelModal
            content={finalMessage}
            setGame={setGame}
            game={info.type}
          />
        )}
        {isIncorrectClick && (
          <AlertDialog
            closeAction={() => setIsIncorrectClick(false)}
            content={INCORRECT_CLICK_MESSAGE}
          />
        )}
        <ReactFlow
          nodes={latencyNodes}
          edges={jitterEdges}
          zoomOnScroll={false}
          panOnDrag={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          attributionPosition="top-right"
          onNodeClick={onNodeClick}
        />
      </div>
    </>
  );
}
export default LatencyComponent;
