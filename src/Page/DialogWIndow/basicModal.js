import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ content }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  // Splitting the content by new lines and mapping it to Typography components
  let messageLines = content;
  if (typeof content === "string") {
    messageLines = content.split("\n").map((line, index) => (
      <Typography key={index} id="modal-modal-description" sx={{ mt: 2 }}>
        {line}
      </Typography>
    ));
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {messageLines}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
