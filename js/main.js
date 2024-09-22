//Pokemon API

//! DOM Manipulation //!
const button = document.querySelector("button").addEventListener("click", getPokemon)
//tied to getPokemon function
//add functionality to 'buttton' .


//function to clear input of previos values from the dom
function clearPreviousData(){
  document.querySelector('h1').innerHTML = ''
  document.querySelector('img').src = ''
  document.querySelector('#typeList').innerHTML= ''
}





function getPokemon() {
  //console.log('does this work') yes
  clearPreviousData ();
  let userChoice = document.querySelector("input").value;
  //waits for input to get the VALUE from user use choice
  const url = `https://pokeapi.co/api/v2/pokemon/${userChoice}?offset=20&limit=150`.toLowerCase();
  //pokemon api data stored in varaible for the fetch
  const getImage = `https://img.pokemondb.net/artwork/${userChoice}.jpg`;
  //image sprite from seperate sources not an api

  fetch(url)
    .then((res) => res.json()) //parse the url (api) in json format and stores in varibale res(respond)
    .then((res) => {
      // respond in console as below
      console.log(res)
      document.querySelector("h1").innerText = res.name; 
        //!DOM manipulation getting the data direclt from the api and putting in the dom //! 
      document.querySelector(".pokemonImage").src = getImage;
      let pokemonType = res.types; 
      //Access array on objects for additional information such as types of elements, stored in varible pokemontYpes.
      //for each function. as there are multiple sub types(elements) this will loop through  and display the data(res) in the dom
      pokemonType.forEach((e) => {
        let typeList = document.createElement('li'); //var typelist = create a new li element in our parent ul in the html
        typeList.innerText = e.type.name; // dot notation - access to the name of sub-types of elements
        document.querySelector("#typeList").appendChild(typeList);
      });
    })
    .catch((err) => {
      console.log("error");
    });
}
