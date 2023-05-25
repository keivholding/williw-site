// Adds padding to the very last message so that the input / user message field doesn't hide the text
const addPaddingToBottomMessage = function () {
  const allMessages = document.querySelectorAll(".message-container");

  allMessages.forEach((msg) => (msg.style.paddingBottom = "30px"));

  allMessages[allMessages.length - 1].style.paddingBottom = "125px";
};

addPaddingToBottomMessage();

const userInput = document.querySelector(".users-message");

//
userInput.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
