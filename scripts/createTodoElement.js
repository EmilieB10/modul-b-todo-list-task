/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */

// function hello(data) {
//   console.log(data);
// }

export function createTodoElement(data) {
  const todoEL = document.createElement("li");
  todoEL.innerHTML = `
    <div class="todo-card">
      <div class="inside-card">
        <p class="id">ID: ${data.id}</p>
        <h2 class="title">${data.title}</h2>
        <p class="description">${data.description}</p>
        <div class="details flex">
          <img
            class="checkmark"
            src="./images/checkmark.png"
            alt="completed mark"
          />
          <p class="date">${data.createdAtDate}</p>
        </div>
      </div>
    </div>
    `;

  return todoEL;
}
