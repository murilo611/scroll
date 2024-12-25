// Seleciona os botões de navegação
const btnNext = document.querySelector(".next");
const btnBack = document.querySelector(".back");

// Seleciona os contêineres de itens
const container = document.querySelector(".container");
const list = document.querySelector(".container .list");
const thumb = document.querySelector(".container .thumb");

// Adiciona eventos de clique aos botões
btnNext.addEventListener("click", () => moveItemsOnClick("next"));
btnBack.addEventListener("click", () => moveItemsOnClick("back"));

// Função para mover os itens ao clicar nos botões
function moveItemsOnClick(type) {
    const listItems = document.querySelectorAll(".list .list-item");
    const thumbItems = document.querySelectorAll(".thumb .thumb-item");

    // Exibe os itens da lista e da miniatura no console para depuração
    console.log(`Movendo itens: ${type}`);
    console.log("Itens da lista:", listItems);
    console.log("Itens da miniatura:", thumbItems);

    if (type === "next") {
        // Move o primeiro item para o final da lista
        list.appendChild(listItems[0]);
        // Move o primeiro item para o final da miniatura
        thumb.appendChild(thumbItems[0]);
        // Adiciona a classe de animação "next"
        container.classList.add("next");
    } else {
        // Move o último item para o início da lista
        list.prepend(listItems[listItems.length - 1]);
        // Move o último item para o início da miniatura
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        // Adiciona a classe de animação "back"
        container.classList.add("back");
    }

    // Remove as classes de animação após a conclusão (500ms)
    setTimeout(() => {
        container.classList.remove("next");
        container.classList.remove("back");
    }, 500); // Ajustado para 500ms
}

// Inicializa o estado inicial (opcional)
// Isso garante que a ordem inicial dos itens seja consistente
function initializeState() {
    const listItems = document.querySelectorAll(".list .list-item");
    const thumbItems = document.querySelectorAll(".thumb .thumb-item");

    // Aplica a ordem correta dos itens na lista e miniatura
    listItems.forEach((item, index) => {
        list.appendChild(item);
        thumb.appendChild(thumbItems[index]);
    });
}

// Chama a função de inicialização
initializeState();