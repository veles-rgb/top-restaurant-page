// menu.js

// Create cards and make the menu container scrollable
export default function renderMenu() {
    const content = document.querySelector("#content");

    // Append menu container
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    content.appendChild(menuContainer);

    // Append h1 / title
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "MENU";
    menuContainer.appendChild(menuTitle);

    
};