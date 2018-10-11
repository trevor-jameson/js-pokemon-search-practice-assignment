document.addEventListener("DOMContentLoaded", function() {
  //pokemons is a variable imported from db.json via index.html as a script tag
  console.log(pokemons)
})

//bulbasaur pokemon container
let bulbasaur = document.createElement("div");
bulbasaur.className = "pokemon-container";

//frame
let frame = document.createElement("div");
frame.className = "pokemon-frame";
frame.setAttribute("style","width:230px;margin:10px;background:#fecd2f;color:#2d72fc");

//header
let header = document.createElement("h1");
header.className = "center-text";
header.innerText = "bulbasaur";

//outerbox
let outerbox = document.createElement("div");
outerbox.setAttribute("style","width:239px;margin:auto");

//innerbox
let innerbox = document.createElement("div");
innerbox.setAttribute("style", "width:96px;margin:auto");

//img link
let pImg = document.createElement("img");
pImg.setAttribute("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");


//add img to innerbox
innerbox.appendChild(pImg);

//add innerbox to outerbox
outerbox.appendChild(innerbox);

//flip cart text
let flip = document.createElement("p");
flip.setAttribute("style","padding:10px;");
flip.setAttribute("class","center-text flip-image");
flip.dataset.pokename="bulbasaur";
flip.dataset.action="flip-image";
flip.innerText = "flip card";


//header is first in frame
frame.appendChild(header);

//next is outerbox
frame.appendChild(outerbox);

//last is the flip text
frame.append(flip);

//add frame to pokemon container
bulbasaur.appendChild(frame);

//get the empty div inside of the id pokemon container div
let listdiv = document.querySelector("#pokemon-container > div");

//add bulbasaur to the list
listdiv.appendChild(bulbasaur);
