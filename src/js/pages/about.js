// about.js

export default function renderAbout() {
    const content = document.querySelector("#content");

    // Create and about container
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    content.appendChild(aboutContainer);

    // Create about heading
    const aboutH1 = document.createElement("h1");
    aboutH1.textContent = "ABOUT SMIRK PUB";
    aboutContainer.appendChild(aboutH1);

    // Create about info box
    const aboutInfoContainer = document.createElement("div");
    aboutInfoContainer.id = "about-info-container";
    aboutContainer.appendChild(aboutInfoContainer);

    // Create description text
    const infoOne = document.createElement('p');
    infoOne.textContent = "Welcome to Smirk Pub, where the spirit of laughter and good company collide over fantastic food and drinks. Nestled in the heart of the city, Smirk Pub is the place to unwind, share a meal, and experience the kind of fun you can only get when friends and strangers gather under one roof.";
    aboutInfoContainer.appendChild(infoOne);

    const infoTwo = document.createElement("p");
    infoTwo.textContent = "Smirk Pub was born from a chance encounter at a small-town dive bar, where two lifelong friends—Mark and Spencer—found themselves laughing over a spilled pint of beer and a shared love for great food. What began as a casual conversation about the lack of a fun, welcoming space to enjoy a meal with friends turned into a dream of creating a pub that combined delicious food, lively conversation, and a good dose of humor.";
    aboutInfoContainer.appendChild(infoTwo);

    const infoThree = document.createElement("p");
    infoThree.textContent = "In 2015, after years of planning, recipe testing (and perfecting a few signature cocktails), Smirk Pub officially opened its doors. We wanted to create a place that felt like home—the kind of place where everyone’s a regular, whether it’s your first time in or your hundredth. We believe that a good laugh makes any meal better, and it’s this spirit that flows through everything we do, from our quirky menu items to the playful atmosphere.";
    aboutInfoContainer.appendChild(infoThree);

    const infoFour = document.createElement("p");
    infoFour.textContent = "Smirk Pub—come for the food, stay for the laughter.";
    aboutInfoContainer.appendChild(infoFour);
};