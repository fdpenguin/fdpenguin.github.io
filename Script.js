let count = 0;
const countEl = document.getElementById("count");
document.getElementById("btn").addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});
