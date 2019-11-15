// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

/*
var turn = "x";


function setTurn() {
    var turnElement = document.getElementById("turn");

    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinnner(winner) {
    var turnElement = document.getElementById("turn");

    turnElement.innerText = winner + " wins!";
    var cells = document.getElementsByClassName("square");
    for (i = 0; i < 9; i++) {
        cells[i].removeEventListener("click", onClick);
    }
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    //Check horizontal cels
    for (var i = 0; i < 9; i+= 3) {
        if (cells[i].innerText && cells[i].innerText === cells[i+1].innerText && cells[i+1].innerText === cels[i+2].innerText) {
            setWinner(cells[i]);
            return true;
        }
    }

    //Check veritcal cells
    for (var i = 0; i < 3; i++) {
        if (cells[i].innerText && cells[i].innerText === cells[i+3].innerText && cells[i+3].innerText == cells[i+6].innerText) {
            setWinner(cells[i]);
            return true;
        }
    }

    return false;
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }
        if (!checkForWin()) {
            setTurn();
        }
        
    }
}

var cells = document.getElementsByClassName("square");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();

//SERVER TIC TAC TOE

var form = document.getElementById("board");
var cells = document.getElementsByClassName("cell");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event => {
        form.submit();
    });
}

*/
var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("dragenter", onDragEnter);
    squares[i].addEventListener("dragend", onDrop);
    squares[i].addEventListener("dragstart", onDragStart);
    squares[i].addEventListener("dragleave", onDragExit);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) {
        return;
    }
    if (event.target.classList.contains("red")) {
        return;
    }
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
    console.log(event);
}

function onDrop(event) {
    event.target.style.backgroundColor = "orange";
}

function onDragExit(event) {
    event.target.style.backgroundColor = null;
}