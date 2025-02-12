import style from "./Chronometer.module.scss";
import Button from "../Button/Button";
import Clock from "./Clock";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  completeTask: () => void;
}

export default function Chronometer({ selected, completeTask }: Props) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      completeTask();
    }, 1000);
  }

  return (
    <div className={style.chronometer}>
      <h3 className={style.title}>Escolha um card e inicie o cronômetro</h3>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button text="Iniciar!" onClick={() => countdown(time)} />
    </div>
  );
}
