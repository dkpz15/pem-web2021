const areaInput = document.querySelectorAll(".input");
areaInput.forEach((value) => {
  value.addEventListener("click", () => {
    value.style.boxShadow = "none";
  });
});
