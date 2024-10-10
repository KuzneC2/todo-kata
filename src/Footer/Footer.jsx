import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";

export function Footer(){
    return(
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter></TasksFilter>
            <button className="clear-completed">Clear completed</button>
          </footer>
    )
}