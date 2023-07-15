import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./style.css";

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

  // get name of next level
  const getNextLevelType = () => {
    const itemIndex = stockData.findIndex((item) => item.type === game);
    if (itemIndex !== -1) {
      if (itemIndex + 1 < stockData.length)
        return stockData[itemIndex + 1].type;
      else return stockData[0].type;
    }
    return null;
  };

  // set game to next level name
  const handleGoToNextLevel = () => {
    const nextLevelType = getNextLevelType();
    setGame(nextLevelType);
  };

  const handleDisplayTask = () => {};

  const TooltipTitle = styled("span")({
    fontSize: "1.2rem", // Set the desired font size here
  });

  return (
    <div className="quizz-help-container">
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
              icon={<NavigateNextIcon />}
              tooltipTitle={<TooltipTitle>Další úkol</TooltipTitle>}
              onClick={handleGoToNextLevel}
            />
            <SpeedDialAction
              icon={<ArrowBackIcon />}
              tooltipTitle={<TooltipTitle>Zpět do menu</TooltipTitle>}
              onClick={handleBackToMenu}
            />
          </StyledSpeedDial>
        </Box>
      </Box>
    </div>
  );
}
