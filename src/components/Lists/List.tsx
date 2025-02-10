import ListItems from "./ListItems";
import style from "./List.module.scss";

export default function List() {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>

      <ListItems />
    </aside>
  );
}
