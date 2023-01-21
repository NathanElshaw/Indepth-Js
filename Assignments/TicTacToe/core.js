const gameBox = document.querySelectorAll("#gameBox");

gameBox.forEach((box) => {
  console.log(box);
  box.addEventListener("click", () => {
    if (box.textContent != null) {
      box.textContent = "X";
    } else {
      console.log("filled already");
    }
  });
});
