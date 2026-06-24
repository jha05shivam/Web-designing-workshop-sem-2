let fontSize = 16;
let isVisible = true;

function changeHeading() {
    const input = document.getElementById("inputText").value;
    const heading = document.getElementById("heading");

    if (input.trim() !== "") {
        heading.textContent = input;
    }
}

function changeBackground() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffe0b3", "#d9b3ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("paragraph").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    const para = document.getElementById("paragraph");

    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }

    isVisible = !isVisible;
}

function resetPage() {
    document.getElementById("heading").textContent = "Welcome to JavaScript Lab";
    document.getElementById("inputText").value = "";
    
    document.body.style.backgroundColor = "#f0f0f0"; // reset body color
    
    document.getElementById("heading").style.fontSize = "16px";
    document.getElementById("paragraph").style.display = "block";

    fontSize = 16;
    isVisible = true;
}