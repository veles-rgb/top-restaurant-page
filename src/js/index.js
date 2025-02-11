// index.js
import "../styles/reset.css";
import "../styles/styles.css";
import renderHome from "./pages/home";

// Tab button click listeners
const content = document.querySelector("#content")
const tabBtns = document.querySelectorAll("nav button");
tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Render different content for each button
        if (e.target.textContent === "Home") {
            content.replaceChildren();
            renderHome();
        } else if (e.target.textContent === "Menu") {
            content.replaceChildren();
        }
    });
});

// Initial home page load
renderHome();