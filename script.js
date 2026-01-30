// Auto update year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Dark mode toggle
const toggleBtn = document.getElementById("darkModeBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light mode ☀️";
  } else {
    toggleBtn.textContent = "Dark mode 🌙";
  }
});
