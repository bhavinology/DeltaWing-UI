const btnCloseArray = document.querySelectorAll('.btn-close');
Array.from(btnCloseArray).map((btnClose) =>
  btnClose.addEventListener('click', onCrossClick)
);
function onCrossClick() {
  this.parentNode.style.display = 'none';
}