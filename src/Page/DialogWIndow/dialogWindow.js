import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./dialogWindowStyle.css";

/**
 * Renders a modal dialog box that displays a message to the user.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Whether the dialog is open or not.
 * @param {function} props.setOpen - Function to set the state of `open`.
 * @param {string} props.alertMessage - The message to display in the dialog.
 * @param {function} props.setGame - Function to set the state of the game.
 * @param {object} props.gameAfterClose - The game state to set after the dialog is closed.
 * @returns {JSX.Element} - The JSX for the modal dialog box.
 */
function Dialog({ open, setOpen, alertMessage, setGame, gameAfterClose }) {
  /**
   * Handles closing the dialog box and setting the game state.
   */
  const handleClose = () => {
    setGame(gameAfterClose);
    setOpen(false);
  };

  // Split the message into lines by backslash n if it is a string.
  let messageLines = alertMessage;
  if (typeof alertMessage === "string") {
    messageLines = alertMessage.split("\n").map((line, index) => (
      <Typography key={index} id="modal-modal-description" sx={{ mt: 2 }}>
        {line}
      </Typography>
    ));
  }
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box className="dialog-window-container">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {messageLines}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Dialog;
