let showModal = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let btn = document.querySelector(".btn");
let offset = document.querySelector(".offset");
let off = document.querySelector(".off");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

close.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if ((e.key = "escape" && !modal.classList.contains("hidden"))) {
    closeModal();
  }
});

btn.addEventListener("click", () => {
  offset.classList.add("active");
});

const offsetClose = () => {
  offset.classList.remove("active");
};

off.addEventListener("click", offsetClose);
