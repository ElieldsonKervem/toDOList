const form = document.querySelector('#form');
const input = document.querySelector('#task');
const ul = document.querySelector('#list'); // Selecionar a lista onde você quer adicionar os itens
const tasks = []; // Corrigir o nome da array para 'tasks'
const verufyInput = input.value === '' ? false : true; // Verificar se o campo de entrada está vazio
form.addEventListener('submit', function (e) {
    e.preventDefault();
    catchTask(); // Chamar a função para pegar a tarefa quando o formulário for enviado
    creatList(); // Chamar a função para criar a lista com base nas tarefas
    input.value = ''; // Limpar o campo de entrada
});

function catchTask() {
    if (input.value === '') {
        return;

    }// Se o campo de entrada estiver vazio, não fazer nada
    tasks.push(input.value);
    console.log(tasks);
}

function creatList() {
    console.log(tasks);

    // Se a array estiver vazia, não fazer nada

    ul.innerHTML = ''; // Limpar a lista antes de recriá-la

    tasks.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li); // Anexar cada item à lista 'ul'
    });

}

