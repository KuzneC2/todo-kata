import React from "react"
import Task from "../Task/Task"

export function TaskList() {
    return (
        <>
            <ul className="todo-list">
                <Task status='completed' description='Completed task' timeCreated='created 17 seconds ago'></Task>

                <Task status='editing' description='Editing task' timeCreated='created 5 minutes ago'></Task>
                
                <Task description='Active task' timeCreated='created 5 minutes ago'></Task>

            </ul>
        </>
    )
}

export default TaskList