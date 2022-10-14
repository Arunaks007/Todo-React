import "./styles.css";
import Todo from "../components/Todo";
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [id, setNewid] = useState(1);
  const [unmodifiedTask, setUnmodifiedTask] = useState([]);

  function addTask(name) {
    const newTask = { id: "todo-" + id, name, completed: false };
    setNewid((oldValue) => oldValue + 1);
    setTasks([...tasks, newTask]);
    setUnmodifiedTask([...unmodifiedTask, newTask]);
  }

  function isCompleted(id) {
    for (let i = 0; i < unmodifiedTask.length; i++) {
      if (id === unmodifiedTask[i].id) {
        Object.keys(unmodifiedTask[i]).forEach((key) => {
          if (key === "completed") {
            unmodifiedTask[i][key] = true;
          }
        });
      }
    }
    setTasks([...unmodifiedTask]);
    setUnmodifiedTask([...unmodifiedTask]);
  }

  function toDelete(id) {
    const afterDelete = unmodifiedTask.filter((value) => {
      return value.id !== id;
    });
    setTasks(afterDelete);
    setUnmodifiedTask(afterDelete);
  }

  function isClicked(tabName) {
    switch (tabName) {
      case filter[0]:
        setTasks(unmodifiedTask);
        break;
      case filter[1]:
        const active = unmodifiedTask.filter((value) => {
          return !value.completed;
        });
        setTasks(active);
        break;
      case filter[2]:
        const completed = unmodifiedTask.filter((value) => {
          return value.completed;
        });
        setTasks(completed);
        break;
      default:
        break;
    }
  }

  const filter = ["All", "Active", "Completed"];

  return (
    <div className="todoapp stack-large">
      <h1>To-do</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filter.map((value, index) => {
          return (
            <FilterButton
              name={value}
              key={index}
              isClicked={isClicked}
              state={tasks}
            />
          );
        })}
      </div>
      <h2 id="list-heading">
        {tasks.length + " "}
        {tasks.length <= 1 ? "task " : "tasks "}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((value, index) => {
          return (
            <Todo
              name={value.name}
              Completed={value.completed}
              id={value.id}
              isCompleted={isCompleted}
              toDelete={toDelete}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}
