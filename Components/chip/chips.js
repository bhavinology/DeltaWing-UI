const addChip = document.querySelector(".chip-input");
const chipsCollector = document.querySelector(".chips-dynamic");

addChip.addEventListener("keyup", () => {
  if (event.key === "Enter")
    if (addChip.value !== "") {
      const faTag = document.createElement("i");
      faTag.classList.add("fas");
      faTag.classList.add("fa-times-circle");
      const newChip = document.createElement("span");
      newChip.appendChild(document.createTextNode(addChip.value));
      newChip.appendChild(faTag);
      newChip.classList.add("chip");
      faTag.addEventListener("click", onCrossClick);
      chipsCollector.appendChild(newChip);
      addChip.value = "";
    }
});
function onCrossClick() {
  this.parentNode.style.display = "none";
}
