import "./modalWindow.css";
import { stockData } from "./dataQuizzes";
import Quizz from "./Quizz";

function closeModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "none";
}

function QuizzTemplate({ setGame, modalWindowID, quizzID }) {
  return (
    <>
      <h1 className="modal-window-heading">{stockData[quizzID].header}</h1>
      <p className="modal-window-content">{stockData[quizzID].content}</p>
      <h3 className="modal-window-question">{stockData[quizzID].question}</h3>
      <Quizz
        setGame={setGame}
        closeModal={() => closeModal(modalWindowID)}
        taskData={stockData[quizzID]}
        id={quizzID}
      />
    </>
  );
}

export default QuizzTemplate;
