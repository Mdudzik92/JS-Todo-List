var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [
	"Pick up kids from school",
	"Stop at post office",
	"Go grocery shopping",
	"Code more JavaScript",
];

renderTodos();

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

	// Re-rendering the list
	renderTodos();
});
