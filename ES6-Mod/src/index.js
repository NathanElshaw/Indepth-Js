import myName from "./myName";
import "./styles.css";
import Icon from "./Icon.svg";

function component() {
  const element = document.createElement("div");

  element.textContent = myName("Nathan");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  return element;
}

document.body.appendChild(component());
