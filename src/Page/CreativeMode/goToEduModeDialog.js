import Button from "@mui/material/Button";

/**
 * Displays a dialog to prompt the user to go to the education mode.
 * @param {object} props - The component props.
 * @param {function} props.setOpenModal - A function to set the state of whether the modal is open or not.
 * @param {function} props.setIsLandingPage - A function to set the state of whether the current page is the landing page or not.
 * @param {function} props.setGameAfterModalClose - A function to set the game to be played after the modal is closed.
 * @param {function} props.setAlertMessage - A function to set the alert message.
 * @returns {JSX.Element} - The component's JSX code.
 */
function GoToEduModeDialog({
  setOpenModal,
  setIsLandingPage,
  setGameAfterModalClose,
  setAlertMessage,
}) {
  /**
   * Handles the click event of the "ÚKOLY" button.
   * Sets the alert message, opens the modal, sets the game after modal close, and sets the landing page state.
   */
  function handleGoToTasksClick() {
    setAlertMessage(
      "Vítej v hlavní části aplikace. V levé části obrazovky vidíš menu, ve kterém najdeš velké množství úkolů, díky který se dozvíš, jak funguje internet. Úkoly jsou rozděleny do 5 kategorií a je doporučeno je procházet postupně. Pokud se chceš vrátit zpátky do kretivního módu, klikni v menu na tlačítko KREATIVNÍ MÓD. Zavři toto okno a vrhni se na úkoly."
    );
    setOpenModal(true);
    setGameAfterModalClose("noGame");
    setIsLandingPage();
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
