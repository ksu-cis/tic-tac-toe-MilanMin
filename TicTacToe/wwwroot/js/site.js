// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

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
