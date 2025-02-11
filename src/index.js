// index.js
import "./styles.css";
import { test } from "./test.js";
import testImg from "./imgs/test.png"

const image = document.createElement("img");
image.src = testImg;

document.body.appendChild(image)

console.log(test);
