
function handleClick() {
    let heading = document.querySelector("h1");
    heading.classList.toggle = ("highlight");
}

let buttonElement = document.querySelector("#special-button");
console.log(buttonElement);
buttonElement.addEventListener("click", handleClick);
