import React, { useState } from "react";
import "./Components.css";
import "react-slideshow-image/dist/styles.css";
import CloseOpen from "./closeOpenWindow";

const listOfServers = [
  "server1",
  "server2",
  "server3",
]; /* TODO: zde budou IP adresy serverů */
const listOfClients = ["client1", "client2", "client3"];

function CreatePacketComponent({ setGame }) {
  const handleSubmit = () => {
    if (
      id1 &&
      id2 &&
      id3 &&
      start1 &&
      start2 &&
      start3 &&
      content1 &&
      content2 &&
      content3 &&
      end1 &&
      end2 &&
      end3
    ) {
      if (
        start1 === start2 &&
        start2 === start3 &&
        listOfClients.includes(start1)
      ) {
        if (end1 === end2 && end2 === end3 && listOfServers.includes(end1)) {
          if (
            (id1 === "1" && content1 === "AHOJ HON") ||
            (id1 === "2" && content1 === "ZO, JAK ") ||
            (id1 === "3" && content1 === "SE MÁŠ?")
          ) {
            if (
              (id2 === "1" && content2 === "AHOJ HON") ||
              (id2 === "2" && content2 === "ZO, JAK ") ||
              (id2 === "3" && content2 === "SE MÁŠ?")
            ) {
              if (
                (id3 === "1" && content3 === "AHOJ HON") ||
                (id3 === "2" && content3 === "ZO, JAK ") ||
                (id3 === "3" && content3 === "SE MÁŠ?")
              ) {
                setGame();
              }
            }
          }
        }
      }
    }
  };
  /* first form */
  const [id1, setId1] = useState("");
  const [start1, setStart1] = useState("");
  const [end1, setEnd1] = useState("");
  const [content1, setContent1] = useState("");
  /* second form */
  const [id2, setId2] = useState("");
  const [start2, setStart2] = useState("");
  const [end2, setEnd2] = useState("");
  const [content2, setContent2] = useState("");

  /* third form */
  const [id3, setId3] = useState("");
  const [start3, setStart3] = useState("");
  const [end3, setEnd3] = useState("");
  const [content3, setContent3] = useState("");

  return (
    <>
      <CloseOpen
        content={
          <>
            <div className="message-into-create-packet">
              <p>Pošli zprávu: AHOJ HONZO, JAK SE MÁŠ?</p>
            </div>
            <Slideshow
              setEnd={setGame}
              id1={id1}
              id2={id2}
              id3={id3}
              setId1={setId1}
              setId2={setId2}
              setId3={setId3}
              start1={start1}
              start2={start2}
              start3={start3}
              setStart1={setStart1}
              setStart2={setStart2}
              setStart3={setStart3}
              end1={end1}
              end2={end2}
              end3={end3}
              setEnd1={setEnd1}
              setEnd2={setEnd2}
              setEnd3={setEnd3}
              content1={content1}
              content2={content2}
              content3={content3}
              setContent1={setContent1}
              setContent2={setContent2}
              setContent3={setContent3}
            />
            <button
              className="check-button close-open-window"
              onClick={handleSubmit}
            >
              Zkontrolovat
            </button>
          </>
        }
      />
    </>
  );
}

function InsidePacket(props) {
  return (
    <>
      <div className="create-packets-form-container">
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="ID paketu"
            value={props.id}
            onChange={(e) => props.setId(e.target.value)}
          />
        </div>
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="Odesílatel"
            value={props.start}
            onChange={(e) => props.setStart(e.target.value)}
          />
        </div>
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="Příjemce"
            value={props.end}
            onChange={(e) => props.setEnd(e.target.value)}
          />
        </div>
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="Obsah paketu"
            value={props.content}
            onChange={(e) => props.setContent(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

function Slideshow(props) {
  const [index, setIndex] = useState(0);

  return (
    <div className="create-packets-slideshow">
      <div
        className="create-packets-slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="create-packets-slide">
          <InsidePacket
            id={props.id1}
            start={props.start1}
            end={props.end1}
            content={props.content1}
            setId={props.setId1}
            setStart={props.setStart1}
            setEnd={props.setEnd1}
            setContent={props.setContent1}
          />
        </div>
        <div className="create-packets-slide">
          <InsidePacket
            id={props.id2}
            start={props.start2}
            end={props.end2}
            content={props.content2}
            setId={props.setId2}
            setStart={props.setStart2}
            setEnd={props.setEnd2}
            setContent={props.setContent2}
          />
        </div>
        <div className="create-packets-slide">
          <InsidePacket
            id={props.id3}
            start={props.start3}
            end={props.end3}
            content={props.content3}
            setId={props.setId3}
            setStart={props.setStart3}
            setEnd={props.setEnd3}
            setContent={props.setContent3}
          />
        </div>
      </div>

      <div className="create-packets-slideshowDots">
        <div
          className={`create-packets-slideshowDot${
            index === 0 ? " active" : ""
          }`}
          onClick={() => {
            setIndex(0);
          }}
        >
          Paket 1
        </div>
        <div
          className={`create-packets-slideshowDot${
            index === 1 ? " active" : ""
          }`}
          onClick={() => {
            setIndex(1);
          }}
        >
          Paket 2
        </div>
        <div
          className={`create-packets-slideshowDot${
            index === 2 ? " active" : ""
          }`}
          onClick={() => {
            setIndex(2);
          }}
        >
          Paket 3
        </div>
      </div>
    </div>
  );
}
export default CreatePacketComponent;
