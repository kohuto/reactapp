import { useState } from "react";
import { motion } from "framer-motion";
import "./Components.css";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "hidden",
  },
};

function CloseOpen({ content }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="close-open-container">
      <motion.div
        className="close-open-content"
        animate={isVisible ? show : hide}
      >
        {content}
      </motion.div>
      <div className="close-open-controls">
        <button
          className="pulse-button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "SKRYJ" : "UKAŽ"}
        </button>
      </div>
    </div>
  );
}

export default CloseOpen;
