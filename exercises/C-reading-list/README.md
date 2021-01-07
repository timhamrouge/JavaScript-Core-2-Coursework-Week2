# Reading List

The function **readingList** takes an array of book objects:

```js
const books = [
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "Harry Potter and the Philosophers Stone",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
];
```

Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

## Exercise

- Iterate through the list of books.
- For each book, create a `<p>` element with the book title and author and append it to the page.
- Use a `<ul>` and `<li>` to display the books.
- Add an `<img>` to each book that links to a URL of the book cover.
- Change the style of the book depending on whether you have read it (green) or not (red).
- All of your HTML should go inside the `<div>` with the id **"content"**.

The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
