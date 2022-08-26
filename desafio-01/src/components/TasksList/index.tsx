import { Check, Trash } from "phosphor-react";
import styles from "./TasksList.module.css";

interface TasksList {
  id: string;
  content: string;
  isDone: boolean;
}

interface TasksListProps {
  task: TasksList;
  onDeleteTask: (id: string) => void;
  onChangeTaskState: (task: TasksList) => void;
}

export function TasksList({
  task,
  onDeleteTask,
  onChangeTaskState,
}: TasksListProps) {
  const { id, content, isDone } = task;
  const checkboxStyle = isDone
    ? `${styles.checkbox} ${styles.checked}`
    : styles.checkbox;

  const contentStyle = isDone ? styles.isDone : styles.notDone;

  return (
    <div className={styles.container}>
      <Check
        className={checkboxStyle}
        size={18}
        onClick={() => onChangeTaskState(task)}
      />
      <p className={contentStyle}>{content}</p>
      <button onClick={() => onDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
