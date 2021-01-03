### List of names

The function **todoList** takes an array of todo objects:

```js
const todos = [
  {
    todo: "Water the plants"
  },
  {
    todo: "Wash the car"
  }
];
```

## Exercise

* Render the todo list on the page.
* When I click an item I want to add a line-through style to the item to show I've done it.
* If I decide that I haven't actually finished the item, I should be able to click again and remove the line-through style.
* You should use an `<ul>` for the list and `<li>` tags for the contents.
* Each todo should have an event listener for when they are clicked.
* The event listener should add the line-through style to the todo.
* The event listener should also remove the line-through style conditionally by checking if the style is already applied.
* All of your HTML should go inside the `<div>` with the id **"content"**.
