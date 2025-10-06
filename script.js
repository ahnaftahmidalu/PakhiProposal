// Show page 1 initially
document.getElementById("page1").classList.add("active");

// Function to navigate pages
function nextPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById("page" + pageNumber).classList.add("active");
}

// Handle Yes click
function chooseYes(answer) {
  document.getElementById("result").textContent = "She said: " + answer;
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => btn.disabled = true);
}
