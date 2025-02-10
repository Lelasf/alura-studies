import style from "./List.module.scss";
import ListItems from "./ListItems";

export default function List() {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ListItems />
    </aside>
  );
}
