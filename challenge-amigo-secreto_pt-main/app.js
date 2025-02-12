document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];
  
    // Obtendo elementos do DOM
    const input = document.getElementById("nome");
    const addButton = document.getElementById("adicionar");
    const sortButton = document.getElementById("sortear");
    const lista = document.getElementById("lista");
    const resultado = document.getElementById("resultado");
  
    // Função para adicionar um amigo à lista
    function adicionarAmigo() {
      const nome = input.value.trim();
      if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
      }
  
      amigos.push(nome);
      input.value = ""; // Limpa o campo de entrada
      atualizarLista();
    }
  
    // Atualiza a lista de amigos na tela
    function atualizarLista() {
      lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos
      amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
      });
    }
  
    // Função para sortear um amigo aleatório
    function sortearAmigo() {
      if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
      }
  
      const nomeAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
      resultado.textContent = `Amigo Secreto: ${nomeAleatorio}`;
    }
  
    // Adicionando eventos aos botões
    addButton.addEventListener("click", adicionarAmigo);
    sortButton.addEventListener("click", sortearAmigo);
  });

