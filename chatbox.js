const addPaddingToBottomMessage = function () {
  const allMessages = document.querySelectorAll(".message-container");

  allMessages.forEach((msg) => (msg.style.paddingBottom = "30px"));

  allMessages[allMessages.length - 1].style.paddingBottom = "125px";
};

addPaddingToBottomMessage();
