import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InsidePacket from "./insidePacket";
import "./style.css";

/**
 * A slideshow component that renders multiple copies of the InsidePacket component
 * based on the number of slides specified.
 *
 * @param {Object} props - The component props
 * @param {Array} props.id - An array of IDs for each packet
 * @param {function} props.setId - A function to update the IDs array
 * @param {Array} props.order - An array of orders for each packet
 * @param {function} props.setOrder - A function to update the orders array
 * @param {Array} props.senderIP - An array of sender IPs for each packet
 * @param {function} props.setSenderIP - A function to update the sender IPs array
 * @param {Array} props.recipientIP - An array of recipient IPs for each packet
 * @param {function} props.setRecipientIP - A function to update the recipient IPs array
 * @param {Array} props.content - An array of content for each packet
 * @param {function} props.setContent - A function to update the content array
 */
function Slideshow(props) {
  const [index, setIndex] = useState(0);

  return (
    <div className="create-packets-slideshow">
      <div
        className="create-packets-slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {[1, 2, 3].map((number, index) => (
          <div className="create-packets-slide">
            <InsidePacket
              key={index}
              number={number}
              id={props.id}
              setId={props.setId}
              order={props.order}
              setOrder={props.setOrder}
              senderIP={props.senderIP}
              setSenderIP={props.setSenderIP}
              recipientIP={props.recipientIP}
              setRecipientIP={props.setRecipientIP}
              content={props.content}
              setContent={props.setContent}
            />
          </div>
        ))}
      </div>

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group small"
        className="create-packet-buttons"
        size="small"
      >
        {["One", "Two", "Three"].map((text, index) => (
          <Button key={index} onClick={() => setIndex(index)}>
            {text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Slideshow;
