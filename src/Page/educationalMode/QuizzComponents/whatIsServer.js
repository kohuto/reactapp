import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import web from "../../../images/serverscontent/website-design.png";
import video from "../../../images/serverscontent/multimedia.png";
import picture from "../../../images/serverscontent/picture.png";
import server from "../../../images/nodes/server-messenger.jpg";
import serverig from "../../../images/nodes/serverig.png";
import serverweb from "../../../images/nodes/serverwebhost.png";
import serveryoutube from "../../../images/nodes/serveryoutube.png";
import CloseOpen from "./closeOpenWindow";

function WhatIsServerComponent({
  setOpenModal,
  setAlertMessage,
  game,
  setGameAfterModalClose,
}) {
  const webRef = useRef(null);
  const imgRef = useRef(null);
  const videoRef = useRef(null);
  const serverimgRef = useRef(null);
  const servernoRef = useRef(null);
  const servervideoRef = useRef(null);
  const serverwebRef = useRef(null);
  const [touching14, setTouching14] = useState(false);
  const [touching24, setTouching24] = useState(false);
  const [touching34, setTouching34] = useState(false);
  const [filledServer, setFilledServer] = useState(0);

  const checkTouching = useCallback(() => {
    const web = webRef.current;
    const img = imgRef.current;
    const video = videoRef.current;
    const serverimg = serverimgRef.current;
    const servervideo = servervideoRef.current;
    const serverweb = serverwebRef.current;
    const serverno = servernoRef.current;

    if (web && serverweb) {
      const touching = areElementsTouching(web, serverweb);
      setTouching14(touching);
    }
    if (img && serverimg) {
      const touching = areElementsTouching(img, serverimg);
      setTouching24(touching);
    }
    if (video && servervideo) {
      const touching = areElementsTouching(video, servervideo);
      setTouching34(touching);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkTouching();
    }, 100); // Check every 100 milliseconds

    return () => clearInterval(intervalId);
  }, [checkTouching]);

  useEffect(() => {
    if (filledServer == 3) {
      setAlertMessage(
        "Perfektní! Nezapomeň, že informace (webové stránky, obrázky, videa...), které hledáme na internetu, jsou uložená na serverech. O serverech si ještě budeme povídat."
      );
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    }
  }, [filledServer]);

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
      webRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setAlertMessage(
        "Správně! Weby bývají často uložené na serverech, které patří tzv. poskytovatelům webhostingů."
      );
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
    if (touching24) {
      imgRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setAlertMessage(
        "Správně! Instagram bude mít na svém serveru uloženo spoustu obrázků"
      );
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
    if (touching34) {
      videoRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setAlertMessage("Správně! Na YouTube serveru bude uloženo spoustu videí");
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
  }, [touching14, touching24, touching34]);
  return (
    <>
      <UploadServer
        refProp={servernoRef}
        imageUrl={server}
        servername="no-upload"
      />
      <UploadServer
        servername="upload-video"
        refProp={servervideoRef}
        imageUrl={serveryoutube}
      />
      <UploadServer
        servername="upload-image"
        refProp={serverimgRef}
        imageUrl={serverig}
      />
      <UploadServer
        servername="upload-web"
        refProp={serverwebRef}
        imageUrl={serverweb}
      />

      <CloseOpen
        content={
          <>
            <p className="fill-server-task">
              Uploadni soubory do správného serveru. Upload provedeš přetažením
              souboru do serveru.
            </p>
            <div className="what-is-server-container">
              <DraggableComponent refProp={webRef} imageUrl={web} />
              <DraggableComponent refProp={imgRef} imageUrl={picture} />
              <DraggableComponent refProp={videoRef} imageUrl={video} />
            </div>
          </>
        }
      />
    </>
  );
}

function UploadServer({ refProp, imageUrl, servername }) {
  return (
    <div
      className={servername}
      ref={refProp}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
  );
}

function DraggableComponent({ refProp, imageUrl }) {
  return (
    <Draggable>
      <div
        className="server-content"
        ref={refProp}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      ></div>
    </Draggable>
  );
}

export default WhatIsServerComponent;
