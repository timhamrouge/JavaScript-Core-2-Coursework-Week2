/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
}

/**
 *
 * I want to render my to-do list on my page. 
 * When I click an item I want to add a line-through style to the item to show I've done it.
 * If I decide that I haven't actually finished the item, I should be able to click again and remove the line-through style.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * - Iterate through the array of todos.
 * - Use a <ul> and <li> to display the todos. 
 * - Each todo should have an event listener for when they are clicked.
 * - The event listener should add the line-through style to the todo.
 * - The event listener should also remove the line-through style conditionally by checking if the style is already applied.
 */

function exerciseFour(todos) {
  //Write your code in here
}

/**
 *
 * I want to render a dropdown list on my page. It will be a list of colours.
 * When a colour from the list is selected, the selection will appear on screen e.g. 'You have selected: blue'. 
 * The text informing the user of their selection will also change colour to match the selected colour.
 * e.g. 'You have selected: blue' will display all in blue. 'You have selected: green' will be green etc.
 * 
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * - Create a <select> element.
 * - Create a <p> element.
 * - Iterate through the array of colours.
 * - Each element in the array should add a <option> to the <select>, where the <option> is the element in the array.
 * - Each <option> should have a 'click' event listener to update the contents and colour of the <p> with the selected colour.
 */

function exerciseFive(list) {
  //Write your code in here
}


/**
 * I want to render a paragraph of text on my page. 
 * I also want to render a dropdown box with 3 options; 'word', 'cat', 'dog'.
 * When I click on a word in the paragraph, I want it to change depending on which word is selected in the dropdown.
 * If 'cat' is selected, the word should change to 'cat'.
 * If 'dog' is selected, the word should change to 'dog'.
 * If 'word' is selected, the word should return to the original word, if it isn't already that.
 * 
 * 
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * - Create a <p> element.
 * - Create a <select> element.
 * - Iterate over the options array and create an <option> element in the <select> for each element.
 * - You'll need to turn the paragraph into an array to iterate over it. You can use the .split(" ") method here.
 * - Iterate over the array of words. 
 * - For each word, create a <span> element and set the innerText to the word, plus a space - " ". Add this to the <p>.
 * - We need to keep a record of the word. We can set the <span> "value" attribute to be the word to do this. 
 * - Each <span> should have an eventListener that will listen for clicks.
 * - When clicked, we need to check the value of the <select> element using the .value property.
 * - If the value of the <select> is 'cat' or 'dog', we need to set the contents of the span to be 'cat ' or 'dog ', don't forget the     *   spaces!
 * - If the value of the <select> is 'word'. We need to set the contents of the span to be the original word. We can get the value we   *   assigned to the span earlier to do this!
 */

function exerciseSix(paragraph, options) {
  //Write your code in here
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);

exerciseFour([{todo: "wash the dishes"}, {todo: "walk the dog"}, {todo: "learn javascript"}, {todo: "go shopping"}])

exerciseFive(["red", "blue", "green", "yellow", "pink", "brown"])

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est."

let options = ['word', 'cat', 'dog'];

exerciseSix(paragraph, options);