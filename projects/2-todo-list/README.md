# ToDo-list

## Explanation

This is a super handy, super simple to do list.

You will be given a list of tasks which are "To Do". We call these tasks "ToDos"

Each item in the list should have 2 buttons:

- One to click when the ToDo has been completed - it will apply a line-through style to the text of the ToDo.
- A second to delete the ToDo. This could be used to delete completed ToDos from the list, or remove ToDos that we are no longer interested in doing.

We also want to be able to add ToDos to the list using an input field and a button. When ToDos are created this way they should be added to the list with the 2 above buttons.

More details for the implementation of this challenge can be found in `script.js`

## Installation

Fork this repository and then open in VSCode. To view the website, open index.html in a browser.

## Advanced Challenge

### Mass delete of completed ToDos

Develop the ToDo list further and allow users to delete all completed ToDos.

Add a button that users can click that will iterate through the list of ToDos and then delete them only if they have been completed.

## Extra Advanced Challenge

### Set deadlines for ToDos

We want users to be able to set, and see, deadlines for their ToDos.

When creating ToDos we want the user to be able to use a datepicker input so they can see when they need to complete the ToDo. The date be added to the ToDo in the list. If there is no date set when the ToDo is created then this can be skipped.

EXTRA CHALLENGE: instead of displaying the date on the ToDo, implement a countdown of days left until the deadline. You can use the Javascript Date reference to accomplish this:
https://www.w3schools.com/jsref/jsref_obj_date.asp
