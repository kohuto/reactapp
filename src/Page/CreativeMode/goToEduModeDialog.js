import Button from "@mui/material/Button";

function GoToEduModeDialog({
  setOpenModal,
  setIsLandingPage,
  setGameAfterModalClose,
  setAlertMessage,
}) {
  function handleGoToTasks() {
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
        <Button variant="outlined" onClick={() => handleGoToTasks()}>
          ÚKOLY
        </Button>
      </div>
    </div>
  );
}

export default GoToEduModeDialog;
