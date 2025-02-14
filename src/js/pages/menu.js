// menu.js
import menuImg from "/src/imgs/menu-image.jpg";
import pizzaImg from "/src/imgs/food-pizza.jpg";
import burgerImg from '/src/imgs/food-burger.jpg';
import tacosImg from '/src/imgs/food-tacos.jpg';
import steakImage from '/src/imgs/food-steak.jpg';
import beerImg from "/src/imgs/drinks-beer.jpg";
import waterImg from '/src/imgs/drinks-water.jpg';
import coffeeImg from '/src/imgs/drinks-coffee.jpg';
import cheesecakeImg from '/src/imgs/desserts-cheesecake.jpg';
import cookiesImg from '/src/imgs/dessert-cookies.jpg';


const content = document.querySelector("#content");

// Create cards and make the menu container scrollable
export default function renderMenu() {
    // Append menu container
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    content.appendChild(menuContainer);

    // Append h1 / title
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "SMIRK'S MENU";
    menuContainer.appendChild(menuTitle);

    // Append food items container
    const foodItemsContainer = document.createElement("div");
    foodItemsContainer.className = "section-container";
    menuContainer.appendChild(foodItemsContainer);
    // Create food items title
    const foodTitle = document.createElement("h2");
    foodTitle.textContent = "FOOD";
    foodTitle.className = "menu-section-title"
    foodItemsContainer.appendChild(foodTitle);
    // Create food items
    const foodItem1 = new Card("Deep Dish Pizza", "6 slices of classic deep dish pizza made in house.", "$10", pizzaImg);
    foodItem1.createCard(foodItemsContainer);
    const foodItem2 = new Card("Smirk's Burger", "All beef burger, made with all fresh ingredients.", "$9.99", burgerImg);
    foodItem2.createCard(foodItemsContainer);
    const foodItem3 = new Card("Chicken Tacos", "4x hot chicken tacos with your choice of veggies and sauce.", "$11", tacosImg);
    foodItem3.createCard(foodItemsContainer);
    const foodItem4 = new Card("Flamed Grilled Steak", "Our famous 9oz flamed grilled steak. It's like a taste of heaven.", "$19.99", steakImage);
    foodItem4.createCard(foodItemsContainer);

    // Append drink items container
    const drinkItemsContainer = document.createElement("div");
    drinkItemsContainer.className = "section-container";
    menuContainer.appendChild(drinkItemsContainer);
    // Create drinks title
    const drinkTitle = document.createElement("h2");
    drinkTitle.textContent = "DRINKS";
    drinkTitle.className = "menu-section-title";
    drinkItemsContainer.appendChild(drinkTitle);
    // Create drink items
    const drinkItem1 = new Card("Cold Beer", "Our signature house beer, on tap!", "$5", beerImg);
    drinkItem1.createCard(drinkItemsContainer);
    const drinkItem2 = new Card("Cup of Water", "A fresh cup of tap water, straight from the pipes.", "$10", waterImg);
    drinkItem2.createCard(drinkItemsContainer);
    const drinkItem3 = new Card("Cup of Coffee", "A cup of hot coffee (I swear its not instant coffee).", "$3", coffeeImg);
    drinkItem3.createCard(drinkItemsContainer);

    // Append dessert items container
    const dessertItemsContainer = document.createElement("div");
    dessertItemsContainer.className = "section-container";
    menuContainer.appendChild(dessertItemsContainer);
    // Create dessert title
    const dessertTitle = document.createElement("h2");
    dessertTitle.textContent = "DESSERTS";
    dessertTitle.className = "menu-section-title";
    dessertItemsContainer.appendChild(dessertTitle);
    // Create dessert items
    const dessertItem1 = new Card("Cheesecake", "A fresh slice of homemade cheesecake.", "$3", cheesecakeImg)
    dessertItem1.createCard(dessertItemsContainer)
    const dessertItem2 = new Card("Chocolate Chip Cookies", "2x freshly baked chocolate chips cookies.", "$3", cookiesImg);
    dessertItem2.createCard(dessertItemsContainer);
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
        cardImg.style.width = "28rem";
        cardImg.style.height = "20rem";
        card.appendChild(cardImg);
    };
};