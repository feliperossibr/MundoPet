const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const footer = document.querySelector(".footer");

openModal.onclick = () => {
  modal.classList.add("active");
  footer.classList.add("hidden");
}

closeModal.onclick = () => {
  modal.classList.remove("active");
  footer.classList.remove("hidden");
}