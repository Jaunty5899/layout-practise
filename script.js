const switchA = document.querySelector(".switch");
const menuUlBg = document.querySelector(".menu");
const imageBg = document.querySelectorAll(".image");
const switchContain = document.querySelector(".s-contain");
const navBefore = document.querySelector(".navbar");
const imgSpan = document.querySelectorAll(".image span");
const listLink = document.querySelectorAll(".menu a");
const toTopSwitch = document.querySelector(".toTop");

const tog_update = () => {
  localStorage.setItem(
    "scheme",
    document.body.classList.contains("dark") ? "dark" : "bright"
  );
};

const darkMode = () => {
  let sColor;
  switchA.classList.toggle("translate-X");
  toTopSwitch.classList.remove("offScreenTop");

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

  listLink.forEach((element) => {
    let color = sColor == "var(--dark)" ? "var(--bright)" : "var(--dark)";
    element.style.color = color;
  });

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

imgSpan.forEach((e) => {
  e.addEventListener("click", () => {
    let init = "calc(var(--max-lines) * 1em)";
    if (e.style.maxHeight == "none") e.style.maxHeight = init;
    else {
      e.style.maxHeight = "none";
    }
  });
});

listLink.forEach((e) => {
  e.addEventListener("click", () => {
    alert("hello there");
  });
});
