const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoLists = document.getElementById("todo-list");

const toDos = [];

const saveToDo = () => {
    localStorage.setItem("toDos",JSON.stringify(toDos))
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

toDoForm.addEventListener("submit",handleToDoSubmit)