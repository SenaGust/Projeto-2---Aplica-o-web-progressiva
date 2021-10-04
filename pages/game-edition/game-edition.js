//Pega o id do jogo selecionado do localStorage
const gameId = localStorage.getItem("jogoSelecionado");

//pega os valores do jogo pelo id
const jogo = detalherDeUmJogo(gameId);

//seta os valores iniciais
document.getElementById("genero").value = jogo.genero;
document.getElementById("descricao").value = jogo.descricao;
document.getElementById("status").value = jogo.status;
document.getElementById("nome").value = jogo.nome;
document.getElementById("data").value = jogo.dataInicial
document.getElementById("nota").value = jogo.nota;

//Adiciona o evento de finalizar a edição ao botão 
document.getElementById("edit-button").onclick = (event) => {  
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const genero = document.getElementById("genero").value;
  const descricao = document.getElementById("descricao").value;
  const status = document.getElementById("status").value;
  const dataInicial = document.getElementById("data").value;
  const nota = document.getElementById("nota").value;
  editGame(gameId, { nome, status, genero, dataInicial, nota, descricao });
  window.location.pathname = "/pages/game-detail/game-details.html";
}; 