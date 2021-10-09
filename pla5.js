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
console.log("cifo: "+cifo);

const pi = 3.1416;  // Segunda variable
console.log("pi: "+pi);

let distance = 0;  // terzera variable
distance = answer*1000+195;
console.log("distance: "+ distance);

const yeap = true ;
console.log("yeap: " + yeap) ;

const nope = false;
console.log("nope: " + nope) ;


let condition = cifo === question;
console.log("condition: "+ condition);

condition = distance >= 42000;
console.log("condition: "+ condition);


var pi_sign = "π";
console.log("pi_sign: " + pi_sign);

var pi_text = "The number " + pi_sign +  " is a mathematical constant, approximately equal to " + pi + " defined in... "
console.log( 'pi_text: ' + pi_text);

var cifo_text = "El Bruc is approximately " + 42195 + " meters away from the CIFO location";
console.log( 'cifo_text: ' + cifo_text);

/* Task 2 ------------------------------------------------------------------ */

const lang = 'ca';
const age = 35;



// Write your first `if` block below this line:
if ( age >= 30) {
    console.log(" You are a boomer!")
}

// Write your second `if` block below this line:
if ( age <= 20 ) {
    console.log(" Too young to be a boomer!")
} else if ( age < 35) { 
    console.log(" Quite close to be a boomer")
    
} else { 
    console.log(" A boomer for sure!")
    
}

// Write your `switch` block below this line:
switch (lang) {
    case "ca":
console.log("catalan")
        break;
    case "es":
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


/* Task 3 ----------------------------------------------------------------- */

let num = 9;
let sum = 0;
let product = 1;

// Write your `for` loop below this line:
for (let i = 1; i <= num ; i++) {
    sum += i;
    console.log("the sum is: " + sum);  

}


// Write your `while` loop below this line:
let i = 1;
while (i < num) {
    product *= i ;
    i += 1;
    console.log("product: " + product);
}



// Write your `do...while` loop below this line:
let countdown = "";
do{
  countdown = num--;
  console.log( countdown );
} while ( countdown > 3);



/* Task 4 ------------------------------------------------------------------ */

function func1(n) {  // I added the argument to the function
    return n + 10;
}

function func2(n) {
    return n *= n ;   // i added return to the statment
}

function func3(a , b) {
 return "hello " + a + " from " + b ;  // added return statment with string to coplete the sentence required
}

function func4(n) {
    n = n * 42;
    let m = n / 10;
    m = m + ' is a pretty big number';
    return m;  // changed the return variable
}

function func5(city1 , city2) {  // added the arguments to the function
    return 'First we take ' + city1 +' then we take ' + city2;
}

function func6(n) {  // changed the name function     
    var n = 'Double of ' + n + ' is ' + n * 2;
    return n;
}

// Do not modify anything in the console.log lines below!
// But you can uncomment them to check your results, of course.

// expected 23, got error :(
console.log(func1(13));

// expected 25, got undefined :(
console.log(func2(5));

// expected 'Hello Mike from London', got undefined :(
console.log(func3('Mike', 'London')); 

// expected '63 is a pretty big number', got number 630 :(
console.log(func4(15)); 

// expected 'First we take Manhattan then we take Berlin', got error :(
console.log(func5('Manhattan', 'Berlin')); 

// expected 'Double of 7 is 14', got error :(
console.log(func6(7)); 

/* Task 5 ------------------------------------------------------------------ */

const numbers = [1, 2, 3, 4, 5];
const days = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
const mixed = [Date.now(), 'New York', 6.62607004, [['Paris', 'Rome']], {a: 97, e: 101, i: 105}, numbers];
const years = [1978, 2021, 1657, 2301, 1867, 2008];

// Write your one-liners below this line:
console.log(" task 5 :" + days.length);
console.log(" task 5 :" +mixed[2]);
console.log(" task 5 :" + numbers[numbers.length -1]);   
console.log(" task 5 :" +mixed[4].e)
console.log(" task 5 :" +mixed[3][0][1]);


// Replace the `null`s in the code below:
const tuesdayToFriday = days.length-2;
console.log(" task 5 :" + tuesdayToFriday);               

const sortedDays = days.sort();
console.log( "task 5 :" + sortedDays);     

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
let td;
for (td of sortedDays) {
    console.log(" task 5 :" +"today is " + td  );   // I know is not correct, but cannot get a solution to the task
  }


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
console.log(laptop.os);
console.log(laptop.year + 10);
console.log(laptop.apps[3]);
console.log(laptop.owner.phone);



// Write your code to change some properties below this line:

laptop.memory = "32 GB"    //changed memory from 16 Gb to 32 Gb
console.log(laptop.memory)

//I can't find how to add an item to a key and also delete a value from a proprieties inside a an array inside an object :(


// brand property has value Apple
laptop.owner.name = 'Oliver';        //changed the name of owner of laptop
console.log(laptop.owner.name)

// model property has value MacBook Pro
// os property has value macOS Catalina
// year property has value 2014
// memory property has value 32 GB
// processor property has value 3 GHz Dual-Core Intel Core i7
// apps property is an array with 5 elements
// owner property is an object with 2 fields
// Write your `for` loop below this line:



/* Task 7 ------------------------------------------------------------------ */

// 1 to check if a variable is a number we use the function `isNAN()` that will give us result true or false
//   if not exsist the keyword `typeof`

//2  We could use the condition if..else

//3 we use the method "toLowerCase()" to change text in lower case

//4 to change a string in lowercase we use the method toLowerCase()

//5 to give the Data elements and interchange formats we use the function new Date()

//6

//7
