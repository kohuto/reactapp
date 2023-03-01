import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}
const itemsFromBackend1 = [
  { id: uuid(), content: "1:2:3:4:5:6:7:8" },
  { id: uuid(), content: "300.0.0.1" },
];

const itemsFromBackend2 = [
  { id: uuid(), content: "192.168.1.1" },
  { id: uuid(), content: "fe80::1" },
];
const itemsFromBackend3 = [
  { id: uuid(), content: "2001:0db8:85a3::8a2e:0370:7334" },
  { id: uuid(), content: "10.0.0.25" },
];
const columnsFromBackend = {
  [uuid()]: {
    name: "IPv4",
    items: itemsFromBackend1,
  },
  [uuid()]: {
    name: "IPv6",
    items: itemsFromBackend2,
  },
  [uuid()]: {
    name: "Nekorektní IP",
    items: itemsFromBackend3,
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
    if (destItems.length >= 3) return;
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

function SortIPAdresses() {
  function handleClick() {
    /* check IPv4 columns validity */
    const IPv4Column =
      columns[Object.keys(columns).find((key) => columns[key].name === "IPv4")];
    const IPv4Items = IPv4Column.items;
    let itemContents = IPv4Items.map((item) => item.content);
    if (
      !itemContents.includes("192.168.1.1") ||
      !itemContents.includes("10.0.0.25")
    )
      return;

    /* check IPv6 columns validity */
    const IPv6Column =
      columns[Object.keys(columns).find((key) => columns[key].name === "IPv6")];
    const IPv6Items = IPv6Column.items;
    itemContents = IPv6Items.map((item) => item.content);
    if (
      !itemContents.includes("fe80::1") ||
      !itemContents.includes("2001:0db8:85a3::8a2e:0370:7334")
    )
      return;

    /* check invalid columns validity */
    const IncorrectColumn =
      columns[
        Object.keys(columns).find(
          (key) => columns[key].name === "Nekorektní IP"
        )
      ];
    const IncorrectItems = IncorrectColumn.items;
    itemContents = IncorrectItems.map((item) => item.content);
    if (
      !itemContents.includes("1:2:3:4:5:6:7:8") ||
      !itemContents.includes("300.0.0.1")
    )
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
                <h2>{column.name}</h2>
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
                            width: 250,
                            minHeight: 270,
                            maxHeight: 270,
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
                                        padding: 16,
                                        margin: "0 0 8px 0",
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

export default SortIPAdresses;
