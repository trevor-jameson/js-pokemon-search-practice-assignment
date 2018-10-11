document.addEventListener("DOMContentLoaded", function() {
  console.log(pokemons)
  pokemons.forEach(pokemon => {
    let pokemonObj = new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
    Pokemon.all.push(pokemonObj)
  })
  document.querySelector('#pokemon-search-input').addEventListener('keyup', keyPressHandler)
})

function keyPressHandler(event){
  let pokemonContainerEl = document.querySelector('#pokemon-container')
  pokemonContainerEl.innerHTML = ''
  let searchTerm = event.currentTarget.value
  if(searchTerm !== ''){
    let filteredPokemon = Pokemon.all.filter(pokemon => pokemon.name.includes(searchTerm))
    //render each pokemon to the page
    filteredPokemon.forEach(pokemon => {
      pokemonContainerEl.innerHTML += pokemon.render()
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
