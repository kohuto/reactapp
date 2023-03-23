import { useState, useEffect } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Packet from "../../Packet/Packet";

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
        "Jeden z kabelů na cestě se poškodil. Internetová síť se nám kvůli tomu rozpadla na dvě části. Mezi těmito částmi už nevede žádná další cesta, proto se paket nemůže do messenger serveru dostat. Je to stejné, jako když městem protéká řeka a z jedné části města do druhé vede pouze jeden most. Kdyby se tento most rozbil, tak bychom se nemohli z jedné části města do druhé dostat. Naše internetová síť je právě takové město a poškozený kabel je ten “most”. Takových “mostů” je ale v naší cvičné internetové síti více. Podívej se na síť a spočítej, kolik bychom museli do sítě přidat nových cest, aby v síti nebyl žádný “most”. "
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
          from="194.200.5.136"
          to="51.247.206.27"
          path={["102.80.143.201", "10.5.112.134", "71.20.12.201"]}
          color="#666666"
          speed={11}
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
      setAlertMessage("výborně");
      setGameAfterModalClose("noGame");
    } else {
      setAlertMessage("nope");
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
