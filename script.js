const button = document.getElementById("messageButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "You clicked the button. JavaScript is working!";
});
const colourButton = document.getElementById("colourButton");

let isBlue = false;

colourButton.addEventListener("click", function () {
  if (isBlue === false) {
    document.body.style.backgroundColor = "#dbeafe";
    colourButton.textContent = "Change Back";
    isBlue = true;
  } else {
    document.body.style.backgroundColor = "#f4f4f4";
    colourButton.textContent = "Change Background";
    isBlue = false;
  }
});
const headingButton = document.getElementById("headingButton");
const mainHeading = document.querySelector("h1");

headingButton.addEventListener("click", function () {
  mainHeading.textContent = "I am building real projects!";
});