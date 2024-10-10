import { Footer } from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import './App.css'

function App() {

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm></NewTaskForm>
        </header>
        <section className="main">
          <TaskList>
          </TaskList>
          <Footer></Footer>
        </section>
      </section>
    </>
  )
}

export default App
