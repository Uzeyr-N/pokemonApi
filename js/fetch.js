//Pokemon API

const button = document
  .querySelector("button")
  .addEventListener("click", getPokemon);

//clean up code//
//syntactical sugar better way of writing up api fetches
//async function for calling up api

async function getApiData() {
  const choice = getChoice();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}?offset=20&limit=150`;
  try {
    const fetchData = await fetch(url);
    const getJsonData = await fetchData.json();
    return getJsonData;
  } catch (error) {
    console.log("error:getAPidata", error);
  }
}

function getChoice() {
  const choiceEle = document.querySelector(".userChoice");
  return choiceEle.value;
}

// const getImageData = (something) =>  (

async function getPokemon() {
  clearAll();
  try {
    const pokemonData = await getApiData();
    if (pokemonData) {
      display(pokemonData);
    }
  } catch (error) {
    console.log("error getting data", error);
  }
}

function display(pokemonData) {
  const choice = getChoice();
  let name = (document.querySelector("h1").innerText = pokemonData.name);

  let getImageData = `https://img.pokemondb.net/artwork/${choice}.jpg`;

  document.querySelector("img").src = getImageData;

  let pokemonType = pokemonData.types;

  pokemonType.forEach((el) => {
    let createLi = document.createElement("li");
    createLi.innerText = el.type.name;
    document.querySelector("#typeList").appendChild(createLi);
  });
}

function clearAll() {
  document.querySelector("h1").innerHTML = "";
  document.querySelector("img").src = "";
  document.querySelector("#typeList").innerHTML = "";
}
