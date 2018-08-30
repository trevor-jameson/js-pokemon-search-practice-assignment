document.addEventListener("DOMContentLoaded", function() {
  //pokemons is a variable imported from db.json via index.html as a script tag
  console.log(pokemons)
  document.querySelector('#pokemon-search-input').addEventListener('keyup', keyPressHandler)
})

function keyPressHandler(event){
  let pokemonContainerEl = document.querySelector('#pokemon-container')
  pokemonContainerEl.innerHTML = ''
  let searchTerm = event.currentTarget.value
  if(searchTerm !== ''){
    let filteredPokemon = pokemons.filter(pokemon => pokemon.name.includes(searchTerm))

    //render each pokemon to the page
    filteredPokemon.forEach(pokemon => {
      pokemonContainerEl.innerHTML += render(pokemon)
    })

    //for each rendered pokemon card, add an event listener to make the card flip work
    let pokemonElements = pokemonContainerEl.querySelectorAll('.pokemon-container')
    pokemonElements.forEach(pokemon => {
      pokemon.addEventListener('click', flipCardHandler)
    })
  }
}

function flipCardHandler(event){
  //if the p tag was clicked
  if(event.target.dataset.action === 'flip-image'){
    let frontSprite = event.currentTarget.dataset.frontSprite
    let backSprite = event.currentTarget.dataset.backSprite
    let imageElement = event.currentTarget.querySelector('img')
    if(imageElement.src === frontSprite){
      imageElement.src = backSprite
    }else{
      imageElement.src = frontSprite
    }
  }
}

function render(pokemon){
  //copy and pasted from inspecting https://pokemon-search.netlify.com DOM elements
  //data-front-sprite and data-back-sprite were added as custom dataset attributes
  return `
    <div class="pokemon-container" data-front-sprite="${pokemon.sprites.front}" data-back-sprite="${pokemon.sprites.back}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${pokemon.sprites.front}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image"
          data-pokename="${pokemon.name}"
          data-action="flip-image">flip card</p>
        </div>
      </div>`
}
