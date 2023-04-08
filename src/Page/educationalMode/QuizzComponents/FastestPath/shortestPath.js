import CloseOpen from "../CloseOpenWindow/closeOpenWindow";
import InputBox from "./inputBox";
import "./style.css";

/**
 * ShortestPathComponent is a component that renders a CloseOpen component containing an InputBox component for entering a length value
 * @param {Object} setOpenDialog - A function that opens a dialog box to display a message to the user
 * @returns {JSX.Element} - A CloseOpen component containing an InputBox component for entering a length value
 */
function ShortestPathComponent({ setOpenDialog }) {
  return (
    <>
      <CloseOpen content={<InputBox setOpenDialog={setOpenDialog} />} />
    </>
  );
}

export default ShortestPathComponent;
