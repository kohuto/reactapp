import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

/**
 * A component that renders content that can be shown or hidden using a button.
 * The content is displayed with a fade-in/fade-out animation.
 * @param {object} content - The content to display.
 */
function CloseOpen({ content }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="close-open-container">
      <motion.div
        className={`close-open-content ${isVisible ? "show" : "hide"}`} // use the classes
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
