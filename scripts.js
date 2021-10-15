let myLibrary = [
  "To Kill a Mockingbird",
  "Stoner",
  "1984",
  "In Search of Lost Time",
  "Ulysses",
  "Don Quixote",
  "One Hundred Years of Solitude",
  "The Great Gatsby",
  "Moby Dick",
  "War and Peace",
];

  function book() {
    // the constructor...
  }

function addBookToLibrary() {
  const input = prompt("Enter the book name");
  myLibrary.push(input);
}

function generateCard(bookName) {
  let div = document.createElement('div');
  div.className = 'book';
  div.innerHTML = bookName;
  var element = document.getElementById("book");
  element.appendChild(div);

}


myLibrary.forEach(generateCard);

//generateCard(myLibrary[0]);
//generateCard(myLibrary[1]);

document.getElementById("myBtn").addEventListener("click", function() {
  alert("hello world")
});