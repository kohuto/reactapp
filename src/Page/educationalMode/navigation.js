import Sidebar from "./Sidebar/sidebar";
import QuizzComponents from "./QuizzComponents/Quizzes";
import Dialog from "../DialogWindow/dialogWindow";
import PlaygroundSpeedDial from "./QuizzHelp/quizzHelp";
import { useState } from "react";
import "./style.css";
import { stockData } from "../../Data/Quizzes/dataQuizzes";

function ActivityNavigation({game}) {
    const gameItem = stockData.find((item) => item.type === game);
    return (
        <>
            <div className="activity-navigation"> {gameItem ? gameItem.navigation : "Hra nebyla nalezena"}</div>
           
        </>
    );
}

export default ActivityNavigation;
