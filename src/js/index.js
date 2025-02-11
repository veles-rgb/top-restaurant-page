// index.js
import "../styles/reset.css";
import "../styles/styles.css";
import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderAbout from "./pages/about.js";
import renderContact from "./pages/contact.js";

// Tab button click listeners
const content = document.querySelector("#content")
const tabBtns = document.querySelectorAll("nav button");
tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Render different content for each button
        if (e.target.textContent === "Home") {
            content.replaceChildren();
            renderHome();
        };
        if (e.target.textContent === "Menu") {
            content.replaceChildren();
            renderMenu()
        };
        if (e.target.textContent === "About") {
            content.replaceChildren();
            renderAbout()
        };
        if (e.target.textContent === "Contact") {
            content.replaceChildren();
            renderContact()
        };
    });
});

// Initial home page load
renderHome();