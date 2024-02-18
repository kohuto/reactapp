import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import web from "../../../../images/serverscontent/website-design.png";
import video from "../../../../images/serverscontent/multimedia.png";
import picture from "../../../../images/serverscontent/picture.png";
import chat from "../../../../images/serverscontent/chat.png";
import serverchat from "../../../../images/nodes/server-messenger.svg";
import serverig from "../../../../images/nodes/serverig.svg";
import serverweb from "../../../../images/nodes/serverwebhost.svg";
import serveryoutube from "../../../../images/nodes/serveryoutube.svg";
import BasicModal from "../../../DialogWindow/basicModal";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import "./style.css";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";

const FINAL_MESSAGE =
  "Perfektní! Nezapomeň, že informace (webové stránky, obrázky, videa...), které hledáme na internetu, jsou uložená na serverech.";
const CORRECT_WEB_MESSAGE =
  "Správně! Weby bývají často uložené na serverech, které patří tzv. poskytovatelům webhostingů.";
const CORRECT_INSTAGRAM_MESSAGE =
  "Správně! Instagram bude mít na svém serveru uloženou spoustu obrázků";
const CORRECT_YOUTUBE_MESSAGE =
  "Správně! Na YouTube serveru bude uložená spousta videí";
const CORRECT_CHAT_MESSAGE =
  "Správně! Na WhatsApp serveru bude uložená spousta zpráv";

function WhatIsServerComponent({ info, setGame }) {
  const webRef = useRef(null);
  const chatRef = useRef(null);
  const imgRef = useRef(null);
  const videoRef = useRef(null);
  const serverimgRef = useRef(null);
  const servernoRef = useRef(null);
  const servervideoRef = useRef(null);
  const serverchatRef = useRef(null);
  const serverwebRef = useRef(null);
  const [correctWebServerTouch, setcorrectWebServerTouch] = useState(false);
  const [correctChatServerTouch, setcorrectChatServerTouch] = useState(false);
  const [correctInstagramServerTouch, setcorrectInstagramServerTouch] =
    useState(false);
  const [correctYouTubeServerTouch, setcorrectYouTubeServerTouch] =
    useState(false);
  const [filledServer, setFilledServer] = useState(0);
  const [infoMessage, setInfoMessage] = useState("");
  const [isCorrectlyFilled, setIsCorrectlyFilled] = useState(false);

  const [introTutorialOpen, setIntroTutorialOpen] = useState(true)

  /**
   * Checks whether the draggable components are touching the correct server components
   */
  const checkTouching = useCallback(() => {
    const web = webRef.current;
    const chat = chatRef.current;
    const img = imgRef.current;
    const video = videoRef.current;
    const serverimg = serverimgRef.current;
    const servervideo = servervideoRef.current;
    const serverweb = serverwebRef.current;
    const serverchat = serverchatRef.current;

    if (web && serverweb) {
      const touching = areElementsTouching(web, serverweb);
      setcorrectWebServerTouch(touching);
    }
    if (chat && serverchat) {
      const touching = areElementsTouching(chat, serverchat);
      setcorrectChatServerTouch(touching);
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
      setInfoMessage(CORRECT_WEB_MESSAGE);
      setIsCorrectlyFilled(true);
    }
    if (correctChatServerTouch) {
      chatRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setInfoMessage(CORRECT_CHAT_MESSAGE);
      setIsCorrectlyFilled(true);
    }
    if (correctInstagramServerTouch) {
      imgRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setInfoMessage(CORRECT_INSTAGRAM_MESSAGE);
      setIsCorrectlyFilled(true);
    }
    if (correctYouTubeServerTouch) {
      videoRef.current.style.display = "none";
      setFilledServer(filledServer + 1);
      setInfoMessage(CORRECT_YOUTUBE_MESSAGE);
      setIsCorrectlyFilled(true);
    }
  }, [
    correctWebServerTouch,
    correctInstagramServerTouch,
    correctYouTubeServerTouch,
    correctChatServerTouch,
  ]);
  return (
    <>
      {filledServer == 3 && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          game={info.type}
          setGame={setGame}
        />
      )}
      {
        introTutorialOpen && (
          <AlertDialog
          content={"U každé aktivity je na levé straně rozbalovací nabídka. V ní, kromě dalších akcí, primárně najdete pod ikonou otazníku ZADÁNÍ aktivity."}
          closeAction={() => setIntroTutorialOpen(false)}
        />
        )
      }
      {isCorrectlyFilled && (
        <AlertDialog
          content={infoMessage}
          closeAction={() => setIsCorrectlyFilled(false)}
        />
      )}
      <BasicModal content={info.content} header={info.header}/>
      <UploadServer
        servername="upload-chat"
        refProp={serverchatRef}
        imageUrl={serverchat}
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
      <div className="what-is-server-container">
        <p>Soubory:</p>
        <DraggableComponent refProp={imgRef} imageUrl={picture} />
        <DraggableComponent refProp={videoRef} imageUrl={video} />
        <DraggableComponent refProp={chatRef} imageUrl={chat} />
      </div>
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
