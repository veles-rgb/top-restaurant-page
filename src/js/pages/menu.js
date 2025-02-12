// menu.js
import pizzaImg from "/src/imgs/food-pizza.jpg";

const content = document.querySelector("#content");

// Create cards and make the menu container scrollable
export default function renderMenu() {
    // Append menu container
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    content.appendChild(menuContainer);

    // Append h1 / title
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "MENU";
    menuContainer.appendChild(menuTitle);

    // Append food items container
    const foodItemsContainer = document.createElement("div");
    foodItemsContainer.className = "items-container";
    menuContainer.appendChild(foodItemsContainer);

    const foodTitle = document.createElement("h2");
    foodTitle.textContent = "FOOD";
    foodTitle.className = "menu-section-title"
    foodItemsContainer.appendChild(foodTitle);

    const foodItem1 = new Card("Pizza", "Classic Pep Pizza", "$5", pizzaImg)
    foodItem1.createCard(foodItemsContainer)

    const foodItem2 = new Card("Pizza", "Classic Pep Pizza", "$5", pizzaImg)
    foodItem2.createCard(foodItemsContainer)
};

// Card class constructor
class Card {
    constructor(title, desc, price, image) {
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.image = image;
    };

    createCard(container) {
        // Create card div and append
        const card = document.createElement("div");
        card.className = "card";
        container.appendChild(card);

        // Create card title and append
        const cardTitle = document.createElement("h2");
        cardTitle.textContent = this.title;
        cardTitle.className = "card-title";
        card.appendChild(cardTitle);

        // Create card description and append
        const cardDesc = document.createElement("p");
        cardDesc.textContent = this.desc;
        cardDesc.className = "card-description";
        card.appendChild(cardDesc);

        // Create card price and append
        const cardPrice = document.createElement("p");
        cardPrice.textContent = this.price;
        cardPrice.className = "card-price";
        card.appendChild(cardPrice);

        // Create card image and append
        const cardImg = document.createElement("img");
        cardImg.src = this.image;
        cardImg.className = "card-image";
        cardImg.style.width = "20rem"
        cardImg.style.height = "auto"
        card.appendChild(cardImg);
    };
};