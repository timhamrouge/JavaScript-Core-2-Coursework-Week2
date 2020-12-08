function populateTodoList(todos) {
  let list = document.getElementById("todo-list")
  for (let i = 0; i < todos.length; i++){
      let li = document.createElement("li")
      li.innerText = todos[i]
      li.setAttribute("class", "list-group-item")
      list.appendChild(li)
  }
}

function createTodoElement(){

}

function deleteCompletedTodos(){
  
}

function addNewTodo(event){

    console.log('add new todo', event)
}

populateTodoList(["Wash the dishes", "Do the shopping"])