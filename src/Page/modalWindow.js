import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function AlertDialog({ open, setOpen, alertMessage, setGame, gameAfterClose }) {
  const handleClose = () => {
    setGame(gameAfterClose);
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    display: "inline-block",
    width: "auto",
    height: "auto",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  let messageLines = alertMessage;
  console.log(typeof alertMessage);
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
        <Box sx={style}>
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

export default AlertDialog;
