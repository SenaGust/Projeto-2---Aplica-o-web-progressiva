const uniqueId = () => {
  const lastId = localStorage.getItem("lastId");
  let newlastId = (lastId ? parseInt(lastId) + 1 : 0).toString();
  localStorage.setItem("lastId", newlastId);
  return newlastId;
};

var createGame = ({ nome, status, genero, dataInicial, nota, descricao }) => {
  let jogos = JSON.parse(localStorage.getItem("jogos"));
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

var editGame = (id, { nome, status, genero, dataInicial, nota, descricao }) => {
  let jogos = JSON.parse(localStorage.getItem("jogos"));

  const jogosAtualizados = jogos.map((jogo) => {
    if (jogo.id === id) {
      return { id, nome, status, genero, dataInicial, nota, descricao };
    }

    return jogo;
  });
  jogos = jogosAtualizados;
  localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
};

var detalherDeUmJogo = (id) => {
  let jogos = JSON.parse(localStorage.getItem("jogos"));

  return jogos.find((jogo) => jogo.id === id);
};

var deleteGame = (id) => {
  let jogos = JSON.parse(localStorage.getItem("jogos"));

  const jogosAtualizados = jogos.filter((jogo) => jogo.id !== id);
  jogos = jogosAtualizados;
  localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
};

var searchGame = (nomeProcurado) => {
  let jogos = JSON.parse(localStorage.getItem("jogos"));

  return jogos.filter((jogo) => jogo.nome.toLowerCase().includes(nomeProcurado.toLowerCase()));
};

var filterGame = ({ status, genero, nota }) => {
  let result = JSON.parse(localStorage.getItem("jogos"));

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
