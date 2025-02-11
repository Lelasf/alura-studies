import { ITask } from "../../types/task";
import style from "./List.module.scss";
import ListItems from "./ListItems";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <ListItems selectTask={selectTask} {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}
