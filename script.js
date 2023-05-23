const welcomeBox = document.querySelector(".welcome-box");
const willowText = document.querySelector(".willow-text");

window.addEventListener("load", function () {
  welcomeBox.querySelectorAll(".child").forEach((child, index) => {
    setTimeout(() => {
      setTimeout(() => {
        child.classList.add("open");
      }, 350 * index);
    }, 500);
  });
});

const timer = function (sec) {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

timer(3)
  .then(() => {
    console.log(`You waited 3 seconds`);
    return timer(2);
  })
  .then(() => {
    console.log(`You waited 2 seconds`);
    return timer(1);
  })
  .then(() => {
    console.log(`You waited 1 seconds`);
  });
