import Button from "@mui/material/Button";
import "./style.css";

const WELCOME_MESSAGE =
  "Vítej! Právě jsi objevil aplikaci, díky které máš možnost zjistit, jak funguje internet. Aplikace obsahuje dva módy - VÝUKOVÝ a KREATIVNÍ. Pokud nevíš nic o fungování internetu, začni VÝUKOVÝM módem. Pokud chceš pouze zkusit vytvořit internetovou síť, tak bez váhání přejdi do KREATIVNÍHO módu. Později se můžeš mezi módy přepínat.";
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
