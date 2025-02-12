import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesDozen, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondsDozen, secondsUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minutesDozen}</span>
      <span className={style.clockNumber}>{minutesUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondsDozen}</span>
      <span className={style.clockNumber}>{secondsUnit}</span>
    </>
  );
}
