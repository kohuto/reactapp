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
    "Vpravo nahoře klikni na zařízení a tím ho přidej do sítě. S přidanými prvky můžeš pohybovat. \n Přidej novou cestu kliknutím na zařízení a přetažením na jiné zařízení. \n Vlevo dole pošli paket. Vyber IP adresu odesílatele a příjemce a odešli. Odesílatel je klient, který je v dosahu WiFi nebo BTS věže - má nad hlavou ikonu WiFi. \n Vpravo dole najdeš tlačítko pro vstup do výukového módu.";

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
      <Tooltip title="VZDĚLÁVACÍ MÓD" placement="top">
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
