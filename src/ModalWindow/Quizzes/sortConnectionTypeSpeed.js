import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DnD.css";
import "./quizzesStyles.css";

const finalSpaceCharacters = [
  {
    id: "satelit",
    name: "satelit",
  },
  {
    id: "wifi",
    name: "wifi",
  },
  {
    id: "mobilniData",
    name: "mobilni data",
  },
];
function CheckCorectness(i) {
  if (
    i[0].name == "wifi" &&
    i[1].name == "mobilni data" &&
    i[2].name == "satelit"
  ) {
    var modal = document.getElementById("correctSortConnectionTypeSpeed");
    modal.style.display = "block";
  }
}
function SortConnectionTypeSpeed(props) {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <h3>{props.question}</h3>
      <button onClick={() => CheckCorectness(characters)}>
        OVĚŘ SPRÁVNOST
      </button>
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name }, index) => {
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
      </header>
    </div>
  );
}

export default SortConnectionTypeSpeed;
