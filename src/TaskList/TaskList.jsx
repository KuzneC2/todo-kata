import React, { Component } from "react"
import Task from "../Task/Task"

export default class TaskList extends Component {


    render() {
        const { filteredDataTasks, toggleStatusTodo, onDeleted, onEdit, editSubmit, changeLabel, defaulDescription } = this.props;

        return (

            <ul className="todo-list">
                {filteredDataTasks.map(task => (
                    <Task
                        key={task.id}
                        status={task.status}
                        description={task.description}
                        timeCreated={task.timeCreated}
                        toggleStatusTodo={() => toggleStatusTodo(task.id)}
                        onDeleted={() => onDeleted(task.id)}
                        onEdit={() => onEdit(task.id)}
                        editSubmit={(e) => editSubmit(e, task.id)}
                        changeLabel={(e) => changeLabel(e, task.id)}
                        defaulDescription={task.defaulDescription}
                    />
                ))}


            </ul>

        )
    }
}
