const welcomeBox = document.querySelector(".welcome-box");
const willowText = document.querySelector(".willow-text");

window.addEventListener("load", function () {
  welcomeBox.querySelectorAll(".child").forEach((child, index) => {
    setTimeout(() => {
      console.log(child);
      child.classList.add("open");
    }, 1000 * index);
  });
});

console.log(`Test`);
