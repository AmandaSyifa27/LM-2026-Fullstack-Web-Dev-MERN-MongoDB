const output = document.getElementById("output");

const log = (message) => {
 const entry = document.createElement("div");
 entry.classList.add("log-entry");
 entry.textContent = message;
 output.prepend(entry);
};

const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
 log("Button was clicked!");
});

const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
 log(`Input event: "${textInput.value}"`);
});

const selectBox = document.getElementById("selectBox");
selectBox.addEventListener("change", () => {
 log(`Change event: selected "${selectBox.value}"`);
});

const myForm = document.getElementById("myForm");
const formInput = document.getElementById("formInput");
myForm.addEventListener("submit", (e) => {
 e.preventDefault();
 log(`Form submitted with name: "${formInput.value}"`);
 formInput.value = "";
});

const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keyup", (e) => {
 log(`Keyup event: key pressed = "${e.key}"`);
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
 hoverBox.classList.add("hovered");
 hoverBox.textContent = "Mouse is inside!";
 log("Mouseover event: entered hover box");
});

hoverBox.addEventListener("mouseout", () => {
 hoverBox.classList.remove("hovered");
 hoverBox.textContent = "Hover over me!";
 log("Mouseout event: left hover box");
});

const focusInput = document.getElementById("focusInput");
focusInput.addEventListener("focus", () => {
 focusInput.classList.add("focused");
 log("Focus event: input is focused");
});

focusInput.addEventListener("blur", () => {
 focusInput.classList.remove("focused");
 log("Blur event: input lost focus");
});
