import style from "./App.module.scss";
import Form from "../components/Forms/Form";
import List from "../components/Lists/List";
import Chronometer from "../components/Chronometer/Chronometer";
import { useState } from "react";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();
  // const [completed, setCompleted] = useState();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((previousTasks) =>
        previousTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer selected={selected} completeTask={completeTask} />
    </div>
  );
}

export default App;
