//Função que cria um id unico
const uniqueId = () => {
  const lastId = localStorage.getItem("lastId");
  let newlastId = (lastId ? parseInt(lastId) + 1 : 0).toString();
  localStorage.setItem("lastId", newlastId);
  return newlastId;
};

//Função que cria um jogo e salva no localStorage
var createGame = ({ nome, status, genero, dataInicial, nota, descricao }) => {
  let jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];
  jogos.push({
    id: uniqueId(),
    nome,
    status,
    genero,
    dataInicial,
    nota,
    descricao,
  });
  localStorage.setItem("jogos", JSON.stringify(jogos));
};

//Função que edita um jogo e salva no localStorage
var editGame = (id, { nome, status, genero, dataInicial, nota, descricao }) => {
  let jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];

  const jogosAtualizados = jogos.map((jogo) => {
    if (jogo.id === id) {
      return { id, nome, status, genero, dataInicial, nota, descricao };
    }

    return jogo;
  });
  jogos = jogosAtualizados;
  localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
};

//Função que retorna os detalhes de um jogo
var detalherDeUmJogo = (id) => {
  let jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];

  return jogos.find((jogo) => jogo.id === id);
};

//Função que deleta um jogo
var deleteGame = (id) => {
  let jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];

  const jogosAtualizados = jogos.filter((jogo) => jogo.id !== id);
  jogos = jogosAtualizados;
  localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
};

//Função que faz uma pesquisa por nome nos array de jogos
var searchGame = (nomeProcurado) => {
  let jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];

  return jogos.filter((jogo) => jogo.nome.toLowerCase().includes(nomeProcurado.toLowerCase()));
};

//Função que filtra os jogos
var filterGame = ({ status, genero, nota }) => {
  let result = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];

  if (status) {
    result = result.filter((jogo) => jogo.status.toLowerCase() === status.toLowerCase());
  }
  if (genero) {
    result = result.filter((jogo) => jogo.genero.toLowerCase() === genero.toLowerCase());
  }
  if (nota) {
    result = result.filter((jogo) => jogo.nota >= nota);
  }
  return result;
};
