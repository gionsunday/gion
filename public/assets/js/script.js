window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".ripple");
  console.log(buttons);

  buttons.forEach((button) => {
    console.log(button);
    setInterval(() => {
      button.style.backgroundColor = "white";
      button.style.color = "#9e6f65";
    //   button.style.transform = "rotate(5deg) scale(1)";
      button.style.animation = "scale 0.5s ease-out";
    }, 1000);

    setInterval(() => {
      button.style.backgroundColor = "#9e6f65";
      button.style.color = "#fff";
    //   button.style.transform = "rotate(0deg) scale(1)";
      button.style.animation = "scale 1s ease-out";
    }, 2000);

    setInterval(() => {
      button.style.backgroundColor = "#534949";
      button.style.color = "#f3c6ef";
    //   button.style.transform = "rotate(-5deg) scale(1)";
      button.style.animation = "scale 0.5s ease-out";
    }, 3000);
  });
});
