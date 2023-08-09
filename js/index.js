const form = document.querySelector('#form');
const input = document.querySelector('#task');
const ul = document.querySelector('#list');
const tasks = [];
const verufyInput = input.value === '' ? false : true;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    catchTask();
    creatList();
    input.value = '';
});

function catchTask() {
    if (input.value === '') {
        return;
    }
    tasks.push(input.value);

}
function creatList() {
    console.log(tasks);
     ul.innerHTML = '';
    tasks.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

}

