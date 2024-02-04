/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo}
 */
const todoList = [];

export function getAllTodoes() {
  return todoList;
}

/**
 * Creates a new Todo based on the passed
 * in data
 *
 * @param {TodoCreationInfo} data
 * @returns {Todo}
 */
export function addTodo() {
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-input").value;
  const id = todoList.length + 1;
  const createdAtDate = new Date().toLocaleDateString();
  const todo = {
    title: title,
    description: description,
    id: id,
    createdAtDate: createdAtDate,
    isComplete: false,
  };

  todoList.push(todo);

  return todo;
}
