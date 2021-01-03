/* The populateTodoList function should iterate over the list of todos that we are given at the start, it should create a <li> for the todo along with some other stuff that you can find in index.html. The items in the todo list are currently hard-coded into the HTML, refactor the code so that this function creates them and adds the following functionality to them:

Each todo should have this HTML inside it:
  <span class="badge bg-primary rounded-pill">
    <i class="fa fa-check" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
  </span>

The first <i> tag needs an event listener that applies a line-through text-decoration styling to the text of the todo. It should remove the styling if it is clicked again.

The second <i> tag needs an event listener that delete the parent <li> element from the <ul> todelete the todo.
*/

function populateTodoList(todos) {
  let list = document.getElementById("todo-list")
  // Write your code to create todo list elements with completed and delete buttons here.
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event){
  // this prevent the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
}

populateTodoList(["Wash the dishes", "Do the shopping"])

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}