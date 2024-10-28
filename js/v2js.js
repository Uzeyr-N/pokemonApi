document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon (){

//let userChoice = 
let userChoice = document.querySelector("input").value;

fetch(`https://pokeapi.co/api/v2/evolution-chain/${userChoice}`) 
//fetch(`https://pokeapi.co/api/v2/evolution-chain`)
.then(res => res.json())
.then(data => { 
    console.log(data)
})
.catch(err => {
    console.log('not working, you messed up')
})
}