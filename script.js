const welcomeBox = document.querySelector(".welcome-box");
const willowText = document.querySelector(".willow-text");

// Makes the popup effect --> adds open class on page load
window.addEventListener("load", function () {
  welcomeBox.querySelectorAll(".child").forEach((child, index) => {
    setTimeout(() => {
      setTimeout(() => {
        child.classList.add("open");
      }, 350 * index);
    }, 500);
  });
});
