// Função que formata o jogo para ser exibido em html
const formatJogos = ({ id, nome, status, genero, nota }) => {
  return `<div id="game-container" key=${id}>
    <h2>${nome}</h2>
    <p><b>Status: </b>${status}</p>
    <p><b>Genero: </b>${genero}</p>
    <p><b>Nota: </b>${nota}/5</p>
    <button id="details-button-${id}"><a>Ver mais informações</a></button>
  </div>`;
};

//Pegando valoes de filtro para realizar o filtro
const searchValues = new URLSearchParams(window.location.search);
const statusFilterValue = searchValues.get("status");
const generoFilterValue = searchValues.get("genero");
const notaFilterValue = searchValues.get("nota");

//Realizando o filtro e inserindo no html
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

// adicionando evento ao clicar no search button
document.getElementById("search-button").onclick = (event) => {
  event.preventDefault();
  const searchValue = document.getElementById("search").value;

  document.getElementById("list-games").innerHTML = searchGame(searchValue)
    .map((jogo) => formatJogos(jogo))
    .join("");
};

// Adicionando o evento aos botões "ver mais informações"
filterGame({
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
}).forEach((jogo) => {
  document.getElementById("details-button-"+jogo.id).onclick = () => {
    const gameId = localStorage.setItem("jogoSelecionado", jogo.id);
    window.location.pathname = "/pages/game-detail/game-details.html";
  };
});
