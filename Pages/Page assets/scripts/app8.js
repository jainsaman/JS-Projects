const addToDo = document.getElementById('addToDo');
const ToDoContainer = document.getElementById('ToDoContainer');
const inputField = document.getElementById('inputField');

addToDo.addEventListener('click', ()=>{
    ToDoContainer.style.display = "block";
    var task = document.createElement('p');
    var del = document.createElement('span')
    task.classList.add('taskStyle');
    del.classList.add('delTask');
    task.innerText = inputField.value;
    del.innerText = "X";
    ToDoContainer.appendChild(task);
    task.appendChild(del);
    inputField.value = "";
    
    del.addEventListener('click', ()=>{
        ToDoContainer.removeChild(task);
    });
});