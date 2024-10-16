import React, { Component } from "react";
import TasksFilter from "../TasksFilter/TasksFilter";
import PropTypes from "prop-types";

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

Footer.propTypes = {
    itemsLeft: PropTypes.node,
    changeDirectoryAll: PropTypes.func,
    changeDirectoryActive: PropTypes.func,
    changeDirectoryComplete: PropTypes.func,
    clearCompleateItems: PropTypes.func
}

Footer.defaultProps = {
    itemsLeft: '',
    changeDirectoryAll: () => { },
    changeDirectoryActive: () => { },
    changeDirectoryComplete: () => { },
    clearCompleateItems: () => { }
}