import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}
const itemsFromBackend1 = [
  { id: uuid(), content: "WiFi" },
  { id: uuid(), content: "WiFi" },
  { id: uuid(), content: "WiFi" },
  { id: uuid(), content: "Ethernet" },
  { id: uuid(), content: "Ethernet" },
  { id: uuid(), content: "Data" },
  { id: uuid(), content: "Data" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Typ připojení",
    items: itemsFromBackend1,
  },
  [uuid()]: {
    name: "Jste na mobilu doma.",
    items: [],
  },
  [uuid()]: {
    name: "Jste na mobilu v lese.",
    items: [],
  },
  [uuid()]: {
    name: "Jste na počítači ve škole.",
    items: [],
  },
  [uuid()]: {
    name: "Jste na notebooku doma.",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function HowToConnect() {
  function handleClick() {
    /* check mobile at home columns validity */
    const mobileHomeColumn =
      columns[
        Object.keys(columns).find(
          (key) => columns[key].name === "Jste na mobilu doma."
        )
      ];
    const mobileHomeItems = mobileHomeColumn.items;
    let itemContents = mobileHomeItems.map((item) => item.content);
    if (!itemContents.includes("WiFi") || !itemContents.includes("Data"))
      return;

    /* check mobile in forest columns validity */
    const mobileForestColumn =
      columns[
        Object.keys(columns).find(
          (key) => columns[key].name === "Jste na mobilu v lese."
        )
      ];
    const mobileForestItems = mobileForestColumn.items;
    itemContents = mobileForestItems.map((item) => item.content);
    if (!itemContents.includes("Data")) return;

    /* check computer at school columns validity */
    const computerSchoolColumn =
      columns[
        Object.keys(columns).find(
          (key) => columns[key].name === "Jste na počítači ve škole."
        )
      ];
    const computerSchoolItems = computerSchoolColumn.items;
    itemContents = computerSchoolItems.map((item) => item.content);
    if (!itemContents.includes("WiFi") || !itemContents.includes("Ethernet"))
      return;
    /* check computer at home columns validity */
    const computerHomeColumn =
      columns[
        Object.keys(columns).find(
          (key) => columns[key].name === "Jste na notebooku doma."
        )
      ];
    const computerHomeItems = computerHomeColumn.items;
    itemContents = computerHomeItems.map((item) => item.content);
    if (!itemContents.includes("WiFi") || !itemContents.includes("Ethernet"))
      return;
    openModal(35);
  }
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2 style={{ fontSize: "0.9rem" }}>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: "13vw",
                            minHeight: 395,
                            maxHeight: 395,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 1,
                                        margin: "0 0 5px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <div className="sort-ip-submit">
        <button onClick={handleClick}>ZKONTROLOVAT</button>
      </div>
    </>
  );
}

export default HowToConnect;
