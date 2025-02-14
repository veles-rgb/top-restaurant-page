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
            const homeBtn = document.getElementById("home-btn")
            renderHome();
            homeBtn.classList.add("active")
            removeActive("HOME")
        };
        if (e.target.textContent === "MENU") {
            content.replaceChildren();
            const menuBtn = document.getElementById("menu-btn");
            renderMenu();
            menuBtn.classList.add("active");
            removeActive("MENU");
        };
        if (e.target.textContent === "ABOUT") {
            content.replaceChildren();
            const aboutBtn = document.getElementById("about-btn");
            renderAbout();
            aboutBtn.classList.add("active");
            removeActive("ABOUT");
        };
        if (e.target.textContent === "CONTACT") {
            content.replaceChildren();
            const contactBtn = document.getElementById("contact-btn");
            renderContact();
            contactBtn.classList.add("active");
            removeActive("CONTACT");
        };
    });
});

function removeActive(current) {
    tabBtns.forEach((btn => {
        if (btn.textContent !== current) {
            btn.classList.remove("active");
        };
    }));
};

// Initial home page load
renderHome();