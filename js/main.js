var elCardsWrapper = $_(".pokemons");

pokemons.forEach(function (pokemon) {
  var newLi = createElement("li", "pokemon-card", "");
  var newImg = createElement("img", "pokemon-img", "");

  newImg.setAttribute("src", pokemon.img);

  var newElP = createElement('p', 'pokemon-name', pokemon.name,);
  var newElType = createElement('p', 'pokemon-type', pokemon.type);

  elCardsWrapper.appendChild(newLi);
  newLi.appendChild(newImg);
  newLi.appendChild(newElP);
  newLi.appendChild(newElType);
})