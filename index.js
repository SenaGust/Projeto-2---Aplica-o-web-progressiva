const formatJogos = ({ id, nome, status, genero, nota }) => {
  return `<div id="game-container" key=${id}>
    <h2>${nome}</h2>
    <p><b>Status: </b>${status}</p>
    <p><b>Genero: </b>${genero}</p>
    <p><b>Nota: </b>${nota}/5</p>
    <a href="pages/game-detail/game-details.html">Ver mais informações</a>
  </div>`;
};

const searchValues = new URLSearchParams(window.location.search);
const statusFilterValue = searchValues.get("status");
const generoFilterValue = searchValues.get("genero");
const notaFilterValue = searchValues.get("nota");

document.getElementById("list-games").innerHTML = filterGame({
  status:
    searchValues.has("nota") && statusFilterValue !== "null"
      ? decodeURI(statusFilterValue)
      : null,
  genero:
    searchValues.has("nota") && generoFilterValue !== "null"
      ? decodeURI(generoFilterValue)
      : null,
  nota:
    searchValues.has("nota") && notaFilterValue !== "null"
      ? decodeURI(notaFilterValue)
      : null,
})
  .map((jogo) => formatJogos(jogo))
  .join("");

const setSearchFunction = (event) => {
  event.preventDefault();
  const searchValue = document.getElementById("search").value;

  document.getElementById("list-games").innerHTML = searchGame(searchValue)
    .map((jogo) => formatJogos(jogo))
    .join("");
};
document.getElementById("search-button").onclick = setSearchFunction;
