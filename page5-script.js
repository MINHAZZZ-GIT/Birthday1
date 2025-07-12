const gift = document.getElementById("giftBox");
const card = document.getElementById("poemCard");
const endBtn = document.getElementById("endBtn");

gift.addEventListener("click", () => {
  gift.classList.add("pop");

  // Start fade-in IMMEDIATELY after pop, no artificial delay needed
  setTimeout(() => {
    gift.style.display = "none"; // Remove the gift box
    card.classList.add("show");  // Let CSS handle fade-in
    endBtn.classList.add("show");
  }, 200); // keep this short for snappy pop
});
const popup = document.getElementById("popupBox");

endBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

function closePopup() {
  popup.classList.remove("show");
}
