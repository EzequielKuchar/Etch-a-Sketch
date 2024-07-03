const input = document.querySelector("#input");
const value = document.querySelector("#value");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});