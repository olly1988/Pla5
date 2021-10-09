/** ---------------------------------------------------------------------------
 * Desenvolupament Web Frontend
 * PLA 5: Fonaments de JavaScript
 * Mòdul: 2
 * Dedicació: 5 dies (25 hores)
 * Data d'entrega: 8 d'octubre de 2021
 * ------------------------------------------------------------------------- */

/* Task 1 ------------------------------------------------------------------ */

const question = 'What is the answer to life, universe and everything?';
let answer = 0;
answer = 42;

// Write all your variables below this line:
const cifo = "CIFO";        // Primera variable
console.log(cifo);

const pi = 3.1416;  // Segunda variable
console.log(pi);

const yeap = true ;
const nope = false;




/* Task 2 ------------------------------------------------------------------ */

const lang = 'ca';
const age = 38;

// Write your first `if` block below this line:
if ( age >= 30) {
    console.log(" You are aboomer!")
}

// Write your second `if` block below this line:
if ( age <= 20 ) {
    console.log(" Too young to be aboomer!")
} else if ( age < 35) { 
    console.log(" Quite close tobe aboomer")
    
} else { 
    console.log(" A boomer for sure!")
    
}


// Write your `switch` block below this line:
switch (lang) {
    case "ca":
console.log("catalan")
        break;
    case "sp":
console.log("Spanish")
        break;
    case "fr":
console.log("french")
        break;

    default:
        console.log("Some other Language")
        break;
}


// Write your one-liner using ternary operator below this line:
console.log( lang === "ca" ? "catalan" : "Some other language");


/* Task 3 ------------------------------------------------------------------ */

let num = 9;
let sum = 0;
let product = 1;

// Write your `for` loop below this line:


// Write your `while` loop below this line:


// Write your `do...while` loop below this line:


/* Task 4 ------------------------------------------------------------------ */

function func1() {
    return n + 10;
}

function func2(n) {
    n = n * n;
}

function func3() {

}

function func4(n) {
    n = n * 42;
    let m = n / 10;
    m = m + ' is a pretty big number';
    return n;
}

function func5() {
    return 'First we take ' + city1 +' then we take ' + city2;
}

function fumc6(n) {
    n = 'Double of ' + n + ' is ' + n * 2;
    return n;
}

// Do not modify anything in the console.log lines below!
// But you can uncomment them to check your results, of course.

// expected 23, got error :(
// console.log(func1(13));

// expected 25, got undefined :(
// console.log(func2(5));

// expected 'Hello Mike from London', got undefined :(
// console.log(func3('Mike', 'London')); 

// expected '63 is a pretty big number', got number 630 :(
// console.log(func4(15)); 

// expected 'First we take Manhattan then we take Berlin', got error :(
// console.log(func5('Manhattan', 'Berlin')); 

// expected 'Double of 7 is 14', got error :(
// console.log(func6(7)); 

/* Task 5 ------------------------------------------------------------------ */

const numbers = [1, 2, 3, 4, 5];
const days = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
const mixed = [Date.now(), 'New York', 6.62607004, [['Paris', 'Rome']], {a: 97, e: 101, i: 105}, numbers];
const years = [1978, 2021, 1657, 2301, 1867, 2008];

// Write your one-liners below this line:
// console.log(...);

// Replace the `null`s in the code below:
const tuesdayToFriday = null;
const sortedDays = null;
const number = null;
const maxYear = null;

// Today is Friday
// Today is Monday
// Today is Saturday
// Today is Sunday
// Today is Thursday
// Today is Tuesday
// Today is Wednesday
// Write your `for` loop below this line:


/* Task 6 ------------------------------------------------------------------ */

const laptop = {
    brand: 'Apple',
    model: 'MacBook Pro',
    os: 'macOS Catalina',
    year: 2014,
    memory: '16 GB',
    processor: '3 GHz Dual-Core Intel Core i7',
    apps: ['Visual Studio Code', 'Xcode', 'Dropbox', 'Magnet'],
    owner: {
        name: 'Albert',
        phone: '678901234'
    }
}

// Write your one-liners to retrieve some properties below this line:
// console.log(...);

// Write your code to change some properties below this line:


// brand property has value Apple
// model property has value MacBook Pro
// os property has value macOS Catalina
// year property has value 2014
// memory property has value 32 GB
// processor property has value 3 GHz Dual-Core Intel Core i7
// apps property is an array with 5 elements
// owner property is an object with 2 fields
// Write your `for` loop below this line:


/* Task 7 ------------------------------------------------------------------ */

