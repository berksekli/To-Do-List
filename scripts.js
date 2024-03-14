const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    li.addEventListener('click', function() {
        li.remove();
        moveTodoToDone(li.textContent);
    });
}

function moveTodoToDone(todoText) {
    const li = document.createElement('li');
    li.texrContent = todoText;
    doneList.appendChild(li);

    li.addEventListener('click', function() {
        li.remove();
    });
}