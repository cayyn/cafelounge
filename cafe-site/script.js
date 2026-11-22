// Footer year, updates itself.
document.getElementById("year").textContent =
  `© ${new Date().getFullYear()} Moonbean Café`;

// Menu search (only runs on menu.html, where these elements exist).
const filter = document.getElementById("filter");
if (filter) {
  filter.addEventListener("input", () => {
    const q = filter.value.toLowerCase();
    document.querySelectorAll("#menu li").forEach((li) => {
      li.style.display = li.textContent.toLowerCase().includes(q) ? "flex" : "none";
    });
  });
}
