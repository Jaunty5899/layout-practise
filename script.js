const switchA = document.querySelector(".switch");
const menuUlBg = document.querySelector(".menu");
const imageBg = document.querySelectorAll(".image");
const switchContain = document.querySelector(".s-contain");
const navBefore = document.querySelector(".navbar");

const tog_update = () => {
  localStorage.setItem(
    "scheme",
    document.body.classList.contains("dark") ? "dark" : "bright"
  );
};

const darkMode = () => {
  let sColor;
  switchA.classList.toggle("translate-X");

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
  tog_update();
};

switchA.addEventListener("click", () => {
  darkMode();
});
const set_switch_pos = () => {
  if (localStorage.getItem("scheme") == "dark") {
    darkMode();
  }
};
set_switch_pos();
