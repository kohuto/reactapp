import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import web from "../../../../images/serverscontent/website-design.png";
import video from "../../../../images/serverscontent/multimedia.png";
import picture from "../../../../images/serverscontent/picture.png";
import server from "../../../../images/nodes/server-messenger.jpg";
import serverig from "../../../../images/nodes/serverig.png";
import serverweb from "../../../../images/nodes/serverwebhost.png";
import serveryoutube from "../../../../images/nodes/serveryoutube.png";
import CloseOpen from "../CloseOpenWindow/closeOpenWindow";
import "./style.css";

/**
 * Renders a component that allows the user to upload files to different servers by dragging and dropping.
 * @param {function} setOpenDialog - a function to set whether the dialog box is open or not
 * @returns {JSX.Element} - returns a JSX element representing the component
 */
function WhatIsServerComponent({ setOpenDialog }) {
  const webRef = useRef(null);
  const imgRef = useRef(null);
  const videoRef = useRef(null);
  const serverimgRef = useRef(null);
  const servernoRef = useRef(null);
  const servervideoRef = useRef(null);
  const serverwebRef = useRef(null);
  const [correctWebServerTouch, setcorrectWebServerTouch] = useState(false);
  const [correctInstagramServerTouch, setcorrectInstagramServerTouch] =
    useState(false);
  const [correctYouTubeServerTouch, setcorrectYouTubeServerTouch] =
    useState(false);
  const [filledServer, setFilledServer] = useState(0);
  const finalMessage =
    "Perfektní! Nezapomeň, že informace (webové stránky, obrázky, videa...), které hledáme na internetu, jsou uložená na serverech. O serverech si ještě budeme povídat.";
  const correctWebMessage =
    "Správně! Weby bývají často uložené na serverech, které patří tzv. poskytovatelům webhostingů.";
  const correctInstagramMessage =
    "Správně! Instagram bude mít na svém serveru uloženo spoustu obrázků";
  const correctYouTubeMessage =
    "Správně! Na YouTube serveru bude uloženo spoustu videí";

  /**
   * Checks whether the draggable components are touching the correct server components
   */
  const checkTouching = useCallback(() => {
    const web = webRef.current;
    const img = imgRef.current;
    const video = videoRef.current;
    const serverimg = serverimgRef.current;
    const servervideo = servervideoRef.current;
    const serverweb = serverwebRef.current;

    if (web && serverweb) {
      const touching = areElementsTouching(web, serverweb);
      setcorrectWebServerTouch(touching);
    }
    if (img && serverimg) {
      const touching = areElementsTouching(img, serverimg);
      setcorrectInstagramServerTouch(touching);
    }
    if (video && servervideo) {
      const touching = areElementsTouching(video, servervideo);
      setcorrectYouTubeServerTouch(touching);
    }
  }, []);

  /**
   * Checks whether the draggable components are touching the correct server components every 100 milliseconds
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkTouching();
    }, 100); // Check every 100 milliseconds

    return () => clearInterval(intervalId);
  }, [checkTouching]);

  /**
   * Checks whether all servers have been filled and opens the dialog box with the final message if they have
   */
  useEffect(() => {
    if (filledServer == 3) {
      setOpenDialog(true, finalMessage, "noGame");
    }
  }, [filledServer]);

  /**
   * Checks whether two HTML elements are touching each other
   * @param {HTMLElement} element1 - the first HTML element
   * @param {HTMLElement} element2 - the second HTML element
   * @returns {boolean} - returns true if the elements are touching, false otherwise
   */
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

  /**
   * Updates the state and opens the dialog box with the appropriate message if a draggable component touches the correct server component
   */
  useEffect(() => {
    if (correctWebServerTouch) {
      webRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setOpenDialog(true, correctWebMessage);
    }
    if (correctInstagramServerTouch) {
      imgRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setOpenDialog(true, correctInstagramMessage);
    }
    if (correctYouTubeServerTouch) {
      videoRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setOpenDialog(true, correctYouTubeMessage);
    }
  }, [
    correctWebServerTouch,
    correctInstagramServerTouch,
    correctYouTubeServerTouch,
  ]);
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

/**
 * Renders a server component that represents a server that files can be uploaded to
 * @param {Object} props - the component props
 * @param {function} props.refProp - a reference to the server component
 * @param {string} props.imageUrl - the URL of the image to display on the server
 * @param {string} props.servername - the name of the server
 * @returns {JSX.Element} - returns a JSX element representing the server component
 */
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

/**
 * Renders a draggable component that represents a file that can be dragged and dropped onto a server
 * @param {Object} props - the component props
 * @param {function} props.refProp - a reference to the draggable component
 * @param {string} props.imageUrl - the URL of the image to display on the draggable component
 * @returns {JSX.Element} - returns a JSX element representing the draggable component
 */
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
