import Button from "@mui/material/Button";

const EDUCATIONAL_WELCOME_MESSAGE =
  "Vítej ve výukovém módu. \n Vlevo vidíš menu s pěti tématy. U každého tématu najdeš řadu aktivit. Pokud budeš chtít přejít do kreativního módu, klikni v menu na KREATIVNÍ MÓD.";
/**
 * Displays a dialog to prompt the user to go to the education mode.
 * @param {object} props - The component props.
 * @param {function} props.setOpenModal - A function to set the state of whether the modal is open or not.
 * @param {function} props.setIsCerativeMode - A function to set the state of whether the current page is the cerative mode or not.
 * @returns {JSX.Element} - The component's JSX code.
 */
function GoToEduModeDialog({ setOpenModal, setIsCreativeMode }) {
  /**
   * Handles the click event of the "ÚKOLY" button.
   * Sets the alert message, opens the modal, sets the game after modal close, and sets the landing page state.
   */
  function handleGoToTasksClick() {
    setOpenModal(false, EDUCATIONAL_WELCOME_MESSAGE);
    setIsCreativeMode();
  }
  return (
    <div>
      <p>
        Jestli chceš opravdu přejít na část s úkoly, zmáčkni tlačítko ÚKOLY.
      </p>
      <div className="go-to-task-buttons">
        <Button variant="outlined" onClick={() => setOpenModal(false)}>
          ZPĚT
        </Button>
        <Button variant="outlined" onClick={() => handleGoToTasksClick()}>
          ÚKOLY
        </Button>
      </div>
    </div>
  );
}

export default GoToEduModeDialog;
