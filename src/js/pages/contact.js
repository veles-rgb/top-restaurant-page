// contact.js

export default function renderContact() {
    const content = document.querySelector("#content");

    // Create form container
    const formContainer = document.createElement("div");
    formContainer.id = "formContainer";
    content.appendChild(formContainer);
};