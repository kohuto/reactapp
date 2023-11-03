import React from "react";
import { useEffect } from "react";
import "./menu.css"; // Zajistěte, že máte v projektu tento CSS soubor

function Menu({ setChapter, setIsDocumentationMode }) {
  const chapters = [
    "INTERNET Z DÁLKY",
    "KLIENTI A PAKETY",
    "TYPY PŘIPOJENÍ",
    "SERVERY A KŘIŽOVATKY",
    "POSTAV SÍŤ",
  ];
  useEffect(() => {
    // Tento kód se spustí při každé změně komponenty
    window.scrollTo(0, 0); // Resetuje posouvání na začátek stránky
  }, []); // Prázdné pole závislostí znamená, že se kód spustí pouze jednou při prvním načtení komponenty

  return (
    <div className="menu">
      {[1, 2, 3, 4, 5].map((chapter) => (
        <button
          key={chapter}
          onClick={() => {
            setChapter(chapter);
            window.scrollTo(0, 0);
          }}
          className="menu-item"
        >
          {chapters[chapter - 1]}
        </button>
      ))}
      <button
        onClick={() => {
          setIsDocumentationMode(false);
          window.scrollTo(0, 0);
        }}
        className="menu-item"
      >
        ZPĚT DO APLIKACE
      </button>
    </div>
  );
}

export default Menu;
