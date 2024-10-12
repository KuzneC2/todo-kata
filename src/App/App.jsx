import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      dataTasks: [
        this.createTodoItem('Completed task', 'created 17 seconds ago', 'completed'),
        this.createTodoItem('Editing task', 'created 5 minutes ago', 'editing'),
        this.createTodoItem('Active task', 'created 5 minutes ago'),
      ],
      filteredDataTasks: [],
      filterName: 'all',
      editTaskId: null,
      editTaskDescription: ''
    }
  }

  createTodoItem = (description, timeCreated = 'now', status = '',) => {
    return {
      id: this.maxId++,
      description,
      timeCreated,
      status,
      defaulDescription: description
    }

  }

  addItem = (description) => {
    const newItem = this.createTodoItem(description);
    this.setState(({ dataTasks, filteredDataTasks, filterName }) => {
      const newArr = [newItem, ...dataTasks];
      const newFilterArr = [newItem, ...filteredDataTasks]

      if (filterName !== 'completed') {
        return {
          dataTasks: newArr,
          filteredDataTasks: newFilterArr
        }
      }
      else {
        return {
          dataTasks: newArr,
        };
      }
    });
  }

  editTask = (id) => {
    this.setState({
      filteredDataTasks: this.state.filteredDataTasks.map((task) => {
        if (task.id == id) {
          return { ...task, status: 'editing' }
        }
        else {
          return task
        }
      }),
    })
  }

  editSubmit = (e, id) => {
    e.preventDefault()
    const updateDataObject = this.state.dataTasks.filter(el => el.id === id)
    this.setState((prevState) => ({
      dataTasks: prevState.dataTasks.map(task => {
        if (task.id === id) {
          return { ...task, description: this.state.editTaskDescription, defaulDescription: this.state.editTaskDescription }
        }
        else {
          return task
        }
      }),
      filteredDataTasks: prevState.filteredDataTasks.map(task => {
        if (task.id === id) {
          return { ...task, description: this.state.editTaskDescription, status: updateDataObject.status, defaulDescription: this.state.editTaskDescription }
        }
        else {
          return task
        }
      }),
    }))

  }

  changeLabel = (e, id) => {
    this.setState({
      editTaskDescription: e.target.value
    })

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
      }),
      filteredDataTasks: prevState.filteredDataTasks.map((task) => {
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
    this.setState(({ dataTasks, filteredDataTasks }) => {
      const idx = dataTasks.findIndex(el => el.id === id);
      const idxFilt = filteredDataTasks.findIndex(el => el.id === id)
      return {
        dataTasks: [...dataTasks.slice(0, idx), ...dataTasks.slice(idx + 1)],
        filteredDataTasks: [...filteredDataTasks.slice(0, idxFilt), ...filteredDataTasks.slice(idxFilt + 1)]
      }
    })
  }

  componentDidMount = () => {
    this.setState({ filteredDataTasks: this.state.dataTasks })
  }

  changeListAll = () => {
    this.setState(() => ({
      filteredDataTasks: this.state.dataTasks,
      filterName: 'all'
    }))

  }

  changeListActive = () => {

    this.setState(() => ({
      filteredDataTasks: this.state.dataTasks.filter(el => el.status === ''),
      filterName: 'active'
    }))
  }

  changeListComplete = () => {
    this.setState(() => ({
      filteredDataTasks: this.state.dataTasks.filter(el => el.status === 'completed'),
      filterName: 'completed'
    }))

  }

  clearCompleateItems = () => {
    this.setState(() => ({
      dataTasks: this.state.dataTasks.filter(el => el.status !== 'completed'),
      filteredDataTasks: this.state.filteredDataTasks.filter(el => el.status !== 'completed')
    }))
  }


  render() {
    const { filteredDataTasks } = this.state
    const taskDone = this.state.dataTasks.filter(el => el.status === 'completed').length;
    const taskLeft = this.state.dataTasks.length - taskDone;
    return (
      <>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm
              addItem={this.addItem}
            ></NewTaskForm>
          </header>
          <section className="main">
            <TaskList
              filteredDataTasks={filteredDataTasks}
              toggleStatusTodo={this.changeStatus}
              onDeleted={this.deleteTask}
              onEdit={this.editTask}
              editSubmit={this.editSubmit}
              changeLabel={this.changeLabel}
            ></TaskList>
            <Footer
              itemsLeft={taskLeft}
              changeDirectoryAll={this.changeListAll}
              changeDirectoryActive={this.changeListActive}
              changeDirectoryComplete={this.changeListComplete}
              clearCompleateItems={this.clearCompleateItems}

            ></Footer>
          </section>
        </section>
      </>
    )
  }
}


export default App
