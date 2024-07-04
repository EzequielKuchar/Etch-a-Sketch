function initializeGrid() {
    const A = input.value;
    const gridContainer = document.querySelector(".container")
    gridContainer.textContent = "";

    const gridSize = 100 / A + "%";

    for (let i = 1; i < (A * A) + 1; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("id", i)
        gridContainer.appendChild(gridItem);
        gridItem.style.width = gridSize;
        gridItem.style.height = gridSize;

        gridItem.addEventListener("mouseover", function () {
            gridItem.style.backgroundColor = "black";
        });
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#input");
    const value = document.querySelector("#value");
    const resetButton = document.querySelector("#resetButton");

    value.textContent = input.value;

    input.addEventListener("input", function (event) {
        value.textContent = event.target.value;
        initializeGrid();
    });

    resetButton.addEventListener("click", function() {
        initializeGrid()
    })
});

initializeGrid();


