// If the number button has been clicked,it will refers the number to this num array and add to the bar's textcontent.
let num = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
let bar = document.querySelector("td.bar");
// numKey selects all numbers excluding 0.
let numKey = document.querySelectorAll("td.n");
// numZero has to be defined independently because it can't be add to the bar when there are no numbers in the beginning.
let numZero = document.querySelector("td.n0");
// when the clear button has been clicked,textcontent of the bar will be set to "".
let clearBtn = document.querySelector("td.c");
// when back arrow has been clicked,it pops one key out of bar array.
let back = document.querySelector("td.back");

let plus = document.querySelector("td.plus");
let multi = document.querySelector("td.multi");
let divid = document.querySelector("td.divide");
let minus = document.querySelector("td.minus");
// equl is a processor handelling events when clicked.
let equl = document.querySelector("td.eq");

clearBtn.addEventListener("click", function() {
   bar.textContent = "";
})

// when clicked,'back' take the string in the bar into a new array called 'barArr',next it pops out one key from the array,and reform a string using 'join'.
back.addEventListener("click", function() {
    let barArr = bar.textContent.split("");
    barArr.pop();
    bar.textContent = barArr.join("");
})

plus.addEventListener("click", function() {
    if (bar.textContent !== "") {
        bar.textContent += "+";
    }
})

multi.addEventListener("click", function() {
    if (bar.textContent !== "") {
        bar.textContent += "x";
    }
})

divid.addEventListener("click", function() {
    if (bar.textContent !== "") {
        bar.textContent += "÷";
    }
})

minus.addEventListener("click", function() {
    if (bar.textContent !== "") {
        bar.textContent += "-";
    }
})






equl.addEventListener("click", function() {
    let plusBar;
    let sum;
    if (bar.textContent.indexOf('+') > -1) {
        // ex: "12+34+56" --> ['12', '34', '56'] 
        plusBar = bar.textContent.split('+');
        // ex: sum = 0 + 12, sum = 12 + 34, ......
        sum = 0;
        for (let j = 0; j < plusBar.length; j++) {
            sum += Number(plusBar[j]);
        }
        // add "" to turn sum into string and add to the textcontent of the bar.
        bar.textContent = "" + sum;
    } else if (bar.textContent.indexOf('-') > -1) {
        // ex: "12-3-4" --> ['12', '3', '4']
        plusBar = bar.textContent.split('-');
        // ex: sum = 12 - 3, sum = 9 - 4, ......
        sum = plusBar[0];
        for (let k = 1; k < plusBar.length; k++) {
            sum -= Number(plusBar[k]);
        }
        bar.textContent = "" + sum;
    } else if (bar.textContent.indexOf('x') > -1) {
        // ex: "12x3x4" --> ['12', '3', '4']
        plusBar = bar.textContent.split('x');
        // ex: sum = 1 * 12, sum = 12 * 3, ......
        sum = 1;
        for (let r = 0; r < plusBar.length; r++) {
            sum *= Number(plusBar[r]);
        }
        bar.textContent = "" + sum;
    } else if (bar.textContent.indexOf('÷') > -1) {
        // ex: "12÷3÷4" --> ['12', '3', '4']
        plusBar = bar.textContent.split('÷');
        // ex: sum = 12 / 3, sum = 4 / 4, ......
        sum = plusBar[0];
        for (let o = 1; o < plusBar.length; o++) {
            sum /= Number(plusBar[o]);
        }
        bar.textContent = "" + sum;
    }
})

// when clicked,the bar will show up the numbers(7,8,9,4,5,6,1,2,3)
for (let i = 0; i < numKey.length; i++) {
    numKey[i].addEventListener("click", function() {
        bar.textContent += num[i];
    })
}

// number 0 should be handle differently.
numZero.addEventListener("click", function() {
    if (bar.textContent !== "") {
        bar.textContent += "0";
    }
})