// home.js

export default function renderHome() {
    const content = document.querySelector("#content");

    // Append home container
    const homeContainer = document.createElement("div");
    homeContainer.className = "home-container";
    content.appendChild(homeContainer);

    // Append H1
    const homeH1 = document.createElement("h1");
    homeH1.textContent = "The Best Pub Around";
    homeContainer.appendChild(homeH1);

    // Append H2
    const homeH2 = document.createElement("h2");
    homeH2.textContent = "Fresh food, cold drinks and good times.";
    homeContainer.appendChild(homeH2);

    // Append P
    const homeP = document.createElement("p");
    homeP.textContent = "est. 1998";
};