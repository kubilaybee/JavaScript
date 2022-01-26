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

function newToDo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      const e = false;

      if (!e) {
        resolve(todos);
      } else {
        reject("Error ..");
      }
    }, 2000);
  });
}

newToDo({
  tittle: "Todo 4",
  description: "Waste of Time..",
})
  .then((response) => {
    console.log("Yeni Liste", response);
    todoList();
  })
  .catch((e) => {
    console.log(e);
  });

// todoList();

// Promise ALL
const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ben 2. Promise'im");
  }, 2000);
});
const p3 = 141432;
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json()
);

Promise.all([p1, p2, p3, p4]).then((promises) => {
  console.log("promises", promises);
});
*/
