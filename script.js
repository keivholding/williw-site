const welcomeBox = document.querySelector(".welcome-box");
const willowText = document.querySelector(".willow-text");

window.addEventListener("load", function () {
  welcomeBox.querySelectorAll(".child").forEach((child, index) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log(child);
        child.classList.add("open");
      }, 500 * index);
    }, 250);
  });
});

console.log(`Test`);
