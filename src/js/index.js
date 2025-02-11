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
        if (e.target.textContent === "HOME") {
            content.replaceChildren();
            renderHome();
        };
        if (e.target.textContent === "MENU") {
            content.replaceChildren();
            renderMenu()
        };
        if (e.target.textContent === "ABOUT") {
            content.replaceChildren();
            renderAbout()
        };
        if (e.target.textContent === "CONTACT") {
            content.replaceChildren();
            renderContact()
        };
    });
});

// Initial home page load
renderHome();