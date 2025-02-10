import style from "./App.module.scss";
import Form from "../components/Forms/Form";
import List from "../components/Lists/List";
import Chronometer from "../components/Chronometer/Chronometer";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Chronometer />
    </div>
  );
}

export default App;
