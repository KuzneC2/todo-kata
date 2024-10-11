import React, { Component } from 'react'
import { Footer } from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import './App.css'
import Task from '../Task/Task'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataTasks: [
        { id: 1, status: 'completed', description: 'Completed task', timeCreated: 'created 17 seconds ago' },
        { id: 2, status: 'editing', description: 'Editing task', timeCreated: 'created 5 minutes ago' },
        { id: 3, status: '', description: 'Active task', timeCreated: 'created 5 minutes ago' }
      ]
    }
  }


  changeStatus = (id) => {

    this.setState((prevState) => ({
      dataTasks: prevState.dataTasks.map((task) => {
        if (task.id == id) {
          if (task.status == '') {
            return { ...task, status: 'completed' }
          }
          else if (task.status == 'completed') {
            return { ...task, status: '' }
          }
        }
        else {
          return task
        }
      })
    }))
  };

  deleteTask = (id) => {
    this.setState(({ dataTasks }) => {
      const idx = dataTasks.findIndex(el => el.id === id);
      console.log(idx, id)
      return {
        dataTasks: [...dataTasks.slice(0, idx), ...dataTasks.slice(idx + 1)]
      }
    })
  }


  render() {
    const { dataTasks } = this.state
    return (
      <>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm></NewTaskForm>
          </header>
          <section className="main">
            <TaskList
              dataTasks={dataTasks}
              toggleStatusTodo={this.changeStatus}
              onDeleted={this.deleteTask}
            ></TaskList>
            <Footer></Footer>
          </section>
        </section>
      </>
    )
  }
}


export default App
