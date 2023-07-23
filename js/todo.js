const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoLists = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const SavedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

let toDos = SavedToDos ? SavedToDos : [];

const saveToDo = () => {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

const deleteToDo = (event)=>{
    const li = event.target.parentElement;
    //const를 사용하고 싶다면 계속 불러와야 한다.
    //let을 사용하면 재할당을 통해 쉽게 가능하다.
    // const SavedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

    toDos = toDos.filter((el)=>el['id'] !== +li['id']);

    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

    li.remove();
}

const paintTodo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");

    span.innerText = newTodo['text'];

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

    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);

    paintTodo(newTodoObj);

    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

if(SavedToDos){
    SavedToDos.forEach(paintTodo);
}
