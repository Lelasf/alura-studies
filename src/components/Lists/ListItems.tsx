import { ITask } from "../../types/task";
import style from "./ListItems.module.scss";

export default function ListItems({
  task,
  time,
  selected,
  completed,
  id,
}: ITask) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
