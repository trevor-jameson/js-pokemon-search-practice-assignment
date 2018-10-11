document.addEventListener("DOMContentLoaded", function() {
  //pokemons is a variable imported from db.json via index.html as a script tag
  console.log(pokemons)
})

let allPokemonBox = document.querySelector("div#pokemon-container")
let allPokemonDivs = document.querySelectorAll("div.pokemon-container")

// 2. First, try to render all 150 Pokemon on the page
  // Iterate through the pokemon json and add the html formatted pokemon box (with name and image)
  // inside the pokemon-container div

// 3. Consider implementing a 'render' function that, given a Pokemon object, returns a string representing a `div` HTML element containing the Pokemon's name and image. Play around with https://pokemon-search.netlify.com/ and inspect the DOM elements on that page to see what a div should look like.
  // Create this function before attempting deliverable #2

// 4. Implement a filter functionality for your Pokemon list.
  // Create a function which takes a string param, compares the string to the name of
  // each pokemon, and returns a nodeList of each match

function filter(term) {
  return pokemons.filter(elem => {elem.name.downcase.include(term.downcase})
}

// 5. Hint: Use the 'keyup' event listener type when listening to the input DOM element
  // Add keyup event listener to #pokemon-search-form which takes value of #pokemon-search-input
  // and passes it as param to filter() function

// 6. Implement a flip functionality on each Pokemon.
  //

// Call sequence
  // Load the page, add event listener to form
  // On keydown, take input and search
