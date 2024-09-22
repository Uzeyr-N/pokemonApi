//Pokemon API
document.querySelector("button").addEventListener("click", getPokemon); //add functional;it to buttton tied to getPokemon function(button)


function getPokemon() {
  //console.log('does this work') yes
  
  let userChoice = document.querySelector("input").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${userChoice}`.toLowerCase(); //pokemon api
  const getImage = `https://img.pokemondb.net/artwork/${userChoice}.jpg`;

  

  fetch(url)
    .then((res) => res.json()) //parse the url (api) in json format and stores in var res(respond)
    .then((res) => {
      // respond in console as below
      //console.log(res.types)
      document.querySelector("h1").innerText = res.name;
      document.querySelector(".pokemonImage").src = getImage;

      let pokemonType = res.types;
      pokemonType.forEach((e) => {
        let typeList = document.createElement("li"); //var typelist = create a new element in html 
        typeList.innerText = e.type.name; // 
        document.querySelector("#typeList").appendChild(typeList);
      });
    })
    .catch((err) => {
      console.log("error");
    });
}

// const apikey = "https://pokeapi.co/api/v2/move";

// fetch(apikey)
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((err) => {
//     console.log("second one not working");
//   });

// document.querySelector('button').addEventListener('click', getPokemon);

// function getPokemon(){
//     const userChoice = document.querySelector('input').value.trim().toLowerCase(); // User input (name)
//     const url = `https://pokeapi.co/api/v2/pokemon/${userChoice}`;
//     const getImage = `https://img.pokemondb.net/artwork/${userChoice}.jpg`; // Image URL
//     const abilities =

//     fetch(url)
//         .then(pokemon => {
//             if (!pokemon.ok) {
//                 throw new Error('Pokemon not found');
//             }
//             return pokemon.json();
//         })
//         .then(pokemon => {
//             document.querySelector('h1').innerText = pokemon.name; // Display Pokémon name
//             document.querySelector('img').src = getImage;  // Set image source
//         })
//         .catch(err => {
//            // document.querySelector('h1').innerText = "Pokemon not found";
//             //document.querySelector('#pokemon-img').src = ""; // Clear image if not found
//             console.log('Error:', err);
//         });
// }
