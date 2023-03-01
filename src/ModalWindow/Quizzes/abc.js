import { useState } from "react";

function abcOnclick(i, correct, answerID, setColor) {
  var button = document.getElementById(answerID);
  if (i == correct) {
    setColor("green");
    var modal = document.getElementById("correctABC");
    modal.style.display = "block";
  } else setColor("red");
}

function ABC(props) {
  const [colorA, setColorA] = useState("grey");
  const [colorB, setColorB] = useState("grey");
  const [colorC, setColorC] = useState("grey");
  const correct = props.correct;
  const id1 = "answerA".concat(props.a).concat(props.i);
  const id2 = "answerB".concat(props.b).concat(props.i);
  const id3 = "answerC".concat(props.c).concat(props.i);

  return (
    <>
      <div className="answers">
        <button
          className="answer"
          id={id1}
          onClick={() => abcOnclick(1, correct, id1, setColorA)}
          style={{ backgroundColor: colorA }}
        >
          {props.a}
        </button>
        <button
          className="answer"
          id={id2}
          onClick={() => abcOnclick(2, correct, id2, setColorB)}
          style={{ backgroundColor: colorB }}
        >
          {props.b}
        </button>
        <button
          className="answer"
          id={id3}
          onClick={() => abcOnclick(3, correct, id3, setColorC)}
          style={{ backgroundColor: colorC }}
        >
          {props.c}
        </button>
      </div>
    </>
  );
}

export default ABC;
