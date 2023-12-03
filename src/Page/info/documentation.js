import Menu from "./menu.js";
import "./style.css";
import FirstChapter from "./chapters/chapter-1";
import SecondChapter from "./chapters/chapter-2";
import ThirdChapter from "./chapters/chapter-3";
import FourthChapter from "./chapters/chapter-4";
import FifthChapter from "./chapters/chapter-5";
import { useState } from "react";
function Documentation({ setIsDocumentationMode }) {
  const [chapter, setChapter] = useState(1);
  return (
    <>
      <Menu
        setChapter={setChapter}
        setIsDocumentationMode={setIsDocumentationMode}
      />
      <div className="chapter-container">
        {chapter === 1 && <FirstChapter />}
        {chapter === 2 && <SecondChapter />}
        {chapter === 3 && <ThirdChapter />}
        {chapter === 4 && <FourthChapter />}
        {chapter === 5 && <FifthChapter />}
      </div>
    </>
  );
}

export default Documentation;
