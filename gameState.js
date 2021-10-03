var jogos = []; //type => {id: string, nome: string, status: string, genero: string, dataInicial: Date, descricao: string, nota: number}

const uniqueId = () => {
  const lastId = JSON.parse(localStorage.getItem("lastId"));
  let newlastId = lastId ? Number(lastId) + 1 : 0;
  localStorage.setItem("lastId", newlastId);
  return newlastId;
};

onload = () => {
  const getJogosLocalStorage = JSON.parse(localStorage.getItem("jogos"));
  if (getJogosLocalStorage) {
    jogos = getJogosLocalStorage;
  }
};

var createGame = ({ nome, status, genero, initialDate, nota, descricao }) => {
  jogos.push({
    id: uniqueId(),
    nome,
    status,
    genero,
    initialDate,
    nota,
    descricao,
  });
  console.log("jogos", jogos);
  localStorage.setItem("jogos", JSON.stringify(jogos));
};

var editGame = (id, { nome, status, genero, dataInicial, nota, descricao }) => {
  const jogosAtualizados = jogos.map((jogo) => {
    if (jogo.id === id) {
      return { id, nome, status, genero, dataInicial, nota, descricao };
    }

    return jogo;
  });
  console.log("jogos", jogosAtualizados);
  localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
};

var detalherDeUmJogo = (id) => {
  console.log("jogos", jogos);
  return jogos.find((jogo) => jogo.id === id);
};

var deleteGame = (id) => {
  const jogosAtualizados = jogos.filter((jogo) => jogo.id !== id);
  console.log("jogos", jogosAtualizados);
  localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
};

var searchGame = (nomeProcurado) => {
  console.log("jogos", jogos);
  return jogos.filter((jogo) => jogo.nome.contains(nomeProcurado));
};

var filterGame = (status, genero, nota) => {
  let result = [];

  if (status) {
    result = jogos.filter((jogo) => jogo.status === status);
  }

  if (genero) {
    result = jogos.filter((jogo) => jogo.genero === genero);
  }

  if (nota) {
    result = jogos.filter((nota) => jogo.nota >= nota);
  }
  console.log(result);
  return result;
};
