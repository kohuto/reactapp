import React, { useState, useEffect } from "react";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

function SmallCircle(props) {
  const { x, y, color, onClick, hidden } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: y + "px",
        left: x + "px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: color,
        border: "2px solid black",
        cursor: "pointer",
        visibility: hidden ? "hidden" : "visible",
      }}
      onClick={onClick}
    ></div>
  );
}
function RaceAroundWorld() {
  const [circles, setCircles] = useState([
    { x: 750, y: 100, color: "white" },
    { x: 810, y: 120, color: "white" },
    { x: 850, y: 170, color: "white" },
    { x: 865, y: 230, color: "white" },
    { x: 850, y: 290, color: "white" },
    { x: 810, y: 330, color: "white" },
    { x: 750, y: 350, color: "white" },
    { x: 690, y: 340, color: "white" },
    { x: 630, y: 290, color: "white" },
    { x: 615, y: 230, color: "white" },
    { x: 627, y: 170, color: "white" },
    { x: 670, y: 120, color: "white" },
  ]);
  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [disableClick, setDisableClick] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let intervalId;

    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else {
      setDisableClick(true);
      openModal(29);
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
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: "250px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
      >
        Click Count: {clickCount}
        <br />
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
    </div>
  );
}

export default RaceAroundWorld;
