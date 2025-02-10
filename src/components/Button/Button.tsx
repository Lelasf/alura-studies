import style from "./Button.module.scss";
import { Component } from "react";
class Button extends Component<{ text: string }> {
  render() {
    return (
      <button type="button" className={style.btn}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
