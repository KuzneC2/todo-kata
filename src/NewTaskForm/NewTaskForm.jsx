import React, { Component } from "react";
import './NewTaskForm.css'

export default class NewTaskForm extends Component {

    constructor() {
        super()
        this.state = {
            label: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    render() {
        return (
            <form className="form-todo"
                onSubmit={this.submitForm}
            >
                <input className="new-todo" placeholder="What needs to be done?" autoFocus
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button className="accept-todo" type="submit">Добавить</button>
            </form>
        )
    }
}
