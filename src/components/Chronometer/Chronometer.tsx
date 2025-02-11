import style from "./Chronometer.module.scss";
import Button from "../Button/Button";
import Clock from "./Clock";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
}

export default function Chronometer({ selected }: Props) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.chronometer}>
      <h3 className={style.title}>Escolha um card e inicie o cronômetro</h3>
      <p>Tempo: {time}</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button text="Iniciar" />
    </div>
  );
}
