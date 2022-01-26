/*
const todos = [
  { tittle: "Todo 1", description: "House Bug Cleaner.." },
  { tittle: "Todo 2", description: "Life Test.." },
  { tittle: "Todo 3", description: "Play a Game.." },
];

let todoListElement = document.getElementById("todo");

function todoList() {
  // delay
  setTimeout(() => {
    let todoItems = "";
    todos.forEach((item) => {
      todoItems += `
          <li>
            <b>${item.tittle}</b>
            <p>${item.description}</p>
          </li>`;
    });
    todoListElement.innerHTML = todoItems;
  }, 1000);
}

function newToDo(todo, callback) {
  setTimeout(() => {
    todos.push(todo);
    callback();
  }, 2000);
}

newToDo(
  {
    tittle: "Todo 4",
    description: "Waste of Time..",
  },
  todoList
);

todoList();
*/
