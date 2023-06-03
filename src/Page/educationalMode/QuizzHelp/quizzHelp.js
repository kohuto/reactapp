import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "fixed",
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

export default function PlaygroundSpeedDial({ setGame, game }) {
  const [open, setOpen] = useState(false);

  function getGameHint() {
    return stockData.find((item) => item.type === game).hint;
  }

  const hint = getGameHint();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackToMenu = () => {
    setGame("noGame");
  };

  const handleDisplayTask = () => {};

  const TooltipTitle = styled("span")({
    fontSize: "1.2rem", // Set the desired font size here
  });

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "relative", mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<SpeedDialIcon />}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          onClick={handleDisplayTask}
          direction="down"
        >
          <SpeedDialAction
            icon={<QuestionMarkIcon />}
            tooltipTitle={<TooltipTitle>{hint}</TooltipTitle>}
          />
          <SpeedDialAction
            icon={<ArrowBackIcon />}
            tooltipTitle={<TooltipTitle>Zpět do menu</TooltipTitle>}
            onClick={handleBackToMenu}
          />
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
