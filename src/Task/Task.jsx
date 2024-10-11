import React, { Component } from "react";


export default class Task extends Component {
    render() {
        const { status, description, timeCreated, toggleStatusTodo, onDeleted } = this.props

        const isCompleted = status === 'completed'
        if (status == 'editing') {
            return (
                <li className={status}>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>
                            <span className="description">{description}</span>
                            <span className="created">{timeCreated}</span>
                        </label>
                        <button className="icon icon-edit"
                            ></button>
                        <button className="icon icon-destroy"
                        onClick={onDeleted}></button>
                    </div>
                    <input type="text" className="edit" defaultValue="Editing task" />
                </li>
            )
        }
        else {
            return (
                <li className={status}>
                    <div className="view">

                        <input className="toggle" type="checkbox"
                            onClick={toggleStatusTodo}
                            defaultChecked={isCompleted} />

                        <label>
                            <span className="description">{description}</span>
                            <span className="created">{timeCreated}</span>
                        </label>
                        <button className="icon icon-edit"
                            
                        ></button>
                        <button className="icon icon-destroy"
                        onClick={onDeleted}></button>
                    </div>
                </li>
            )
        }
    }
}