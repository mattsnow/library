function book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

book.prototype.bookRead = function () {
  if (this.read) {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, already read. ")
  } else {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, not read yet. ")
  }
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

function createNewBook(form) {
  var newBook = new book(form.title.value, form.author.value, form.numPages.value, form.readStatus.checked);
  addBookToLibrary(newBook);
  generateCard(newBook);
  alert(newBook.title + " has been added to the library")
  toggleBookForm();
}

function toggleBookForm() {
  var x = document.getElementById("addBook");
  var y = document.getElementById("toggleBookForm");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }

  x.reset();
}

// Main Code:

let myLibrary = [];

addBookToLibrary(new book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('To Kill a Mockingbird', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('One Hundred Years of Solitude', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('In Search of Lost Time', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('Ulysses', 'J.R.R. Tolkien', 295, true));

myLibrary.forEach(generateCard);