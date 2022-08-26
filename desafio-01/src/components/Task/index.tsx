import { TasksList } from "../TasksList";
import styles from "./Task.module.css";

interface TasksListProps {
  id: string;
  content: string;
  isDone: boolean;
}

interface TasksProps {
  tasks: TasksListProps[];
  onDeleteTask: (id: string) => void;
  onChangeTaskState: (task: TasksListProps) => void;
}

export function Task({ tasks, onDeleteTask, onChangeTaskState }: TasksProps) {
  const tasksDone = tasks.filter(task => task.isDone === true);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong> <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksDone}>
          <strong>Concluídas</strong>{" "}
          <span>
            {tasksDone.length} de {tasks.length}
          </span>
        </div>
      </header>

      {tasks.length > 0 ? (
        tasks.map(task => (
          <TasksList
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onChangeTaskState={onChangeTaskState}
          />
        ))
      ) : (
        <section className={styles.tasksEmpty}>
          <img src="/Clipboard.svg" alt="Clipboard" />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </section>
      )}
    </section>
  );
}
