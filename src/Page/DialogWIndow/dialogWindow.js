import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./dialogWindowStyle.css";

function Dialog({ open, setOpen, alertMessage, setGame, gameAfterClose }) {
  const handleClose = () => {
    setGame(gameAfterClose);
    setOpen(false);
  };

  // Splitting the content by new lines and mapping it to Typography components
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
