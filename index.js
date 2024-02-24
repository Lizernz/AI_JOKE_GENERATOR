

function showJoke(response) {
    console.log(response);
    alert(response.data.answer);

    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = response.data.answer;

    new Typewriter("#joke", {

        
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 10,
      });
}

function handleClick() {
    


let apiKey = "1de043300tfb174cf1a30ef403a9aobc";
let context = "be polite and provide a very short answer";
let prompt = "Create a funny joke about comedians";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(showJoke);

let buttonElement = document.querySelector("#special-button");
console.log(buttonElement);
buttonElement.addEventListener("click",handleClick);
}