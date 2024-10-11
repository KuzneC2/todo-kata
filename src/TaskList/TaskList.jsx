import React, { Component } from "react"
import Task from "../Task/Task"

export default class TaskList extends Component {

   
    render() {
        const { dataTasks, toggleStatusTodo, onDeleted } = this.props;

        return (

            <ul className="todo-list">
                {dataTasks.map(task => (
                    <Task
                        key={task.id}
                        status={task.status}
                        description={task.description}
                        timeCreated={task.timeCreated}
                        toggleStatusTodo={() => toggleStatusTodo(task.id)}
                        onDeleted={() => onDeleted(task.id)}
                    />
                ))}


            </ul>

        )
    }
}
