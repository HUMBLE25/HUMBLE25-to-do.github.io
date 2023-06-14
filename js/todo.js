const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoLists = document.getElementById("todo-list");

const TODOS_KEY = "todos"
const toDos = [];

const saveToDo = () => {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

const deleteToDo = (event)=>{
    const li = event.target.parentElement;

    li.remove();
}

const paintTodo = (newTodo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");

    span.innerText = newTodo;

    const button =document.createElement("button");

    button.innerText = "❌";

    button.addEventListener("click",deleteToDo);

    li.appendChild(span);

    li.appendChild(button);

    toDoLists.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();

    const newToDo = toDoInput.value;

    toDoInput.value = "";

    toDos.push(newToDo);

    paintTodo(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const SavedToDs = localStorage.getItem(TODOS_KEY);

if(SavedToDs){
    const parsedToDos = JSON.parse(SavedToDs);

    parsedToDos.forEach(paintTodo);
    // 아래의 로직은 위의 한줄과 같은 기능을 하는 것들이다.

    // for(let todo of parsedToDos){
    //     paintTodo(todo);
    // }

    // parsedToDos.forEach(e => paintTodo(e))
}
