import { ITask } from "../../types/task";
import style from "./ListItems.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function ListItems({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`
        ${style.item} 
        ${selected ? style.selectedItem : ""} 
        ${completed ? style.completedIcon : ""}`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluded} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
