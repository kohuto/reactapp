import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GoToEduModeDialog from "./goToEduModeDialog";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RuleIcon from "@mui/icons-material/Rule";

/**
 * This component renders two service buttons for the Creative mode page: a help button and a go to tasks button.
 * The help button displays an interactive mode dialog when clicked, while the go to tasks button opens a modal
 * with buttons that reffer to Edu mode page.
 * @param {Function} setIsCreativeMode - A function to set the value of the isCreativeMode state in the parent component.
 * @param {Function} setOpenModal - A function to set the value of the openModal state in the parent component.
 * @returns {JSX.Element} - Returns JSX that renders two IconButton components wrapped in a Tooltip component.
 */
function ServiceButtons({ setIsCreativeMode, setOpenModal }) {
  /**
   * A state hook that stores whether the help button has been clicked or not.
   */
  const [isHintClicked, setIsHintClicked] = useState(false);
  /**
   * A state hook that stores whether the go to tasks button has been clicked or not.
   */
  const [isTasksClicked, setIsTasksClicked] = useState(false);
  const hintMessage =
    "Toto je interaktivní mód, ve kterém je skoro vše dovoleno. Vpravo nahoře můžeš přidat různé prvky do sítě. Přidání provedeš tak, že na daný prvek klikneš, on se poté objeví v mapě. S přidanými prvky můžeš hýbat a umisťovat je na libovolnou pozici. Také můžeš přidávat nové cesty tak, že klikneš na jeden z černých puntíků u prvku a poté kllikneš na černý puntík u jiného prvku, se kterým ho chceš propojit. Vlevo dole můžeš poslat paket. Paket pošleš tak, že napíšeš IP adresu odesílatele (klient, který je připojený k internetu) a IP adresu příjemce (server). Vpravo dole je tlačítko, které tě přemístí do hlavní části aplikace, ve které je připraveno velké množství úkolů.";

  /**
   * Handles the click event of the help button. Sets the value of isHintClicked to true and displays a help dialog.
   */
  function handleShowHintClick() {
    setIsHintClicked(true);
    setOpenModal(true, hintMessage, "noGame");
  }

  /**
   * Handles the click event of the go to tasks button. Sets the value of isTasksClicked to true.
   */
  function handleGoToEduModeClick() {
    setOpenModal(
      true,
      <GoToEduModeDialog
        setIsCreativeMode={setIsCreativeMode}
        setOpenModal={setOpenModal}
      />,
      "noGame"
    );
    setIsTasksClicked(true);
  }

  return (
    <div className="lp-service-buttons-container">
      <Tooltip title="NÁPOVĚDA" placement="top">
        <IconButton onClick={() => handleShowHintClick()}>
          <Badge badgeContent="!" color="primary" invisible={isHintClicked}>
            <QuestionMarkIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="PŘEJDI NA ÚKOLY" placement="top">
        <IconButton onClick={() => handleGoToEduModeClick()}>
          <Badge badgeContent="!" color="primary" invisible={isTasksClicked}>
            <RuleIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ServiceButtons;
