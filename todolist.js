// selectors
const todoinput=document.querySelector(".todo-input")
const inputbtn=document.querySelector(".todo-btn")
const todolist=document.querySelector(".todo-list")
const filter=document.querySelector('.filter-todo')


// listners
document.addEventListener('DOMContentLoaded',localload)
inputbtn.addEventListener("click",addtodo)
todolist.addEventListener("click",deletecheck)
filter.addEventListener("click",filteropt)

// functions
function addtodo(event){
    // bash mayb3tch submit
        event.preventDefault();
    // creating a todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // creating a li
    const newli = document.createElement('li');
    newli.innerText=todoinput.value;
    newli.classList.add('todo-item');
    // ndiro li dakhel div
    todoDiv.appendChild(newli);
    // add it to local 
    localsave(todoinput.value);
    // creating the buttons
    const deletebutton=document.createElement('button');
    deletebutton.innerText='delete';
    deletebutton.classList.add('delete-btn');
    const checkbutton=document.createElement('button');
    checkbutton.innerText='check';
    checkbutton.classList.add('check-btn');
    todoDiv.appendChild(deletebutton);
    todoDiv.appendChild(checkbutton);
    // append to the ul
    todolist.appendChild(todoDiv);
    // clearing the input
    todoinput.value="";
}
// bash tnahi wla tdir check
function deletecheck(event){
    event.preventDefault();
    const target= event.target
    // delete li
    if (target.classList[0] === "delete-btn"){
        target.parentElement.classList.add('right')
        localdelete(target.parentElement);
        target.parentElement.addEventListener('transitionend',function(){
        target.parentElement.remove();
        })
        
    }
    // check li
    if (target.classList[0]==="check-btn"){
        target.parentElement.classList.toggle('completed')        
    }
}

function filteropt(e){
    const todos = todolist.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case 'all':
                todo.style.display="flex";
                break;
        case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display="flex";
                }else{
                    todo.style.display="none"
                }
                break;
        case 'uncompleted':
            if (!todo.classList.contains('completed')) {
                todo.style.display="flex";
            }else{
                todo.style.display="none"
            }
                break;            
        }
    })    
}



function localsave(todo) {
    // check
    var todos;
    if (localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos));

}

function localload() {
    // check
    var todos;
    if (localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
         // creating a todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // creating a li
    const newli = document.createElement('li');
    newli.innerText=todo;
    newli.classList.add('todo-item');
    // ndiro li dakhel div
    todoDiv.appendChild(newli);
    // creating the buttons
    const deletebutton=document.createElement('button');
    deletebutton.innerText='delete';
    deletebutton.classList.add('delete-btn');
    const checkbutton=document.createElement('button');
    checkbutton.innerText='check';
    checkbutton.classList.add('check-btn');
    todoDiv.appendChild(deletebutton);
    todoDiv.appendChild(checkbutton);
    // append to the ul
    todolist.appendChild(todoDiv);
    })

}


function localdelete(todo) {
    // check
    var todos;
    if (localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    item=todo.children[0].innerText;
    todos.splice(todos.indexOf(item),1);
    localStorage.setItem('todos',JSON.stringify(todos))

}