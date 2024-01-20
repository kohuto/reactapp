import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CardHeader from "@mui/material/CardHeader"; // Přidání importu CardHeader


export default function NextLevelModal({ content, setGame, game, header }) {
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
  const needHeader = ["whatIsClient", "whatIsGateway", "whatIsPacket"]
  function ContentNextLevel() {
    return (
      <>
        {needHeader.includes(game) && <CardHeader title={header} sx={{ textAlign: 'left' }}/>}
        <div>{messageLines}</div>
        <div className="next-level-button" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      
          <Button
            variant="outlined"
            endIcon={<NavigateNextIcon />}
            onClick={() => setGame(getNextLevelType())}
          >
            POKRAČOVAT
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <Dialog
        open={true}
        onClose={() => setGame(getNextLevelType())}
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
