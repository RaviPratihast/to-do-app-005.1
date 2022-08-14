'use strict'

// ---selectors--
const inputItem = document.getElementById("input-item")

const addButton = document.getElementById('input-add-btn');

const todo = document.getElementById("todo");


// event listeners

addButton.addEventListener('click',createTodo);
todo.addEventListener('click', deleteItem);



// function

function createTodo(event){

    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo-list-container');

    const li=document.createElement('li');
    li.classList.add('todo-item-added');

    const checkedBtn=document.createElement('button');
    checkedBtn.classList.add('checked-btn');
    checkedBtn.innerHTML='Check';
    

    const deleteBtn=document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML='Del';

    // assining
    li.innerHTML=inputItem.value;

   
    // appending
    todo.appendChild(todoDiv);
    todoDiv.appendChild(li);
    todoDiv.appendChild(checkedBtn);
    todoDiv.appendChild(deleteBtn);

    // empty the box

    inputItem.value='';


  
}


function deleteItem(e){
    // grab the item which we are clicking;
    const item=e.target;
    console.log(item.classList[0]);

    if(item.classList[1]==='delete-btn'){
      const todo=item.parentElement;
      todo.remove();
    }
}