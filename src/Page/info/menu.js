import React from "react";
import "./menu.css"; // Zajistěte, že máte v projektu tento CSS soubor

function Menu({ setChapter, setIsDocumentationMode }) {
  const chapters = [
    "INTERNET Z DÁLKY",
    "KLIENTI A PAKETY",
    "TYPY PŘIPOJENÍ",
    "SERVERY A KŘIŽOVATKY",
    "POSTAV SÍŤ",
  ];
  return (
    <div className="menu">
      {[1, 2, 3, 4, 5].map((chapter) => (
        <button
          key={chapter}
          onClick={() => setChapter(chapter)}
          className="menu-item"
        >
          {chapters[chapter - 1]}
        </button>
      ))}
      <button
        onClick={() => setIsDocumentationMode(false)}
        className="menu-item"
      >
        ZPĚT DO APLIKACE
      </button>
    </div>
  );
}

export default Menu;
