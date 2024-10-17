import { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

export default class TaskList extends Component {
  render() {
    const {
      filteredDataTasks, toggleStatusTodo, onDeleted, onEdit, editSubmit, changeLabel,
    } = this.props;

    return (

            <ul className="todo-list">
                {filteredDataTasks.map((task) => (
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

    );
  }
}

TaskList.propTypes = {
  filteredDataTasks: PropTypes.array,
  toggleStatusTodo: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  editSubmit: PropTypes.func,
  changeLabel: PropTypes.func,
};
TaskList.defaultProps = {
  filteredDataTasks: [],
  toggleStatusTodo: () => { },
  onDeleted: () => { },
  onEdit: () => { },
  editSubmit: () => { },
  changeLabel: () => { },
};
