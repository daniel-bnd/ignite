import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { Task } from "./components/Task";

import styles from "./App.module.css";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TasksProps {
  id: string;
  content: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: "2",
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: "3",
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: "4",
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true,
    },
    {
      id: "5",
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true,
    },
  ]);
  const [newTaskInput, setNewTaskInput] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      content: newTaskInput,
      isDone: false,
    };
    setTasks(state => [newTask, ...state]);
    setNewTaskInput("");
  }

  function handleDeleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  function handleChangeTaskState(task: TasksProps) {
    task.isDone = !task.isDone;
    const newTask = tasks.map(t => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(newTask);
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskInput}
            onChange={e => setNewTaskInput(e.target.value)}
            required
          />
          <button type="submit" disabled={!newTaskInput}>
            <strong>Criar</strong>
            <PlusCircle size={16} />
          </button>
        </form>
        <Task
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onChangeTaskState={handleChangeTaskState}
        />
      </section>
    </>
  );
}
