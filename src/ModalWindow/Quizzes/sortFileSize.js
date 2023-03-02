import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DnD.css";
import { motion } from "framer-motion";
/*https://github.com/thebikashweb/react-drag-drop-without-library/tree/master/src*/
/*bez pouziti knihovny*/
const finalFiles = [
  {
    id: "fotka",
    name: "obrazek.jpeg",
    thumb: "/images/kvn.png",
  },
  {
    id: "text",
    name: "text.txt",
    thumb: "/images/cz-01.png",
  },
  {
    id: "video",
    name: "video.mp4",
    thumb: "/images/gary.png",
  },
  {
    id: "hudba",
    name: "hudba.mp3",
    thumb: "/images/gary.png",
  },
];
function CheckCorectness(i) {
  if (
    i[0].name == "video.mp4" &&
    i[1].name == "hudba.mp3" &&
    i[2].name == "obrazek.jpeg" &&
    i[3].name == "text.txt"
  ) {
    var modal = document.getElementById("modal-window32");
    modal.style.display = "block";
  }
}
function SortFileSize(props) {
  const [files, updateCharacters] = useState(finalFiles);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(files);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <>
      <div className="container-sort">
        <div className="left-column">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {files.map(({ id, name }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>{name}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <div className="right-column">
          <div className="sort-files-button">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://drive.google.com/drive/folders/1r9sUnjSo26zLOQhS15xEPKM1PN6LxN7K?usp=share_link"
                target="_blank"
              >
                SOUBORY
              </a>
            </motion.div>
          </div>
          <div
            className="sort-files-button"
            onClick={() => CheckCorectness(files)}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              ZKONTROLUJ
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortFileSize;
