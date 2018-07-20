'use strict';
//-------------------------------------------------------------//
//Lets define some classes
//-------------------------------------------------------------//

//defining a class via a function, and methods by creating anon functions within
function apple(name, color) {
    this.name = name;
    this.color = color;
    console.log("Apple added! Name: " + this.name + " Color: " + this.color);
    this.get = function () {
        console.log(this.name + " is " + this.color);
    };
}

//using prototype we can avoid creating duplicate get() methods for each object, instead using inheritence
function pear(name, color) {
    this.name = name;
    this.color = color;
    console.log("Pear added! Name: " + this.name + " Color: " + this.color);
}

sapple.prototype.get = function () {
    console.log(this.name + " is " + this.color);
};

//an actual class, with a constructor and methods!
class berry {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        console.log("Berry added! Name: " + this.name + " Color: " + this.color);
    }
    get() {
        console.log(this.name + " is " + this.color);
    }
}

//lets extend the class!
class food {
    constructor(type) {
        this.type = type;
    }
}

class fruit extends food {
    constructor(type, name, color) {
        super(type); //need to call parent class 'fruit's constructor by using super()
        this.name = name;
        this.color = color;
        console.log("Fod added! Type: " + this.type + "Name: " + this.name + " Color: " + this.color);
    }
    get() { //fancy get method
        console.log(this.name + " is " + this.color);
    }
}

//-------------------------------------------------------------//
//Lets get recursive(recursive)
//-------------------------------------------------------------//

var data = [];

// lets make a function to add to the array
data.populate = function (n) {
    for (let i = 1; i <= n; i++) {
        let v = (data ? data.length + 1 : 1);
        data.push("item-" + v);
    }
};

var removeData = function () { //assignment
    var item = data.pop();
    console.log(data.length);
    if (item) {
        removeData();
    }
};

function removeDataFunc() { //declaration
    var item = data.pop();
    console.log(data.length);
    if (item) {
        removeDataFunc();
    }
}

data.removeData = function () { //as a method of the data Object
    var item = data.pop();
    console.log(data.length);
    if (item) {
        this.removeData();
    }
};

//-------------------------------------------------------------//

//output in console each recursion
var fizzbuzz = function (n, m) {
    var fizz = '';

    if (!(n % 3)) {
        fizz += 'fizz';
    }

    if (!(n % 5)) {
        fizz += 'buzz';
    }

    console.log(fizz ? fizz : n);

    if (n < m) {
        fizzbuzz(++n, m); //we use ++n instead of n++ because we need the post incremented value
    }
};

//saved into a string that is passed recursively
var fizzbuzzOneLine = function (n, m, o) { //passing the range params and output
    var output = o || "";
    var copy = '';

    if (!(n % 3)) {
        copy += 'fizz ';
    }

    if (!(n % 5)) {
        copy += 'buzz ';
    }
    output += copy ? copy : n + " "; //adding extra space for number only values
    if (n < m) {
        fizzbuzzOneLine(++n, m, output);
    } else {
        console.log(output); //finally output all our items
    }
};

//-------------------------------------------------------------//

var countdown = function (value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};

//-------------------------------------------------------------//
//String manipulation
//-------------------------------------------------------------//

//string split to manipulate date
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let str = userDate.split('/');
    for (let i in str) {
        if (str[i].length == 1) {
            str[i] = "0" + str[i];
        }
    }
    return (str[2] + str[0] + str[1]).toString();
}

//reverse a string
function reverse(s) {
    return s.split("").reverse().join("");
}

function reverseSentence(s) {
    return s.split(" ").reverse().join(" ");
}

//-------------------------------------------------------------//
//Quick maths
//-------------------------------------------------------------//

//need numbers first!
var numbers = [1, 4, 2, 6, 3, 10, 15, 20, 2, 50, 12, 0, 1, 3];

function findMin(d) {
    let val = 0;
    for (let i in d) {
        val = d[i] < val ? d[i] : val;
    }
    return val;
}

function findMax(d) {
    let val = 0;
    for (let i in d) {
        val = d[i] > val ? d[i] : val;
    }
    return val;
}

function modulus(n, d) {
    return n % d;
}

function sortNumber(a,b) {
    return a - b;
}

function distinctValues(a) {
    let data = []; //empty array
    for (let i in a) {
        let dupe = false; //set a flag
        for (let n in data) { //nested for loop to check current val against uniques
            if (a[i] == data[n]) {
                dupe = true;
            }
        }
        if (dupe == false) {
            data.push(a[i]);
        }
    }
    return data.sort(sortNumber);
}

//    JS TEST PROBLEMS:
//    Reverse a string
//    Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
//    Find the minimum value in a list
//    Find the maximum value in a list
//    Calculate a remainder (given a numerator and denominator)
//    Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
//    Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
//    Given a string of expressions (only variables, +, and -) and a set of variable/value pairs (i.e. a=1, b=7, c=3, d=14) return the result of the expression ("a + b+c -d" would be -3).

function randomIntFromInterval(min, max) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//-------------------------------------------------------------//
//DOM manipulation
//-------------------------------------------------------------//

function remove(e) { //expects an html element
    e.parentElement.remove();
}

document.addEventListener("click", function (e) { //addEventListener returns whole event, not just html object
    if (e.target && e.target.className == "remove") { //target is the html element
        remove(e.target);
    }
});

document.addEventListener("DOMContentLoaded", function () { //doc ready
    document.getElementById("add").onclick = function () {
        let el = document.createElement("div");
        el.className = "image";

        let img = document.createElement("img");
        img.src = "img/" + randomIntFromInterval(1, 3) + ".png";

        let btn = document.createElement("button");
        btn.className = "remove";
        btn.innerHTML = "x";

        el.appendChild(img);
        el.appendChild(btn);

        document.getElementById("container").appendChild(el);
    }
});