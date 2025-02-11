import style from "./Button.module.scss";
import { Component } from "react";
class Button extends Component<{
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.btn}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
