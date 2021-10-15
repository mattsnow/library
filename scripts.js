let myLibrary = ["To Kill a Mockingbird", "Stoner", "1984"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
    const input = prompt("Enter the book name");
    myLibrary.push(input);
}

// addBookToLibrary();
console.table(myLibrary);