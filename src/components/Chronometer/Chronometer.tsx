import style from "./Chronometer.module.scss";
import Button from "../Button/Button";
import Clock from "./Clock";

export default function Chronometer() {
  return (
    <div className={style.chronometer}>
      <h3 className={style.title}>Escolha um card e inicie o cronômetro</h3>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button text="Iniciar" />
    </div>
  );
}
