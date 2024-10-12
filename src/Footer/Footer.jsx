import React, { Component } from "react";
import TasksFilter from "../TasksFilter/TasksFilter";

export default class Footer extends Component {
    render() {
        const { itemsLeft, changeDirectoryAll, changeDirectoryActive, changeDirectoryComplete, clearCompleateItems } = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">{itemsLeft} items left</span>
                <TasksFilter
                    changeDirectoryAll={() => changeDirectoryAll()}
                    changeDirectoryActive={() => changeDirectoryActive()}
                    changeDirectoryComplete={() => changeDirectoryComplete()}
                ></TasksFilter>
                <button className="clear-completed"
                    onClick={() => clearCompleateItems()}
                >Clear completed</button>
            </footer>
        )
    }
}