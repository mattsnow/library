// Grouping things into objects can simplify code

// Before: 

const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// After: 

const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jenn",
    marker: "O"
}

// Allows us to create universal functions e.g:

function gameOver(winningPlayer) {
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}

gameOver(playerOne);

// This is fine... but would take lots of code if we had e.g. 100 players

// If you have a specific object that you need to duplicate, use an object constructor

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

// Now we can create new objects based off this "template".. and even add functions to the object

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

// Exercise

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (this.read) {return(title + " by " + author + ", " + pages + " pages, already read. ")}
        else {return(title + " by " + author + ", " + pages + " pages, not read yet. ")}
    }
}

var theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(theHobbit.info());

// Adding a method to the Book prototype property so other objects can inherit it

Book.prototype.authorWeek = function () {
    return("Author of the week is: " + this.author);
}

console.log(theHobbit.authorWeek());

// If you're using constructors, it's better to define function on the prototype of that object
// Otherwise the function would be duplicated every time you create a new object (could be bad on big projects)

function Student(name, grade) {
    this.name = name
    this.grade = grade
  }
  
  Student.prototype.sayName = function() {
    console.log(this.name)
  }

// Recommended method for prototypal inheritance
// Using Object.create (this returns a new object with the specified prototype)
// Basically lets you customise functions without overwriting the original

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8

