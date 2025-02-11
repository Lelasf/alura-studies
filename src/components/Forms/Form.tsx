import style from "./Form.module.scss";
import { Component } from "react";
import Button from "../Button/Button";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

class Form extends Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que voce quer estudar"
            required
            value={this.state.task}
            onChange={(e) => {
              this.setState({ ...this.setState, task: e.target.value });
            }}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min=" 00:00:00"
            max="01:30:00"
            required
            value={this.state.time}
            onChange={(e) => {
              this.setState({ ...this.state, time: e.target.value });
            }}
            onClick={(e) => {
              const target = e.target as HTMLInputElement;
              target.showPicker();
            }}
          />
        </div>
        <Button text="Adicionar" type="submit" />
      </form>
    );
  }
}

export default Form;
