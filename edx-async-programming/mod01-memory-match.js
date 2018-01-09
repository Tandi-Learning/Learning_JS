var arrNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var firstCell = 0, secondCell = 0;
var firstNumber = 0, secondNumber = 0;

(function() {
    populateGrid();
    console.log(arrNumbers);
})();

window.onload = function() {
    addClickEvent();
}

function addClickEvent() {
    var cells = document.querySelectorAll(".cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", cellClicked);
        cells[i].addEventListener("mouseover", cellMouseOver);
        cells[i].addEventListener("mouseout", cellMouseOut);
    }
    document.getElementById("btnReset").addEventListener("click", gameReset);
}

function gameReset() {
    var cells = document.querySelectorAll(".cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].className = "cell blue";
        cells[i].innerHTML = "";
    }
    arrNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    firstCell = 0;
    secondCell = 0;
    firstNumber = 0;
    secondNumber = 0;
    populateGrid();
}

function cellMouseOver(e) {
    if (e.target.className.indexOf("red") < 0) 
        e.target.className = "cell orange";
}

function cellMouseOut(e) {
    if (e.target.className.indexOf("red") < 0) 
    e.target.className = "cell blue";
}

function cellClicked(e) {
    if (e.target.className.indexOf("red") > 0)
        return;

    e.target.className = "cell red";
    e.target.innerHTML = arrNumbers[e.target.id - 1];
    if (firstNumber === 0) {
        firstNumber = arrNumbers[e.target.id - 1];
        firstCell = e.target.id;
    }
    else {
        secondNumber = arrNumbers[e.target.id - 1];
        secondCell = e.target.id;

        compareNumbers();
    }
}

function compareNumbers() {
    if (firstNumber != secondNumber) {
        setTimeout(resetFirstAndSecondCells, 1000);
    }
    firstNumber = 0;
    secondNumber = 0;
}

function resetFirstAndSecondCells() {
    var first = document.getElementById(firstCell);
    var second = document.getElementById(secondCell);

    first.className = "cell blue";
    first.innerHTML = "";
    second.className = "cell blue";
    second.innerHTML = "";
}

function populateGrid() {    
    while (countEmptyGrid(arrNumbers) > 0) {
        var num = generateNumberPair(arrNumbers);
        assignNumberPair(num, arrNumbers);
     }
}

function countEmptyGrid(arrNumbers) {
    return arrNumbers.filter(g => g === 0).length
}

function generateNumberPair(arrNumbers) {
    let num = 0
    do {
         num = Math.floor(Math.random() * 50);
    } while (arrNumbers.filter(g => g !== num) > 0)
    return num;
}

function assignNumberPair(num, arrNumbers) {
    let index1 = 0, index2 = 0;
    do {
        index1 = Math.floor(Math.random() * 9);
    } while (arrNumbers[index1] !== 0)

    do {
        index2 = Math.floor(Math.random() * 9);
    } while ((arrNumbers[index2] !== 0 || index1 === index2) && countEmptyGrid(arrNumbers) > 1)

    arrNumbers[index1] = num;
    if (countEmptyGrid(arrNumbers) > 1)
        arrNumbers[index2] = num;
}