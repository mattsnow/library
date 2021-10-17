function book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

book.prototype.bookRead = function () {
  if (this.read) {return(this.title + " by " + this.author + ", " + this.pages + " pages, already read. ")}
  else {return(this.title + " by " + this.author + ", " + this.pages + " pages, not read yet. ")}
}

function generateCard(bookObect) {
  let div = document.createElement('div');
  div.className = 'book';
  div.innerHTML = bookObect.title;
  var element = document.getElementById("book");
  element.appendChild(div);
}

function addBookToLibrary(bookObect) {
  myLibrary.push(bookObect);
}

let myLibrary = [];

addBookToLibrary(new book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('To Kill a Mockingbird', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('One Hundred Years of Solitude', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('In Search of Lost Time', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('Ulysses', 'J.R.R. Tolkien', 295, true));

myLibrary.forEach(generateCard);

document.getElementById("addBook").addEventListener("click", function() {
  alert("hello world")
});