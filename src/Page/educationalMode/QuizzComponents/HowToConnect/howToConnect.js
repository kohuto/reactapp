import { useState } from "react";
import CheckboxGroup from "./multipleCheckbox";
import Button from "@mui/material/Button";
import BasicModal from "../../../DialogWindow/basicModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import "./style.css";

const FINAL_MESSAGE =
  "Perfektní! Mobilní telefony se mohou připojit pomocí mobilních dat nebo wifi sítě. Máme je pořád u sebe a chodíme s nimi po celém bytě, proto by nebylo moc vhodné mít telefon připojen pomocí kabelu. \n Oproti tomu počítače doma nebo ve škole většinou leží na stole a mají v sobě přímo zásuvku pro zapojení kabelu. Proto v tomto případě není problém se pomocí kabelu připojit. Samozřejmě se můžeme připojit i pomocí WiFi signálu. \n Když ale budeme na procházce v přírodě, tak budeme WiFi signál nebo kabely hledat těžko, proto nám zde nezbývá nic jiného než využít datové připojení prostřednictvím mobilního operátora.";
const ERROR_MESSAGE = "Něco není správně";

function HowToConnect({ info, setGame }) {
  /**
   * Handle submit event when user clicks the "ZKONTROLOVAT" button.
   * If the correct checkboxes are checked, set dialog state to show success message.
   * Otherwise, set overlay dialog state to show error message.
   */
  const [isFilledCorrectly, setIsFilledCorrectly] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const handleSubmit = () => {
    if (
      checkboxes1.checkbox1 &&
      !checkboxes1.checkbox2 &&
      checkboxes1.checkbox3 &&
      !checkboxes2.checkbox1 &&
      !checkboxes2.checkbox2 &&
      checkboxes2.checkbox3 &&
      checkboxes3.checkbox1 &&
      checkboxes3.checkbox2 &&
      !checkboxes3.checkbox3 &&
      checkboxes4.checkbox1 &&
      checkboxes4.checkbox2 &&
      !checkboxes4.checkbox3
    ) {
      setIsFilledCorrectly(true);
    } else {
      setIsIncorrect(true);
    }
  };
  const [checkboxes1, setCheckboxes1] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [checkboxes2, setCheckboxes2] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [checkboxes3, setCheckboxes3] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [checkboxes4, setCheckboxes4] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  /**
   * Handle checkbox change event for the checkbox group.
   * @param {Object} event - Checkbox change event.
   */
  const handleCheckboxChange1 = (event) => {
    const { name, checked } = event.target;
    setCheckboxes1({
      ...checkboxes1,
      [name]: checked,
    });
  };

  /**
   * Handle checkbox change event for the checkbox group.
   * @param {Object} event - Checkbox change event.
   */
  const handleCheckboxChange2 = (event) => {
    const { name, checked } = event.target;
    setCheckboxes2({
      ...checkboxes2,
      [name]: checked,
    });
  };

  /**
   * Handle checkbox change event for the checkbox group.
   * @param {Object} event - Checkbox change event.
   */
  const handleCheckboxChange3 = (event) => {
    const { name, checked } = event.target;
    setCheckboxes3({
      ...checkboxes3,
      [name]: checked,
    });
  };

  /**
   * Handle checkbox change event for the checkbox group.
   * @param {Object} event - Checkbox change event.
   */
  const handleCheckboxChange4 = (event) => {
    const { name, checked } = event.target;
    setCheckboxes4({
      ...checkboxes4,
      [name]: checked,
    });
  };

  return (
    <>
      <BasicModal content={info.content} />
      {isFilledCorrectly && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
      {isIncorrect && (
        <AlertDialog
          content={ERROR_MESSAGE}
          closeAction={() => setIsIncorrect(false)}
        />
      )}
      <div className="how-to-connect-container">
        <div className="how-to-connect-column">
          <h5>mobil doma</h5>
          <CheckboxGroup
            checkboxes={checkboxes1}
            handleCheckboxChange={handleCheckboxChange1}
          />
        </div>
        <div className="how-to-connect-column">
          <h5> mobil v lese</h5>
          <CheckboxGroup
            checkboxes={checkboxes2}
            handleCheckboxChange={handleCheckboxChange2}
          />
        </div>
        <div className="how-to-connect-column">
          <h5> počítač ve škole</h5>
          <CheckboxGroup
            checkboxes={checkboxes3}
            handleCheckboxChange={handleCheckboxChange3}
          />
        </div>
        <div className="how-to-connect-column">
          <h5>notebook doma</h5>
          <CheckboxGroup
            checkboxes={checkboxes4}
            handleCheckboxChange={handleCheckboxChange4}
          />
        </div>
        <div className="start-quizz-button">
          <Button variant="outlined" onClick={handleSubmit}>
            ZKONTROLOVAT
          </Button>
        </div>
      </div>
    </>
  );
}

export default HowToConnect;
