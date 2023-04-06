import { useState, useEffect } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Packet from "../../../Packet/Packet";

function ProblemWithPath({
  setOpenModal,
  game,
  setGameAfterModalClose,
  setAlertMessage,
  setIsDistroyedProblemWithPath,
  isDestroyed,
}) {
  useEffect(() => {
    const timerId1 = setTimeout(() => {
      setIsDistroyedProblemWithPath(true);
    }, 5000);

    const timerId2 = setTimeout(() => {
      setAlertMessage(
        "Jeden z kabelů na cestě se poškodil a internetová síť se rozpadla na dvě části. Mezi částmi teď nevede žádná další cesta, proto se paket nemůže do messenger serveru dostat. \n Je to stejné, jako když městem protéká řeka a z jedné části města do druhé vede pouze jeden most. Kdyby se tento most rozbil, tak bychom se nemohli z jedné části města do druhé dostat. \n Síť, která se rozpadla na dvě části je právě takové rozdělené město a poškozený kabel je rozbitý “most”. Když se podíváš na síť, tak zjistíš, že takových “mostů” je tam více. Napiš do textového pole, kolik bychom museli do sítě přidat nových cest, aby v síti nebyl žádný “most”."
      );
      setGameAfterModalClose(game);
      setOpenModal(true);
    }, 6000);
    return () => {
      clearTimeout(timerId1);
      clearTimeout(timerId2);
    };
  }, []);

  return (
    <>
      {!isDestroyed && (
        <Packet
          key="packet4789546"
          content="ahoj"
          from="102.80.143.201"
          to="71.20.12.201"
          path={["102.80.143.201", "10.5.112.134", "71.20.12.201"]}
          color="#666666"
          speed={11}
          repeat={0}
          marginleft={20}
          nodes={[]}
        ></Packet>
      )}
      {isDestroyed && (
        <CloseOpen
          content={
            <InputBox
              setOpenModal={setOpenModal}
              game={game}
              setGameAfterModalClose={setGameAfterModalClose}
              setAlertMessage={setAlertMessage}
            />
          }
        />
      )}
    </>
  );
}

function InputBox({
  setOpenModal,
  game,
  setGameAfterModalClose,
  setAlertMessage,
}) {
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (count === "3") {
      setAlertMessage(
        "Perfektní. Je potřeba, aby v síti nebyly žádné kabely, které by byly “mostem”. Jak jsem viděli. Když se takový kabel poškodí, tak by se nešlo například dostat do některých serveru. Dokonce by se mohlo stát, že by třeba poškození takového kabelu mohlo odříznout od internetu celé město nebo stát."
      );
      setGameAfterModalClose("noGame");
    } else {
      setAlertMessage(
        "Toto není správná odpověď. Potřebuješ spočítat počet cest, které je nutné přidat, aby v síti nebyly žádné mosty."
      );
      setGameAfterModalClose(game);
    }
    setOpenModal(true);
  };
  return (
    <>
      <div className="problem-with-path-container">
        <label>Kolik cest musíme přidat:</label>
        <TextField
          id="standard-basic"
          label="počet"
          variant="standard"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          className="check-button"
        >
          ZKONTROLUJ
        </Button>
      </div>
    </>
  );
}

export default ProblemWithPath;
