// Destructuring.1.1-Extract the first and last element of the prices array.
console.log("1.1-masala");

// const prices = [10.99, 5.45, 23.00, 7.86]

// let [a, , , d] = prices

// console.log("First: ", a);
// console.log("Last: ", d);

// Destructuring.1.2-Swap the first and second elements of the prices array using destructuring.
console.log('1.2-masala');

// let price = [10.99, 5.45, 23.00, 7.86]
// [price[0], price[1]] = [price[1], price[0]]

// console.log(price);

// Destructuring.1.3-Extract the second and third elements into a new array, and then multiply each element by 2.
console.log("1.3-masala");

// const arr = [10.99, 5.45, 23.00, 7.86]

// // const [a, b, c, d] = arr
// [arr[[0]], arr[1], arr[2], arr[3]] = [arr[[0]], arr[3], ...res]


// console.log(res);


// Destructuring.2.1-Combine the information from both objects into a single object using destructuring:
console.log("2.1-masala");

const movie1 = {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
};

const movie2 = {
    genre: "Science fiction",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
};

let nextMovie = { ...movie1, ...movie2 };

console.log(nextMovie);

// Destructuring.2.2-Destructure the combined object, extracting specific data points into separate variables
console.log("2-2-masala");

// let nextMovie = { ...movie1, ...movie2 };

let { title, director, genre, cast } = nextMovie

console.log(title);
console.log(director);
console.log(genre);
console.log(cast);

// Destructuring.2.3-Create a function that takes two objects as arguments and returns a new object combining their data using destructuring
console.log("2.3-masala");;

function combineMovies(a, b) {
    let result = { ...a, ...b };
    return result;
}

let result = combineMovies(movie1, movie2);
console.log(result);

// Rest and Spread.1.1- add a new ingredient at the beginning using prepending
console.log("2.1.1-masala");

const ingred = ['piyoz', 'kartoshka', 'sabzi']
const newIng = "karam";

const newIngred = [newIng, ...ingred]

console.log(newIngred);

// Rest and Spread.1.2-include additional properties like isActive: true and lastLogin: new Date()
console.log("2.1.2-masala");

const user = {
    name: 'John',
    userName: 'Doe'
}

const newObject = {
    isActive: true,
    lastLogin: new Date(), ...user
}

console.log(newObject);

// Rest and Spread.1.3-Combining User Profile Data
console.log("2.1.3-masala");

let user1 = {
    username: 'Ann',
    age: 25
}

let user2 = {
    city: 'Colorado',
    email: 'ann@gmail.com'
}

const rested = { ...user1, ...user2 }

console.log(rested);

// 2.2.1-sorting numbers
console.log("2.2.1-masala");

const numbers = [3, 7, 1, 9, 4]

const newNums = [...numbers].sort((a, b) => a - b)

console.log(newNums);

// 2.2.2-finding max number
console.log("2.2.2-masala");

function findMax(...numbers) {
    return Math.max(...numbers);
}

const maxNumber = findMax(1, 5, 2, 4, 3);
console.log(maxNumber);


// 3.1.1- Book Class:titile, author, genre, availability (boolean)
console.log("3.1.1-masala");

class Books {
    constructor(title, author, genre, availability) {
        this.title = title
        this.author = author
        this.genre = genre
        this.availability = true
    }

    borrow() {
        if (!this.available) {
            console.log(`Kechirasiz '${this.title}' kitob mavjud emas`);
        } else {

            this.available = false;
            console.log(`Bu kitob '${this.title}' ${this.author} tomonidan olindi.`);
        }
    }

    returnBook() {
        if (!this.available) {
            this.available = true;
            console.log(`'${this.title}' kitobni qaytarganingiz uchun rahmat.`);
        } else {
            console.log(`'${this.title}' allaqachon mavjud.`);
        }
    }
}

const book1 = new Books("Harry Potter", "J K Rawling", "Fantasy");
const book2 = new Books("Alice's Adventures in Wonderland", "Lewis Carroll", "Fantasy");

book1.borrow();
book2.returnBook();

// 3.1.2-Library name, books (an array of Book objects)
console.log("2.2.3-masala");

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`'${book.title}' kitobi kutubxonaga qo'shildi.`);
    }

    searchBook(title) {
        const foundBook = this.books.find(book => book.title === title);
        return foundBook || null;
    }


    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index == -1) {
            console.log(`'${book.title}' kitobi kutubxonadan topilmadi.`);
        } else {
            this.books.splice(index, 1);
            console.log(`'${book.title}' kitobi kutubxonadan olib tashlandi.`);
        }
    }

    borrowBook(title) {
        const book = this.searchBook(title);
        if (book) {
            book.borrowBook();
        } else {
            console.log(`'${title}' kitobi kutubxonadan topilmadi.`);
        }
    }

    returnBook(title) {
        const book = this.searchBook(title);
        if (book) {
            book.returnBook();
        } else {
            console.log(`'${title}' kutubxonadan topilmadi.`);
        }
    }
}

const library = new Library("My Library");
const book3 = new Books("Mieko and the Fifth Treasure", "Eleanor Coerr", "story");

library.addBook(book3);

// 5.3-getComputedStyle
console.log("5.3-");

let button = document.getElementById(btn)
window.getComputedStyle(button)
console.log(window.getComputedStyle(button));

// 5.3-Document fragment

// const ul = document.getElementsByClassName('ul').appendChild(fragment)
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const ul = document.getElementsByClassName('ul')
const fragment = document.createDocumentFragment();

for (let fruit in fruits) {
    const li = document.createElement("li");
    li.textContent = fruits[fruit];
    fragment.appendChild(li);
}

ul.append(fragment);
