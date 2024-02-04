/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";

const ulEL = document.querySelector("#todo-ul");
const addButton = document.querySelector("#add");
const cardEL = document.querySelector(".todo-card");
const completeImg = document.querySelector(".checkmark");

addButton.addEventListener("click", () => {
  const todoEL = createTodoElement(todoList.addTodo());
  const todoCard = todoEL.querySelector(".todo-card");
  todoEL.querySelector(".checkmark").addEventListener("click", () => {
    if (todoCard.classList.contains("task-complete")) {
      todoCard.classList.remove("task-complete");
    } else {
      todoCard.classList.add("task-complete");
    }
  });
  ulEL.appendChild(todoEL);
  console.log("click");
});
// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?
