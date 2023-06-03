import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BasicModal from "../basicModal";
import Typography from "@mui/material/Typography";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";

export default function NextLevelModal({ content, setGame, game }) {
  let messageLines = content;
  if (typeof content === "string") {
    messageLines = content.split("\n").map((line, index) => (
      <Typography key={index} id="modal-modal-description" sx={{ mt: 2 }}>
        {line}
      </Typography>
    ));
  }

  const getNextLevelType = () => {
    const itemIndex = stockData.findIndex((item) => item.type === game);
    if (itemIndex !== -1) {
      if (itemIndex + 1 < stockData.length)
        return stockData[itemIndex + 1].type;
      else return stockData[0].type;
    }
    return null;
  };

  function IconLabelButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          endIcon={<NavigateNextIcon />}
          onClick={() => setGame(getNextLevelType())}
        >
          Další úkol
        </Button>
      </Stack>
    );
  }

  function ContentNextLevel() {
    return (
      <>
        <div>{messageLines}</div>
        <div>
          <IconLabelButtons />
        </div>
      </>
    );
  }
  return <BasicModal content={<ContentNextLevel />} />;
}
