import { ITask } from "../../types/task";
import style from "./List.module.scss";
import ListItems from "./ListItems";



export default function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <ListItems task={item.task} time={item.time} key={index} />
        ))}
      </ul>
    </aside>
  );
}
