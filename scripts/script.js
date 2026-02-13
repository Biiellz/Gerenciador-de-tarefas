const input = document.querySelector('#itxt');
const btnAdicionar = document.querySelector('.botao');
const listaContainer = document.querySelector('.lista');

function adicionar() {
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === '') {
        alert('Digite a tarefa primeiro!');
        return;
    }

    const novoItem = document.createElement('div');
    novoItem.classList.add('item');

    // AJUSTE: Trocamos ID por CLASS para o CSS de hover funcionar em todos
    novoItem.innerHTML = `
        <div class="texto">
            <button class="mark btn-check"><i class="fa-solid fa-check"></i></button>
            <span>${tarefaTexto}</span>
        </div>
        <button class="mark btn-delete"><i class="fa-solid fa-xmark"></i></button>
    `;

    // SELEÇÃO INTERNA: Buscamos os botões dentro do novoItem
    const check = novoItem.querySelector('.btn-check'); // Usando classe
    const del = novoItem.querySelector('.btn-delete');  // Usando classe

    // Evento de Concluir
    check.addEventListener('click', () => {
        novoItem.classList.toggle('concluida');
    });

    // Evento de Excluir
    del.addEventListener('click', () => {
        novoItem.remove();
    });

    listaContainer.appendChild(novoItem);
    input.value = "";
    input.focus();
}

btnAdicionar.addEventListener('click', adicionar);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionar();
    }
});