import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState({ id: "", value: "", completed: false });

  const addTask = () => {
    if (newTask.value.trim() !== "") {
      var tempTask = newTask;
      tempTask.id = Math.floor(Math.random() * 1000);
      tempTask.value = newTask.value;
      tempTask.completed = false; 
      
      setTask(t => [...t, tempTask]);
      setNewTask({ value: "" }); 
    }
  };

  const deleteTask = (id) => {
    setTask(task.filter((task) => id !== task.id));
  };

  const completeTask = (id) => {
    setTask(task.map((task) =>
      task.id === id ? { ...task , completed: !task.completed } : task
    ));
  };

  const handleChange = (event) => {
    setNewTask({
      value: event.target.value
    });
  };

  return (
    <>
      <div className="list">
        <h5 className="title">To-Do List</h5>
        <input
          type="text"
          id="txt"
          placeholder="Add Your Task ..."
          value={newTask.value}
          onChange={handleChange}
        />
        <button id="addBtn" className="add-btn" onClick={addTask}>
          Add
        </button>
        <ol>
          {task.map((task) => (
            <li key={task.id} >
              <span id="txtt" className={task.completed ? "completed" : ""}>{task.value}</span>
              <button
                className="delete-btn"
                onClick={deleteTask.bind(null,task.id)}
              >
                Delete
              </button>
              <button
                className="com"
                onClick={() => completeTask(task.id)}
              >
                {task.completed ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
