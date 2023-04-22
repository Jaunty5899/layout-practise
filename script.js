const switchA = document.querySelector(".switch-a");
const switchB = document.querySelector(".switch-b");
const Scontain = document.querySelector(".s-contain");

const hide = () => {
  switchA.classList.add("hide");
};
const show = () => {
  switchB.classList.remove("hide");
  Scontain.classList.add("toRight");
};
Scontain.addEventListener("click", () => {
  switchA.classList.add("animA");

  setTimeout(() => {
    hide();
    show();
  }, 500);

  switchB.classList.add("animB");
});
