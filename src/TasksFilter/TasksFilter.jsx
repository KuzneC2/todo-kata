import PropTypes from "prop-types";
import React, { Component } from "react";

export default class TasksFilter extends Component {
    constructor() {
        super()
        this.state = {
            filterDirectory: 'all',
        }
    }


    changeDirectory(filter) {
        this.setState({
            filterDirectory: filter
        })
        if (filter === 'all') {
            this.props.changeDirectoryAll()
        }
        else if (filter === 'active') {
            this.props.changeDirectoryActive()
        }
        else if (filter === 'completed') {
            this.props.changeDirectoryComplete()
        }
    }

    render() {

        const { filterDirectory } = this.state;
        return (
            <ul className="filters">
                <li>
                    <button className={filterDirectory === 'all' ? 'selected' : ''}
                        onClick={() => this.changeDirectory('all')}
                    >All</button>
                </li>
                <li>
                    <button className={filterDirectory === 'active' ? 'selected' : ''}
                        onClick={() => this.changeDirectory('active')}
                    >Active</button>
                </li>
                <li>
                    <button className={filterDirectory === 'completed' ? 'selected' : ''}
                        onClick={() => this.changeDirectory('completed')}
                    >Completed</button>
                </li>
            </ul>
        )
    }
}

TasksFilter.propTypes ={
    changeDirectoryAll: PropTypes.func,
    changeDirectoryActive: PropTypes.func,
    changeDirectoryComplete: PropTypes.func
    
}

TasksFilter.defaultProps = {
    changeDirectoryAll: () => {},
    changeDirectoryActive: () => {},
    changeDirectoryComplete: () => {},
}