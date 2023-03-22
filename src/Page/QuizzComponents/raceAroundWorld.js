import React, { useState, useEffect } from "react";
import globe from "../../images/Globe-Transparent-Background-PNG.png";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

function SmallCircle(props) {
  const { x, y, onClick, hidden } = props;

  return (
    <div
      className="race-around-world-small-circle"
      style={{
        top: y + "%",
        left: x + "%",
        visibility: hidden ? "hidden" : "visible",
      }}
      onClick={onClick}
    ></div>
  );
}
function RaceAroundWorld({ setGame }) {
  const [circles, setCircles] = useState([
    { x: 56, y: 16 },
    { x: 70, y: 44 },
    { x: 56, y: 74 },
    { x: 43, y: 44 },
  ]);
  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [disableClick, setDisableClick] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    let intervalId;

    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else {
      setDisableClick(true);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleCircleClick = (index) => {
    if (!disableClick) {
      setClickCount((prevCount) => prevCount + 1);
      setCurrentCircleIndex((prevIndex) => (prevIndex + 1) % circles.length);
    }
  };

  return (
    <>
      <div className="race-around-world-click-count">
        Click Count: {clickCount}
      </div>
      <div className="race-around-world-globe">
        <img src={globe} alt="" />
      </div>
      <div className="race-around-world-time-left">
        {!disableClick ? `Time Left: ${timeLeft}` : "Time's Up!"}
      </div>
      {circles.map((circle, index) => (
        <SmallCircle
          key={index}
          x={circle.x}
          y={circle.y}
          color={circle.color}
          hidden={index !== currentCircleIndex}
          onClick={() => handleCircleClick(index)}
        />
      ))}
      {disableClick && openModal(137)}
    </>
  );
}

function Finished({ clickCount, countCircles }) {
  return (
    <p>
      Perfektní! zvládl jsi za 20 sekund {clickCount / 4}x oběhnout zeměkouli!
      Ovšem internet je daleko rychlejší, internet by to zvládl 100x.
    </p>
  );
}
export default RaceAroundWorld;
