import "./style.css";
import { createButton } from "./dom";
import Todos from "./app";

const button = createButton();

button.addEventListener('click', () => {
    const task = new Todos('charlie')

})
