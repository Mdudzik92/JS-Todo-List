var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

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
		// Setting the data index for each li
		li.setAttribute("data-index", i);

		// Adding a complete button for each added todo and appending it to the list.
		var button = document.createElement("button");
		button.textContent = "Complete";

		li.appendChild(button);
		todoList.appendChild(li);
	}
}

function init() {
	// Getting stored todos from localStorage and parsing the JSON string to an object
	var storedTodos = JSON.parse(localStorage.getItem("todos"));

	// If todos were retrieved from localStorage, update the todos array to it
	if (storedTodos !== null) {
		todos = storedTodos;
	}

	// Then render todos to the DOM
	renderTodos();
}

function storeTodos() {
	// Stringifying and setting "todos" key in localStorage to todos array
	localStorage.setItem("todos", JSON.stringify(todos));
}

// Adding an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.
todoForm.addEventListener("submit", function (event) {
	event.preventDefault();

	// Putting the user's input value into a variable and cutting off any extra spaces they might have left
	var todoText = todoInput.value.trim();

	// If the text is submitted blank return early
	if (todoText === "") {
		return;
	}

	// Adding new todoText to todos array
	todos.push(todoText);
	// Clearing the input afterwards
	todoInput.value = "";

	// Storing updated todos in localStorage, then re-rendering the list
	storeTodos();
	renderTodos();
});

// Adding an event listener so that when a user clicks the Complete button, it accesses the `data-index` value and removes that todo element from the list.
todoList.addEventListener("click", function (event) {
	var element = event.target;

	// If the clicked element is a button...
	if (element.matches("button") === true) {
		// Get its data-index value and remove the todo element from the list
		var index = element.parentElement.getAttribute("data-index");
		todos.splice(index, 1);

		// Storing updated todos in localStorage, then re-rendering the list
		storeTodos();
		renderTodos();
	}
});
