const switchA = document.querySelector(".switch");
const menuUlBg = document.querySelector(".menu");
const imageBg = document.querySelectorAll(".image");
const switchContain = document.querySelector(".s-contain");
const navBefore = document.querySelector(".navbar");

const tog_check = () => {
  let tog_state = document.body.classList.contains("dark") ? "dark" : "bright";
  localStorage.setItem("scheme", tog_state);
};

const darkMode = () => {
  let sColor;

  menuUlBg.classList.toggle("bright");

  if (switchContain.style.borderColor == "var(--bright)")
    sColor = "var(--dark)";
  else sColor = "var(--bright)";

  switchContain.style.borderColor = sColor;
  switchA.style.backgroundColor = sColor;
  imageBg.forEach((element) => {
    element.classList.toggle("bright");
  });
  document.body.classList.toggle("dark");
  navBefore.style.color = sColor;
  tog_check();
};

tog_check();

switchA.addEventListener("click", () => {
  switchA.classList.toggle("translate-X");

  darkMode();
});
