import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GoToEduModeDialog from "./goToEduModeDialog";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RuleIcon from "@mui/icons-material/Rule";

function ServiceButtons({
  setIsLandingPage,
  setAlertMessage,
  setGameAfterModalClose,
  setOpenModal,
}) {
  const [isHintClicked, setIsHintClicked] = useState(false);
  const [isTasksClicked, setIsTasksClicked] = useState(false);

  function handleShowHint() {
    setIsHintClicked(true);
    setAlertMessage(
      "Toto je interaktivní mód, ve kterém je skoro vše dovoleno. Vpravo nahoře můžeš přidat různé prvky do sítě. Přidání provedeš tak, že na daný prvek klikneš, on se poté objeví v mapě. S přidanými prvky můžeš hýbat a umisťovat je na libovolnou pozici. Také můžeš přidávat nové cesty tak, že klikneš na jeden z černých puntíků u prvku a poté kllikneš na černý puntík u jiného prvku, se kterým ho chceš propojit. Vlevo dole můžeš poslat paket. Paket pošleš tak, že napíšeš IP adresu odesílatele (klient, který je připojený k internetu) a IP adresu příjemce (server). Vpravo dole je tlačítko, které tě přemístí do hlavní části aplikace, ve které je připraveno velké množství úkolů."
    );
    setGameAfterModalClose("noGame");
    setOpenModal(true);
  }

  function handleShowTasks() {
    setAlertMessage(
      <GoToEduModeDialog
        setIsLandingPage={setIsLandingPage}
        setOpenModal={setOpenModal}
        setGameAfterModalClose={setGameAfterModalClose}
        setAlertMessage={setAlertMessage}
      />
    );
    setGameAfterModalClose("noGame");
    setOpenModal(true);
    setIsTasksClicked(true);
  }

  return (
    <div className="lp-service-buttons-container">
      <Tooltip title="NÁPOVĚDA" placement="top">
        <IconButton onClick={() => handleShowHint()}>
          <Badge badgeContent="!" color="primary" invisible={isHintClicked}>
            <QuestionMarkIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="PŘEJDI NA ÚKOLY" placement="top">
        <IconButton onClick={() => handleShowTasks()}>
          <Badge badgeContent="!" color="primary" invisible={isTasksClicked}>
            <RuleIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ServiceButtons;
