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
        moveTodoToDone(todoText);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = 'delete-button';
    deleteButton.style.display = 'none';
    li.appendChild(deleteButton);
    
    li.addEventListener('mouseenter', function() {
        deleteButton.style.display = 'inline-block';
    });

    li.addEventListener('mouseleave', function() {
        deleteButton.style.display = 'none';
    });

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        li.remove();
    })
}

function moveTodoToDone(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    doneList.appendChild(li);

    li.addEventListener('click', function() {
        li.remove();
    });
}