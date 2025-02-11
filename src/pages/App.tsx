import style from "./App.module.scss";
import Form from "../components/Forms/Form";
import List from "../components/Lists/List";
import Chronometer from "../components/Chronometer/Chronometer";
import { useState } from "react";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Chronometer />
    </div>
  );
}

export default App;
