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

book.prototype.toggleRead = function (index) {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
  var x = document.getElementById(`${index}`);
  x.innerHTML = generateCardText(this.bookObject, index);
}

function generateCardText(bookObject, index) {
  return (`${myLibrary[index].bookRead()}` + 
  `<button class='button' onclick=removeBook(${index})>Remove Book</button>` + 
  `<button class='button' onclick=myLibrary[${index}].toggleRead(${index})>Toggle Read Status</button>`)
}

function generateCard(bookObject, index) {
  let div = document.createElement('div');
  div.className = 'book';
  div.id = index;
  div.innerHTML = generateCardText(bookObject, index);
  var element = document.getElementById("book");
  element.appendChild(div);
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function createNewBook(form) {
  var newBook = new book(form.title.value, form.author.value, form.numPages.value, form.readStatus.checked);
  addBookToLibrary(newBook);
  var newBookID = (myLibrary.length - 1);
  generateCard(myLibrary[newBookID], newBookID);
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

function removeBook(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}

// function storageAvailable(type) {
//   var storage;
//   try {
//       storage = window[type];
//       var x = '__storage_test__';
//       storage.setItem(x, x);
//       storage.removeItem(x);
//       return true;
//   }
//   catch(e) {
//       return e instanceof DOMException && (
//           // everything except Firefox
//           e.code === 22 ||
//           // Firefox
//           e.code === 1014 ||
//           // test name field too, because code might not be present
//           // everything except Firefox
//           e.name === 'QuotaExceededError' ||
//           // Firefox
//           e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//           // acknowledge QuotaExceededError only if there's something already stored
//           (storage && storage.length !== 0);
//   }
// }

// Main Code:

let myLibrary = [];

addBookToLibrary(new book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new book('To Kill a Mockingbird', 'Harper Lee', 281, true));
addBookToLibrary(new book('One Hundred Years of Solitude', 'Gabriel García Márquez', 448, false));
addBookToLibrary(new book('In Search of Lost Time', 'Marcel Proust', 4215, false));
addBookToLibrary(new book('Ulysses', 'James Joyce', 730, true));

myLibrary.forEach((value, index) => {
  generateCard(value, index);
})

// Experimenting with local storage... this method will lose the book prototype functions when loaded in

// console.table(JSON.parse(localStorage.getItem('bookArray')))

// myLibrary = JSON.parse(localStorage.getItem('bookArray'));

// if (storageAvailable('localStorage')) {
//   console.log("Yippee! We can use localStorage awesomeness");
//   localStorage.setItem('bookArray', JSON.stringify(myLibrary));
//   console.log(localStorage.getItem('test'))
//   if (localStorage.getItem('bookArray') == null){console.log("nothing stored here")}
//   else {console.table(JSON.parse(localStorage.getItem('bookArray')))};
// }
// else {
//   Too bad, no localStorage for us
// }

