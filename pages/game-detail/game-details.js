//Pega o id do jogo do localStorage
const gameId = localStorage.getItem("jogoSelecionado");

//Função que formata as informações de um jogo para o html
const formatGame = ({ nome, status, genero, dataInicial, descricao, nota }) => {
  const [ano, mes, dia] = dataInicial.split("-");
  const formattedDate = new Date(ano, mes-1, dia).toLocaleDateString();

  return `<div class="center">
       <h2>${nome}</h2>
       <div class="center">
       <button id="edit-button">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
           <path d="M0 0h24v24H0z" fill="none" />
           <path
             d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
           />
         </svg>
         </button>
         <button id="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                />
            </svg>
         </button>
       </div>
     </div>
     <p>
       <b>Status: </b>
       ${status}
     </p>
     <p>
       <b>Gênero: </b>
       ${genero}
     </p>
     <p>
       <b>Nota: </b>
       ${nota}
     </p>
     <p>
       <b>Ínicio: </b>
       ${formattedDate}
     </p>
     <p>
       <b>Descrição: </b>
       ${descricao}
     </p>
   </div>`;
};

//Função que adiciona os detalhes de um jogo formatado ao html
document.getElementById("game-details").innerHTML = formatGame(
  detalherDeUmJogo(gameId)
);

// Função que adiciona o evento de deleção de um jogo ao botão
document.getElementById("delete-button").onclick = () => {
  deleteGame(gameId);
  window.location.pathname = "";
};

// Função que adiciona o evento de edição de um jogo ao botão
document.getElementById("edit-button").onclick = () => { 
  window.location.pathname = "./pages/game-edition/game-edition.html";
};
