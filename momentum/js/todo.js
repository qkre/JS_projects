const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    console.log(newToDoObj);
    paintToDo(newToDo);
    toDos.push(newToDoObj);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(toDos);
    toDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    });
    console.log(toDos);
    saveToDos();
    li.remove();
    
}



function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    span.innerText = newToDo.text;

    li.appendChild(button);
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo);

    toDoList.appendChild(li);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {paintToDo(element)});
}