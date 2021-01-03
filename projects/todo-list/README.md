# Todo-list

## Explanation

This is a super handy, super simple to do list. 

You will be given a list of todos, each one should have 2 buttons:
* One to click when the todo has been completed - it will apply a line-through style to the text of the todo.
* A second to click to delete the todo. This could be used to delete completed todos from the list, or remove todos that we are no longer interested in doing.

We also want to be able to add todos to the list using an input field and a button. When todos are created this way they should be added to the list with the 2 above buttons. 

More details for the implementation of this challenge can be found in `script.js`

## Installation

Fork this repository and then open in VSCode. To view the website, open index.html in a browser.

## Advanced Challenges

### Mass delete of completed todos

Develop the todo list further and allow users to delete all completed Todos.

Have a button that users can click that will iterate through the list of todos and then delete them if they have been completed. 

### Set deadlines for Todos

We want users to be able to set, and see, deadlines for their todos.

When creating todos we want the use to be able to use a datepicker input so they can see when they need to complete the todo. This should be added to the todo in the list. If there is no date set when the todo is created then this set should be skipped.

EXTRA CHALLENGE: instead of displaying the date on the todo, implement a countdown of days left until the deadline. You can use the Javascript Date reference to accomplish this:
https://www.w3schools.com/jsref/jsref_obj_date.asp
