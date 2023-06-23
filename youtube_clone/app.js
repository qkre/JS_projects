const moreBtn = document.querySelector(".info .titleSection .moreButton");
const title = document.querySelector(".info .titleSection .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("active");
  title.classList.toggle("clamp");
  console.log(title);
});
