import React from "react";

export function Task({ status = '', description, timeCreated } = props) {
    if (status == 'editing') {
        return (
            <li className={status}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{timeCreated}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
                <input type="text" className="edit" defaultValue="Editing task" />
            </li>
        )
    }
    else {
        return (
            <li className={status}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{timeCreated}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        )
    }
}

export default Task