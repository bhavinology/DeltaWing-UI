const btnCloseArray = document.querySelectorAll(".btn-close");

const btnToastSuccess = document.querySelector("#btn-toast-success");
const btnToastInfo = document.querySelector("#btn-toast-info");
const btnToastWarning = document.querySelector("#btn-toast-warning");
const btnToastError = document.querySelector("#btn-toast-error");

const toastSuccess = document.querySelector(".toast-success");
const toastInfo = document.querySelector(".toast-info");
const toastWarning = document.querySelector(".toast-warning");
const toastError = document.querySelector(".toast-error");

btnToastSuccess.addEventListener("click", () => onClickHandler(toastSuccess));
btnToastInfo.addEventListener("click", () => onClickHandler(toastInfo));
btnToastWarning.addEventListener("click", () => onClickHandler(toastWarning));
btnToastError.addEventListener("click", () => onClickHandler(toastError));

const onClickHandler = (element) => {
  console.log(element);
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, 3000);
};

Array.from(btnCloseArray).map((btnClose) =>
  btnClose.addEventListener("click", onCrossClick)
);
function onCrossClick() {
  this.parentNode.style.display = "none";
}
