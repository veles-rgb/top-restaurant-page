// contact.js

export default function renderContact() {
    const content = document.querySelector("#content");

    // Create form container
    const formContainer = document.createElement("div");
    formContainer.id = "form-container";
    content.appendChild(formContainer);

    // Create container heading
    const contactH1 = document.createElement("h1");
    contactH1.textContent = "CONTACT";
    formContainer.appendChild(contactH1);

    // Create container description
    const contactDesc = document.createElement("p");
    contactDesc.textContent = "Have a question, concern or feedback? Please fill out the form below and we will get back to you within 24 hours.";
    formContainer.appendChild(contactDesc);

    // Create contact form
    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";
    contactForm.action = "#";
    contactForm.method = "POST";
    formContainer.appendChild(contactForm);

    // Create first name label and input
    const firstNameLabel = document.createElement("label");
    firstNameLabel.htmlFor = "first_name";
    firstNameLabel.textContent = "First name";
    contactForm.appendChild(firstNameLabel);
    const firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.id = "first_name";
    firstNameInput.name = "first_name";
    firstNameInput.placeholder = "John";
    firstNameInput.required = true;
    contactForm.appendChild(firstNameInput);

    // Create last name label and input
    const lastNameLabel = document.createElement("label");
    lastNameLabel.htmlFor = "last_name";
    lastNameLabel.textContent = "Last name";
    contactForm.appendChild(lastNameLabel);
    const lastNameInput = document.createElement("input");
    lastNameInput.type = "text";
    lastNameInput.id = "last_name";
    lastNameInput.name = "last_name";
    lastNameInput.placeholder = "Doe";
    contactForm.appendChild(lastNameInput);

    // Create email label and input
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email";
    contactForm.appendChild(emailLabel);
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "example@mail.com";
    contactForm.appendChild(emailInput);

    // Create comment box label and input
    const commentLabel = document.createElement("label");
    commentLabel.htmlFor = "comment";
    commentLabel.textContent = "Enter your comment";
    contactForm.appendChild(commentLabel);
    const commentInput = document.createElement("textarea");
    commentInput.id = "comment";
    commentInput.name = "comment";
    contactForm.appendChild(commentInput);

    // Create submit button
    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "SUBMIT";
    contactForm.appendChild(submitBtn);

    // Add submit event listener
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get values from the form
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const comment = commentInput.value;

        // Check if all required fields are filled
        if (!firstName || !lastName || !email || !comment) {
            alert("Please fill out all fields.");
            return;
        }

        console.log({
            firstName,
            lastName,
            email,
            comment,
        });

        contactForm.reset();
    });
}
