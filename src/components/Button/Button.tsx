import { Component } from "react";
import style from "./Button.module.scss";
class Button extends Component {
  render() {
    return (
      <button type="button" className={style.btn}>
        Botao
      </button>
    );
  }
}

export default Button;
