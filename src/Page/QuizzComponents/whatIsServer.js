import ZoomButtons from "./zoomButtons";
import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import web from "../../images/serverscontent/website-design.png";
import video from "../../images/serverscontent/multimedia.png";
import picture from "../../images/serverscontent/picture.png";
import server from "../../images/nodes/server.jpg";
import CloseOpen from "./closeOpenWindow";

function WhatIsServerComponent({ zoomIn, zoomOut }) {
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);
  const element3Ref = useRef(null);
  const element4Ref = useRef(null);
  const [touching14, setTouching14] = useState(false);
  const [touching24, setTouching24] = useState(false);
  const [touching34, setTouching34] = useState(false);
  const [filledServer, setFilledServer] = useState(0);

  const checkTouching = useCallback(() => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;
    const element3 = element3Ref.current;
    const element4 = element4Ref.current;

    if (element1 && element4) {
      const touching = areElementsTouching(element1, element4);
      setTouching14(touching);
    }
    if (element2 && element4) {
      const touching = areElementsTouching(element2, element4);
      setTouching24(touching);
    }
    if (element3 && element4) {
      const touching = areElementsTouching(element3, element4);
      setTouching34(touching);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkTouching();
    }, 100); // Check every 100 milliseconds

    return () => clearInterval(intervalId);
  }, [checkTouching]);

  const areElementsTouching = (element1, element2) => {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    const touching = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );

    return touching;
  };

  useEffect(() => {
    if (touching14) {
      element1Ref.current.style.display = "none";
      setFilledServer(filledServer + 1);
    }
    if (touching24) {
      element2Ref.current.style.display = "none";
      setFilledServer(filledServer + 1);
    }
    if (touching34) {
      element3Ref.current.style.display = "none";
      setFilledServer(filledServer + 1);
    }
  }, [touching14, touching24, touching34]);
  return (
    <>
      {filledServer < 3 ? (
        <>
          <div
            className="fille-server-1"
            ref={element4Ref}
            style={{
              backgroundImage: `url(${server})`,
            }}
          ></div>
          <CloseOpen
            content={
              <>
                <p className="fill-server-task">
                  Uploadni soubory do správného serveru. Upload provedeš
                  přetažením souboru do serveru.
                </p>
                <div className="what-is-server-container">
                  <DraggableComponent refProp={element1Ref} imageUrl={web} />
                  <DraggableComponent
                    refProp={element2Ref}
                    imageUrl={picture}
                  />
                  <DraggableComponent refProp={element3Ref} imageUrl={video} />
                </div>
              </>
            }
          />
        </>
      ) : (
        <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} />
      )}
    </>
  );
}

function DraggableComponent({ refProp, imageUrl }) {
  return (
    <Draggable>
      <div
        className="server-content"
        ref={refProp}
        style={{
          padding: "10px",
          zIndex: "45",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      ></div>
    </Draggable>
  );
}

export default WhatIsServerComponent;
