// add button
const addShowButton = document.querySelector(".add");
// label for the add button
const showInput = document.querySelector(".add-show input");
// unordered list (not yet visible)
const showList = document.querySelector(".show-list");
// span class for number of favorite shows
const showCount = document.querySelector(".number");

addShowButton.addEventListener("click", function () {
  const show = showInput.value;
  // console.log(show);
  if (show !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = show;
    showList.append(listItem);
    let shows = document.querySelectorAll(".show-list li");
    showCount.innerText = shows.length;
  }
});
