import style from "./App.module.scss";
import Form from "../components/Forms/Form";
import List from "../components/Lists/List";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
