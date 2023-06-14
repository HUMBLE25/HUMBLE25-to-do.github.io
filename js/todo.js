const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const paintTodo = (newTodo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");

    // const button =document.createElement("button");

    li.append(span);

    // li.append(button);

    span.innerText = newTodo;

    toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();

    const newToDo = toDoInput.value;

    toDoInput.value = "";
    paintTodo(newToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit)