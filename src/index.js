
document.addEventListener("DOMContentLoaded", function() {
  //pokemons is a variable imported from db.json via index.html as a script tag
  console.log(pokemons)

  render(pokemons[0])
  search()
})

function render(pokeData) {

  //bulbasaur pokemon container
  let pokemon = document.createElement("div");
  pokemon.className = "pokemon-container";

  //frame
  let frame = document.createElement("div");
  frame.className = "pokemon-frame";
  frame.setAttribute("style","width:230px;margin:10px;background:#fecd2f;color:#2d72fc");

  //header
  let header = document.createElement("h1");
  header.className = "center-text";
  header.innerText = `${pokeData.name}`;

  //outerbox
  let outerbox = document.createElement("div");
  outerbox.setAttribute("style","width:239px;margin:auto");

  //innerbox
  let innerbox = document.createElement("div");
  innerbox.setAttribute("style", "width:96px;margin:auto");

  //img link
  let pImg = document.createElement("img");
  pImg.setAttribute("src",`${pokeData.sprites.front}`);
  // pImg.setAttribute("class", `${pokeData.name}`)


  //add img to innerbox
  innerbox.appendChild(pImg);

  //add innerbox to outerbox
  outerbox.appendChild(innerbox);

  //flip cart text
  let flip = document.createElement("p");
  flip.setAttribute("style","padding:10px;");
  flip.setAttribute("class","center-text flip-image");
  flip.dataset.pokename=`${pokeData.name}`;
  flip.dataset.action="flip-image";
  flip.innerText = "flip card";

  // flip.addEventListener('click', () => {
  //   let pic = document.querySelector(`[data-pokename=\"${pokeData.name}\"]`);
  //   if(pic.src === pokeData.sprites.front){
  //     pic.src === pokeData.sprites.back
  //   }
  // })


  //header is first in frame
  frame.appendChild(header);

  //next is outerbox
  frame.appendChild(outerbox);

  //last is the flip text
  frame.append(flip);

  //add frame to pokemon container
  pokemon.appendChild(frame);

  //get the empty div inside of the id pokemon container div
  let listdiv = document.querySelector("#pokemon-container > div");

  // debugger
  //add pokemon to the list
  listdiv.appendChild(pokemon);
}

// 2. First, try to render all 150 Pokemon on the page
  // Iterate through the pokemon json and add the html formatted pokemon box (with name and image)
  // inside the pokemon-container div

// 3. Consider implementing a 'render' function that, given a Pokemon object, returns a string representing a `div` HTML element containing the Pokemon's name and image. Play around with https://pokemon-search.netlify.com/ and inspect the DOM elements on that page to see what a div should look like.
  // Create this function before attempting deliverable #2


// 4. Implement a filter functionality for your Pokemon list.
  // Create a function which takes a string param, compares the string to the name of
  // each pokemon, and returns a nodeList of each match

function filter(term) {
  return pokemons.filter(elem => elem.name.includes(term.toLowerCase()))
}

// 5. Hint: Use the 'keyup' event listener type when listening to the input DOM element
  // Add keyup event listener to #pokemon-search-form which takes value of #pokemon-search-input
  // and passes it as param to filter() function
function search() {
  let form = document.querySelector("#pokemon-search-form")
  form.addEventListener('keyup', () => {

    console.log(filter(form.children[0].value))
  })
}

// 6. Implement a flip functionality on each Pokemon.
  //

// Call sequence
  // Load the page, add event listener to form
  // On keydown, take input and search
