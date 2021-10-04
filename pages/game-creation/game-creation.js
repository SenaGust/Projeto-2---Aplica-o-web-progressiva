//Função que adiciona o evento ao botão cadastrar jogo
const setCreateFunction = (event) => {  
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const genero = document.getElementById("genero").value;
  const descricao = document.getElementById("descricao").value;
  const status = document.getElementById("status").value;
  const dataInicial = document.getElementById("data").value;
  const nota = document.getElementById("nota").value;
  createGame({ nome, status, genero, dataInicial, nota, descricao });
  window.location.pathname = '';
};
document.getElementById("create-button").onclick = setCreateFunction;
