import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CardHeader from "@mui/material/CardHeader"; // Přidání importu CardHeader


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
  display: "flex",
  flexDirection: "column",
  
};

export default function BasicModal({ content, header }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

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
      >
        <Fade in={open}>
          <Box sx={style}>
          <CardHeader title={header} sx={{ textAlign: 'left' }}/>
            {messageLines}
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <Button
                variant="outlined"
                endIcon={<NavigateNextIcon />}
                onClick={handleClose}
                sx={{ mt: 2 }}
              >
                POKRAČOVAT
              </Button>
            </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
