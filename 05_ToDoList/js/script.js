let ID = localStorage.ID ? +localStorage.getItem('ID_counter') : 1;
let form = document.getElementById('todoForm');
console.log(form)
const STORE_ID  = 'todoItems';
const TODO_CONTAINER = document.getElementById('todoItems');


function findWrapper(el) {
    if(el.getAttribute('data-id')) {
        return el;
    }

    return findWrapper(el.parentElement);
}

function findElement(todoItems, id) {
    return todoItems.find(function (singleTodoItem) {
        if(singleTodoItem.id === id) return singleTodoItem
    })
}



TODO_CONTAINER.addEventListener('click', function (e) {
    if(!e.target.classList.contains('delete-btn')) return;
    const todoItem = findWrapper(e.target);
    const todoItemId = +todoItem.getAttribute('data-id');
    const todoItems = JSON.parse(localStorage[STORE_ID]);

    let updatedItems = todoItems.filter(function (item) {
        if(item.id !== todoItemId) return item;
    });

    localStorage.setItem(STORE_ID, JSON.stringify(updatedItems));
    todoItem.parentElement.remove();
})


TODO_CONTAINER.addEventListener('change', function (e) {
    const todoItem = findWrapper(e.target);
    const todoItemId = +todoItem.getAttribute('data-id');
    const status = e.target.checked;
    const todoItems = JSON.parse(localStorage[STORE_ID]);

    let currentTodoItem = findElement(todoItems, todoItemId);

    currentTodoItem.status = status;

    localStorage.setItem(STORE_ID, JSON.stringify(todoItems));
})

document.addEventListener('DOMContentLoaded', function () {
    if(!localStorage[STORE_ID]) return;

    const data = JSON.parse(localStorage[STORE_ID]);

    data.forEach(function (item) {
        const template = createTemplate(item.heading, item.content, item.id, item.status);
        TODO_CONTAINER.prepend(template);
    })

});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const heading = e.target.querySelector('input[name=title]');
    const content = e.target.querySelector('textarea[name=description]');

    if(!heading.value || !content.value) {
        alert('You probably forgot to fill the gap)');
        return;
    }

    const template = createTemplate(heading.value, content.value, ID);
    useStorage(heading.value, content.value)


    TODO_CONTAINER.prepend(template);

    e.target.reset();
});

function useStorage(heading, content, status = false) {


    const todoItem = {
        id: ID,
        heading,
        content,
        status
    }

    ++ID;
    localStorage.setItem('ID_counter', 'ID');

    if(localStorage[STORE_ID]) {
        const storeData = JSON.parse(localStorage.getItem(STORE_ID));
        storeData.push(todoItem);
        localStorage.setItem(STORE_ID, JSON.stringify(storeData));
        return todoItem;
    }


    const arr = JSON.stringify([todoItem]);
    localStorage.setItem(STORE_ID, arr);
    return todoItem;
}

function createTemplate(title, taskBody, id, status = false) {
    const mainWrp = document.createElement('div');
    mainWrp.className = 'col-4';

    const taskWrp = document.createElement('div');
    taskWrp.className = 'taskWrapper';
    taskWrp.setAttribute('data-id', id);

    const heading = document.createElement('div');
    heading.className = 'taskHeading';
    heading.innerText = title;

    const taskDesc = document.createElement('div');
    taskDesc.className = 'taskDescription';
    taskDesc.innerText = taskBody;

    const label = document.createElement('label');
    label.innerText = 'Completed ?';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'completed';

    if(status) {
        checkbox.checked = true;
        checkbox.setAttribute('checked', 'checked');
    }

    label.prepend(checkbox);

    const btn = document.createElement('button');
    btn.className = 'btn btn-danger delete-btn';
    btn.innerHTML = 'delete it';


    mainWrp.append(taskWrp);
    taskWrp.append(heading);
    taskWrp.append(taskDesc);
    taskWrp.append(label);
    taskWrp.append(btn);

    return mainWrp;
}




