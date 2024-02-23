Let 





function showAnswer(response) {
    console.log(response);
    alert(response.data.answer);
}

let apiKey = "1de043300tfb174cf1a30ef403a9aobc";
let context = "be polite and provide a very short answer";
let prompt = "Who was the first Muganda man";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


console.log(apiUrl);
axios.get(apiUrl).then(showAnswer)