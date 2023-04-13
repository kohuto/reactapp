import Button from "@mui/material/Button";
import "./style.css";

const WELCOME_MESSAGE =
  "Vítej! Pokud se chceš dozvědět, jak funguje internet, klikni na VÝUKOVÝ MÓD. Pokud chceš tvořit, klikni na KREATIVNÍ MÓD.";
const CREATIVE_WELCOME_MESSAGE =
  "Vítej v kreativním módu. \n Pokud nebudeš vědět, co máš dělat, klikni vpravo dole na nápovědu. Pokud budeš chtít přejít do výukového módu, klikni na ikonku vedle nápovědy.";
const EDUCATIONAL_WELCOME_MESSAGE =
  "Vítej ve výukovém módu. \n Vlevo vidíš menu s pěti tématy. U každého tématu najdeš řadu aktivit. Pokud budeš chtít přejít do kreativního módu, klikni v menu na KREATIVNÍ MÓD.";

function LandingPage({ setMode, setOpenDialog }) {
  function handleGoToEduMode() {
    setOpenDialog(true, EDUCATIONAL_WELCOME_MESSAGE);
    setMode("educational");
  }
  function handleGoToCreativeMode() {
    setOpenDialog(true, CREATIVE_WELCOME_MESSAGE);
    setMode("creative");
  }
  return (
    <div className="landing-page-container">
      <p>{WELCOME_MESSAGE}</p>
      <div className="button-container">
        <Button
          variant="outlined"
          onClick={handleGoToEduMode}
          className="start-button"
        >
          VÝUKOVÝ MÓD
        </Button>{" "}
        <Button
          variant="outlined"
          onClick={handleGoToCreativeMode}
          className="start-button"
        >
          KREATIVNÍ MÓD
        </Button>
      </div>
    </div>
  );
}
export default LandingPage;
