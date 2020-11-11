let jokeDisplayElem = document.getElementById("JokesDisp");

function newJoke() {
 let geekAPI = new XMLHttpRequest();
 geekAPI.open('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', true);
 geekAPI.send();
 geekAPI.onload = function () {
  let joke = JSON.parse(geekAPI.responseText).joke;
  jokeDisplayElem.innerHTML += `<p>${joke}</p>`
 }
}
