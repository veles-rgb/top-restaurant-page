// menu.js
import pizzaImg from "/src/imgs/food-pizza.jpg";
import beerImg from "/src/imgs/drinks-beer.jpg";
import cheesecakeImg from '/src/imgs/desserts-cheesecake.jpg';

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
    // Create food items title
    const foodTitle = document.createElement("h2");
    foodTitle.textContent = "FOOD";
    foodTitle.className = "menu-section-title"
    foodItemsContainer.appendChild(foodTitle);
    // Create food items
    const foodItem1 = new Card("Pizza", "Classic Pep Pizza", "$5", pizzaImg);
    foodItem1.createCard(foodItemsContainer);

    // Append drink items container
    const drinkItemsContainer = document.createElement("div");
    drinkItemsContainer.className = "items-container";
    menuContainer.appendChild(drinkItemsContainer);
    // Create drinks title
    const drinkTitle = document.createElement("h2");
    drinkTitle.textContent = "DRINKS";
    drinkTitle.className = "menu-section-title";
    drinkItemsContainer.appendChild(drinkTitle);
    // Create drink items
    const drinkItem1 = new Card("Cold Beer", "Cold beer on tap!", "$5", beerImg);
    drinkItem1.createCard(drinkItemsContainer);

    // Append dessert items container
    const dessertItemsContainer = document.createElement("div");
    dessertItemsContainer.className = "items-container";
    menuContainer.appendChild(dessertItemsContainer);
    // Create dessert title
    const dessertTitle = document.createElement("h2");
    dessertTitle.textContent = "DESSERTS";
    dessertTitle.className = "menu-section-title";
    dessertItemsContainer.appendChild(dessertTitle);
    // Create dessert items
    const dessertItem1 = new Card("Cheesecake", "A fresh slice of homemade cheesecake", "$3", cheesecakeImg)
    dessertItem1.createCard(dessertItemsContainer)
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