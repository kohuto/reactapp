import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

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

  function ContentNextLevel() {
    return (
      <>
        <div>{messageLines}</div>
        <div className="next-level-button">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            onClick={() => setGame("noGame")}
          >
            Zpět do menu
          </Button>
          <Button
            variant="outlined"
            endIcon={<NavigateNextIcon />}
            onClick={() => setGame(getNextLevelType())}
          >
            Další úkol
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <Dialog
        open={true}
        onClose={() => setGame("noGame")}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <ContentNextLevel />
        </DialogContent>
      </Dialog>
    </>
  );
}