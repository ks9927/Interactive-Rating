const ratingScreen = document.querySelector(".rating-container");
const thanksScreen = document.querySelector(".thanks-container");
const ratingsBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-button");
const ratingResults = document.querySelector(".rating-results");

let userRating = "";
ratingsBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    userRating = btn.textContent;
  })
});



submitBtn.addEventListener("click", () => {
  ratingScreen.style.display = "none";
  thanksScreen.style.display = "inline";
  ratingResults.textContent = `You selected ${userRating} out of 5`;
});

//click a button. take the button's text and store it in a variable. text goes into span (rating-num)



