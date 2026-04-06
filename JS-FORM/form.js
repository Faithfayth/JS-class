const signUpForm = document.getElementById("signup-form");

const messageArea = document.getElementById("message-area");

signUpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // this will prevent the default behavior of the form, which is to submit the form and refresh the page

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim(); // this will get the value of the name input and remove any whitespace from the beginning and end of the string
    const email = emailInput.value.trim(); // this will get the value of the email input and remove any whitespace from the beginning and end of the string

    if (name === "") {
            messageArea.textContent = "Please enter your name.";
            messageArea.style.color = "red";
    } else if (email === "") {
            messageArea.textContent = "Please enter your email.";
            messageArea.style.color = "red";
    } else {
        messageArea.textContent =  "Thank you for signing up, " + name + ".";
        messageArea.style.color = "green";
    }
})