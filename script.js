var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// Creating a function that will render the todos into a list in the browser.
function renderTodos() {
	// Clearing todoList element and update todoCountSpan
	// Setting the text content of the todoList to an empty string.
	todoList.innerHTML = "";
	// Setting todoCountSpan to show the total count of todos on the page.
	todoCountSpan.textContent = todos.length;

	// Render a new li for each todo
	// Looping over the `todos` array creating an `li` element for each index of the array.
	for (var i = 0; i < todos.length; i++) {
		var todo = todos[i];

		var li = document.createElement("li");
		li.textContent = todo;
		todoList.appendChild(li);
	}
}
