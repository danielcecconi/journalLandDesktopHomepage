//Grab relevant elements.
let dropDownList = document.querySelector(".dropDownList");
let brandsToggle = document.querySelector(".brandsToggle");
//Initially set dropdown displayed to false.
let dropDownDisplayed = false;
//Add event listener to the brands toggle specified in the markup.
brandsToggle.addEventListener("click", dropDownDisplay);
//Create a function that will toggle the dropdown between two states: visible and invisible.
function dropDownDisplay() {
  if (dropDownDisplayed) {
    brandsToggle.innerHTML = " +";
    dropDownList.style.display = "none";
    dropDownDisplayed = false;
  } else {
    brandsToggle.innerHTML = " --";
    dropDownList.style.display = "block";
    dropDownDisplayed = true;
  }
}
