const btnDefaultModal = document.querySelector("#btn-modal-default");
const btnListModal = document.querySelector("#btn-modal-list");
const btnScrollModal = document.querySelector("#btn-modal-list-scroll");

const defaultModal = document.querySelector(".modal-default");
const listModal = document.querySelector(".modal-list");
const scrollModal = document.querySelector(".modal-list-scroll");

const disableContainer = document.querySelector(".disable-container");
const buttonContainer = document.querySelector(".button-container");

btnDefaultModal.addEventListener("click", () => onClickHandler(defaultModal));
btnListModal.addEventListener("click", () => onClickHandler(listModal));
btnScrollModal.addEventListener("click", () => onClickHandler(scrollModal));

function onClickHandler(modalType) {
  buttonContainer.style.display = "none";
  disableContainer.style.background = "#C0C0C0";
  modalType.style.display = "flex";
  modalType.style.background = "#FFFFFF";
}
