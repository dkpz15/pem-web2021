const leftOne = document.querySelector(".left-one");
const imgArrowUp = document.getElementById("img-arrow-up");
const imgArrowDown = document.getElementById("img-arrow-one");
const linkOne = Array.from(document.querySelectorAll(".link-one"));
linkOne.map((value) => {
  leftOne.addEventListener("click", () => {
    if (value.style.display == "none") {
      showBoardsTemplatesWorkspaces(value);
    } else if (value.style.display == "block") {
      exitBoardsTemplatesWorkspaces(value);
    }
  });
});

function showBoardsTemplatesWorkspaces(v) {
  imgArrowUp.style.display = "inline";
  imgArrowDown.style.display = "none";
  v.style.display = "block";
}
function exitBoardsTemplatesWorkspaces(v) {
  imgArrowUp.style.display = "none";
  imgArrowDown.style.display = "inline";
  v.style.display = "none";
}

const leftTwo = document.querySelector(".left-two");
const imgArrowUpTwo = document.getElementById("img-arrow-up-two");
const imgArrowDownTwo = document.getElementById("img-arrow-two");
const linkTwo = Array.from(document.querySelectorAll(".link-two"));
linkTwo.map((value) => {
  leftTwo.addEventListener("click", () => {
    if (value.style.display == "none") {
      showBoardsTemplatesWorkspacesTwo(value);
    } else if (value.style.display == "block") {
      exitBoardsTemplatesWorkspacesTwo(value);
    }
  });
});
function showBoardsTemplatesWorkspacesTwo(v) {
  imgArrowUpTwo.style.display = "inline";
  imgArrowDownTwo.style.display = "none";
  v.style.display = "block";
}
function exitBoardsTemplatesWorkspacesTwo(v) {
  imgArrowUpTwo.style.display = "none";
  imgArrowDownTwo.style.display = "inline";
  v.style.display = "none";
}
