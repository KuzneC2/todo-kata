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

        // const { changeDirectoryAll, changeDirectoryActive, changeDirectoryComplete } = this.props
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