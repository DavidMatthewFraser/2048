// Setup board
var gameBoard = {};
const NUM_TILES = 16;
// TODO refactor
const BOARD_LENGTH = 4;
const BOARD_HEIGHT = 4;

function setup(){
  for(var i=1; i<=4; i++){
    for(var j=1; j<=4; j++){
      index = i + "," + j;
      gameBoard[index] = {
        "element": document.getElementById(index),
        "hungry": true
      };
      gameBoard[index].element.innerHTML = "-";
    }
  }
}

//start game
setup()
display()

// wait for keyboard press
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { // up
        move("up");
    }
    else if (e.keyCode == '40') { // down
        move("down");
    }
    else if (e.keyCode == '37') { // left
       move("left");
    }
    else if (e.keyCode == '39') { // right
       move("right");
    }
}

// TODO write game logic
function playerMove(){
    // reset did absorb
    for(var i=1; i<=4; i++){
      for(var j=1; j<=4; j++){
        index = i + "," + j;
        gameBoard[index].hungry = true;
      }
    // move_made = true
    // while move_made
    // 4 times
    // 3 times
    // swap loop (direction)

    // move_made = false
    // starting at each location of either top row, bottom row, left column, or right column
    // if current square is -, swap with next square
      //move_made = true
    // if current swuare is #, and next square = same #, and hungry, current *=2 next = '-', hungry=false
    // else move to next square
}

// TODO: fix swap
function move(direction) {
  switch(direction){
    case "up":
      console.log("up");
      for(var y=1; y<4; y++){
        for(var x=1; x<=4; x++){
          index1 = x + "," + y;
          index2 = x + "," + (y + 1);
          swop(index1, index2);
        }
      }
      break;
    case "down":
      for(var y=4; y>1; y--){
        for(var x=1; x<=4; x++){
          index1 = x + "," + y;
          index2 = x + "," + (y - 1);
          swop(index1, index2);
        }
      }
      console.log("down");
      break;
    case "left":
      for(var x=1; x<4; x++){
        for(var y=1; y<=4; y++){
          index1 = x + "," + y;
          index2 = (x + 1) + "," + y;
          swop(index1, index2);
        }
      }
      console.log("left");
      break;
    case "right":
    for(var x=4; x>1; x--){
      for(var y=1; y<=4; y++){
        index1 = x + "," + y;
        index2 = (x - 1) + "," + y;
        swop(index1, index2);
      }
    }
      console.log("right");
      break;
  }
}

// handle a single swop
function swop(cell1, cell2) {
  temp = gameBoard[cell1].element.innerHTML;
  document.getElementById(cell1).innerHTML = document.getElementById(cell2).innerHTML;
  document.getElementById(cell2).innerHTML = temp;
  //swap backgroundColor
  temp = gameBoard[cell1].element.style.backgroundColor;
  document.getElementById(cell1).style.backgroundColor = document.getElementById(cell2).style.backgroundColor;
  document.getElementById(cell2).style.backgroundColor = temp;
}

// Spawn a random tile
function spawn_tile(location) {
  newTile = String(rand(2) * 2);
  gameBoard[location].element.innerHTML = newTile;
  console.log("reached");
}

// Get a random number
function rand(range){
  return Math.floor(Math.random() * range) + 1;
}

// Display board
function display(){
  for (const cell in gameBoard) {
      //console.log(gameBoard[cell].element.innerHTML);
      document.getElementById(cell).innerHTML = gameBoard[cell].element.innerHTML;
  }
}
