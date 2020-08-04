/* global mouseX, tint, mouseY, keyPressed, keyCode, image, frameRate, keyIsPressed, UP_ARROW, DOWN_ARROW, random, LEFT_ARROW, RIGHT_ARROW, loadImage, textFont, textSize, LEFT, textAlign, text, strokeWeight, createCanvas, stroke, noFill, colorMode, HSB, noStroke, background, windowWidth, CORNER, windowHeight, width, height, rectMode, CENTER, rect, fill */

let currentScore, highScore, boardSize, tileSize, gapSize;
let topLeftRectX, topLeftRectY;
let legalMove, newTilePos, tileGenerated;
let breakout;
let momo, appa, suki, mai, iroh, azula, sokka, toph, katara, zuko, aang, bumi;
let snapchat,
  facebook,
  twitter,
  google,
  youtube,
  apple,
  instagram,
  dropbox,
  pinterest,
  linkedin,
  skype,
  tesla;
let pulseTimer, pulsePos;
let mode, modeImg;
let newTileNum;
let gameIsOver = false;
let dict, techDict;
let tileArray = [];
for (let i = 0; i < 16; i++) {
  tileArray[i] = 0;
}

let destinationArr = [];

function preload() {
  momo = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(6).jpg?v=1595622921373"
  );
  appa = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(5).jpg?v=1595622938615"
  );
  suki = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(14).jpg?v=1595622989336"
  );
  mai = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(11).jpg?v=1595622994894"
  );
  iroh = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(9).jpg?v=1595622913915"
  );
  azula = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(10).jpg?v=1595622912000"
  );
  sokka = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(7).jpg?v=1595622917671"
  );
  toph = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(15).jpg?v=1595622986820"
  );
  katara = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(8).jpg?v=1595622916182"
  );
  zuko = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(12).jpg?v=1595622993427"
  );
  aang = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(4).jpg?v=1595622943744"
  );
  bumi = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2Fb56a94aa8c3a07328b0c3025a3a3f586%20Cropped%20(13).jpg?v=1595622991362"
  );
  snapchat = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped.jpg?v=1596051355986"
  );
  facebook = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(1).jpg?v=1596051413240"
  );
  twitter = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(3).jpg?v=1596051458010"
  );
  google = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(2).jpg?v=1596051459907"
  );
  youtube = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(6).jpg?v=1596051516619"
  );
  apple = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(5).jpg?v=1596051517985"
  );
  instagram = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(4).jpg?v=1596051519733"
  );
  dropbox = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(10).jpg?v=1596051568171"
  );
  pinterest = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(7).jpg?v=1596051573426"
  );
  linkedin = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(12).jpg?v=1596051597903"
  );
  skype = loadImage(
    "https://cdn.glitch.com/a8a04d6d-3bdc-440d-b7a5-e1ea390a11ce%2FSocial-Media-Vector-Icons-1%20Cropped%20(11).jpg?v=1596051599403"
  );
  tesla = loadImage(
    "https://cdn.glitch.com/c4b00765-53dc-4bc2-a17f-e3ea31b88ba3%2Fpreview.jpg?v=1596052558230"
  );

  dict = {
    2: momo,
    4: appa,
    8: suki,
    16: mai,
    32: iroh,
    64: azula,
    128: sokka,
    256: toph,
    512: katara,
    1024: zuko,
    2048: aang,
    4096: bumi
  };
  techDict = {
    2: skype,
    4: pinterest,
    8: linkedin,
    16: dropbox,
    32: twitter,
    64: facebook,
    128: snapchat,
    256: instagram,
    512: apple,
    1024: youtube,
    2048: google,
    4096: tesla
  };
}

function setup() {
  // Canvas & color settings
  createCanvas(windowWidth / 2, (windowWidth * 3) / 4); // board should be 300 x 300 or equiv. ratio; top section:bottom section = 3:1
  background(50);
  colorMode(HSB, 360, 100, 100);
  boardSize = height / 2;
  tileSize = (boardSize * 7) / 33;
  gapSize = (boardSize * 1) / 33;
  topLeftRectX = width / 2 - boardSize / 2;
  topLeftRectY = (height * 21) / 32 - boardSize / 2;
  currentScore = 0;
  highScore = 0;
  legalMove = false;
  tileGenerated = false;
  mode = "avatar";

  // DRAWING THE FIRST TWO 2 TILES
  newBoard();
}

function drawStructure() {
    
    //Draw header
    fill(100);
    textAlign(LEFT);
    textFont("Georgia"); // we can change it later
    textSize(30);
    text("Avatar", topLeftRectX, (topLeftRectY * 3) / 5); //The top of the grid is 13*height/32 from the top
    text("By: Kayla + Jay", (topLeftRectX * 5) / 4, (topLeftRectY * 9) / 10);
    textSize(90);
    text("2048", topLeftRectX, (topLeftRectY * 15.5) / 20);

    // Score Boxes
    stroke(100);
    fill(20);
    strokeWeight(6);
    rect(
      topLeftRectX + (boardSize * 2) / 3,
      (topLeftRectY * 3) / 5 - (boardSize * 1) / 20,
      boardSize / 3,
      boardSize / 8,
      20
    );
    rect(
      topLeftRectX + (boardSize * 2) / 3,
      (topLeftRectY * 3) / 5 + (boardSize * 1.5) / 12,
      boardSize / 3,
      boardSize / 8,
      20
    );

    textSize(15);
    strokeWeight(0.5);
    fill(100);
    textAlign(CENTER);
    text(
      "highscore:",
      topLeftRectX + (boardSize * 2) / 3 + boardSize / 6,
      (topLeftRectY * 3) / 5 - (boardSize * 1) / 20 + (boardSize * 2.5) / 50
    );
    text(
      `${highScore}`,
      topLeftRectX + (boardSize * 2) / 3 + boardSize / 6,
      (topLeftRectY * 3) / 5 - (boardSize * 1) / 20 + (boardSize * 4.5) / 50
    );

    strokeWeight(6);
    fill(20);
    rect(
      topLeftRectX + (boardSize * 2) / 3,
      (topLeftRectY * 3) / 5 + (boardSize * 1.5) / 12,
      boardSize / 3,
      boardSize / 8,
      20
    );

    strokeWeight(0.5);
    fill(100);
    text(
      "current score:",
      topLeftRectX + (boardSize * 2) / 3 + boardSize / 6,
      (topLeftRectY * 3) / 5 + (boardSize * 1.5) / 12 + (boardSize * 2.5) / 50
    );
    text(
      `${currentScore}`,
      topLeftRectX + (boardSize * 2) / 3 + boardSize / 6,
      (topLeftRectY * 3) / 5 +
        (boardSize * 1.5) / 12 +
        (boardSize * 1) / 25 +
        (boardSize * 2.5) / 50
    );
    textAlign(LEFT);

    // Main Board, drawn after tiles
    fill(100);
    rect(
      width / 2 - boardSize / 2,
      (height * 21) / 32 - boardSize / 2,
      boardSize,
      boardSize
    );
    //Go left to right, then top to bottom

    fill(90); // we'll change this
    noStroke();
    for (let i = 0; i < 4; i++) {
      let xPos = topLeftRectX + (i + 1) * gapSize + i * tileSize;
      for (let j = 0; j < 4; j++) {
        let yPos = topLeftRectY + (j + 1) * gapSize + j * tileSize;
        rect(xPos, yPos, tileSize, tileSize);
      }
    }

    // Bottom Text, the bottom is size 3 * height / 32
    fill(90);
    textSize(18);
    text(
      "Choose Theme:",
      topLeftRectX,
      topLeftRectY + boardSize + (1.5 * height) / 32 + (height * 0.5) / 64
    );

    // Draw theme buttons
    fill(20);
    stroke(100);
    strokeWeight(4);

    // AVATAR BUTTON
    rect(
      topLeftRectX + (boardSize * 3.5) / 12,
      topLeftRectY + boardSize + (height * 2) / 64,
      boardSize / 5,
      boardSize / 14,
      10
    );
    fill(100);
    noStroke();
    text(
      "Avatar",
      topLeftRectX + (boardSize * 3.5) / 10.5,
      topLeftRectY + boardSize + height / 18
    );
    noFill();
    stroke(100);

    //TECH BUTTON
    rect(
      topLeftRectX + (boardSize * 6.5) / 12,
      topLeftRectY + boardSize + (height * 2) / 64,
      boardSize / 5,
      boardSize / 14,
      10
    );
    fill(100);
    noStroke();
    text(
      "Tech",
      topLeftRectX + (boardSize * 6.5) / 10.75,
      topLeftRectY + boardSize + height / 18
    );
    noFill();
    stroke(100);
    rect(
      topLeftRectX + (boardSize * 9.5) / 12,
      topLeftRectY + boardSize + (height * 2) / 64,
      boardSize / 5,
      boardSize / 14,
      10
    );
    textSize(15);
    fill(100);
    noStroke();
    text(
      "New Game",
      topLeftRectX + (boardSize * 19.6) / 24,
      topLeftRectY + boardSize + (1.48 * height) / 37 + height / 64
    );
  
}

function draw() {
    drawStructure();
  
//     // Define Destination Array
//     for (let m = 0; m <= 31; m++) {
//       if (m <= 15) {
//         destinationArr[m] = tileArray[m];
//       } else {
//         // destinationArr[m] = newUpArrow(m);
//       }
      
//     }

    // Draw Tiles
    for (let i = 0; i < tileArray.length; i++) {
      if (tileArray[i] != 0 && tileArray[i]) {
        tileArray[i].merged = false;
        tileArray[i].draw();
      }
    }
    //background(0);
  
  if(gameIsOver) {
    fill(50, 0.5);
    rect(
      width / 2 - boardSize / 2,
      (height * 21) / 32 - boardSize / 2,
      boardSize,
      boardSize
    );
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text("Game Over!", width / 2, (height * 21) / 31);
  }
  gameIsOver = checkGameOver();
  
  if(pulseTimer > 0) {
    tileArray[pulsePos].pulse();
  }
  pulseTimer--;
}

function checkGameOver() {
  let gameOver = true;
  if (!tileArray.includes(0)) {
    for (let i = 0; i < tileArray.length; i++) {
      //Indices in the order: up, right, down, left
      let surroundingTiles = [i - 4, i + 1, i + 4, i - 1];
      surroundingTiles = surroundingTiles.filter(function(x){ return x >= 0 });
      surroundingTiles = surroundingTiles.filter(function(x){ return x <= 15 });
      for (let j = 0; j < surroundingTiles.length; j++) {
        let iRow = Math.floor(i/4);
        let iCol = i%4;
        let jRow = Math.floor(surroundingTiles[j]/4);
        let jCol = surroundingTiles[j] % 4;
        if (iRow == jRow || iCol == jCol) {
          if (tileArray[i].tileValue === tileArray[surroundingTiles[j]].tileValue) {
            gameOver = false;
          }
        }
      }
    } 
  } else if(tileArray.includes(0)) {
    gameOver = false;
  }
  return gameOver;
}

function mousePressed() {
  // if(mouseX > 100 && mouseX < 200) {
  //   console.log('new game pressed');
  // }
  if (
    mouseX >= topLeftRectX + (boardSize * 9.5) / 12 &&
    mouseX <= topLeftRectX + (boardSize * 9.5) / 12 + boardSize / 5
  ) {
    if (
      mouseY >= topLeftRectY + boardSize + (height * 2) / 64 &&
      mouseY <= topLeftRectY + boardSize + (height * 2) / 64 + boardSize / 14
    ) {
      tileArray = [];
      for (let i = 0; i < 16; i++) {
        tileArray[i] = 0;
      }
      newBoard();
    }
  }
  if (
    mouseX >= topLeftRectX + (boardSize * 3.5) / 12 &&
    mouseX <= topLeftRectX + (boardSize * 3.5) / 12 + boardSize / 5
  ) {
    if (
      mouseY >= topLeftRectY + boardSize + (height * 2) / 64 &&
      mouseX <= topLeftRectY + boardSize + (height * 2) / 64 + boardSize / 14
    ) {
      mode = "avatar";
    }
  }
  if (
    mouseX >= topLeftRectX + (boardSize * 6.5) / 12 &&
    mouseX <= topLeftRectX + (boardSize * 6.5) / 12 + boardSize / 5
  ) {
    if (
      mouseY >= topLeftRectY + boardSize + (height * 2) / 64 &&
      mouseX <= topLeftRectY + boardSize + (height * 2) / 64 + boardSize / 14
    ) {
      mode = "tech";
    }
  }
}

function newBoard() {
  gameIsOver = false;
  let tile1Random = Math.floor(random(0, 16));
  let tile2Random = Math.floor(random(0, 16));
  tileArray[tile1Random] = new Tile(tile1Random, 2, false);

  while (tile2Random == tile1Random) {
    tile2Random = Math.floor(random(0, 16));
  }
  tileArray[tile2Random] = new Tile(tile2Random, 2, false);
  currentScore = 0;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    let moves = newUpArrow();
    while (moves > 0) {
      moves = newUpArrow();
    }
  } else if (keyCode === DOWN_ARROW) {
    let moves1 = newDownArrow();
    while (moves1 > 0) {
      moves1 = newDownArrow();
    }
  } else if (keyCode === RIGHT_ARROW) {
    let moves2 = newRightArrow();
    while (moves2 > 0) {
      moves2 = newRightArrow();
    }
  } else if (keyCode === LEFT_ARROW) {
    let moves3 = newLeftArrow();
    while (moves3 > 0) {
      moves3 = newLeftArrow();
    }
  }
  if (legalMove) {
    generateTile();
  }
  legalMove = false;
}

function newUpArrow() {
  let numMoves = 0;
  for (let i = 4; i < tileArray.length; i++) {
    if (tileArray[i] != 0) {
      let count = 1;
      while (tileArray[i] != 0 && i - count * 4 >= 0) {
        if (
          tileArray[i - count * 4] != 0 &&
          tileArray[i - count * 4].tileValue === tileArray[i].tileValue
        ) {
          if (
            tileArray[i - count * 4].tileValue === tileArray[i].tileValue &&
            !tileArray[i - count * 4].merged &&
            !tileArray[i].merged
          ) {
            let newTile = new Tile(
              i - count * 4,
              2 * tileArray[i].tileValue,
              true
            );
            //tileArray[i].glide("up");
            updateScore(2 * tileArray[i].tileValue);
            tileArray[i - count * 4] = newTile;
            //canMerge[i % 4] = false;
            tileArray[i] = 0;
            legalMove = true;
            numMoves++;
            pulseTimer = 10;
            pulsePos = i - count * 4;
          }
        } else if (tileArray[i - count * 4] != 0) {
          // do not move
          break;
        } else {
          // move, it's blank
          tileArray[i - count * 4] = new Tile(
            i - count * 4,
            tileArray[i].tileValue,
            false
          );
          // tileArray[i].glide("up");
          tileArray[i] = 0;
          legalMove = true;
          numMoves++;
          
        }
        count++;
      }
    }
  }
  return numMoves;
}

function newDownArrow() {
  let numMoves = 0;
  for (let i = 11; i >= 0; i--) {
    if (tileArray[i] != 0) {
      let count = 1;
      while (tileArray[i] != 0 && i + count * 4 <= 15) {
        if (
          tileArray[i + 4] != 0 &&
          tileArray[i + count * 4].tileValue === tileArray[i].tileValue
        ) {
          if (
            tileArray[i + count * 4].tileValue === tileArray[i].tileValue &&
            !tileArray[i + count * 4].merged &&
            !tileArray[i].merged
          ) {
            let newTile = new Tile(
              i + count * 4,
              2 * tileArray[i].tileValue,
              true
            );
            updateScore(2 * tileArray[i].tileValue);
            tileArray[i + count * 4] = newTile;
            tileArray[i] = 0;
            legalMove = true;
            numMoves++;
            pulseTimer = 10;
            pulsePos = i + count * 4;
          }
        } else if (tileArray[i + count * 4] != 0) {
          // do not move
          break;
        } else {
          // move, it's blank
          tileArray[i + count * 4] = new Tile(
            i + count * 4,
            tileArray[i].tileValue,
            false
          );
          tileArray[i] = 0;
          legalMove = true;
          numMoves++;
        }
        count++;
      }
    }
  }
  return numMoves;
}

function newRightArrow() {
  let numMoves = 0;
  for (let i = 15; i >= 0; i--) {
    if (i % 4 != 3 && tileArray[i] != 0) {
      let count = 1;
      while (tileArray[i] != 0 && (i + count) % 4 != 0) {
        if (
          tileArray[i + count] != 0 &&
          tileArray[i + count] &&
          tileArray[i + count].tileValue === tileArray[i].tileValue
        ) {
          if (
            tileArray[i + count].tileValue === tileArray[i].tileValue &&
            !tileArray[i + count].merged &&
            !tileArray[i].merged
          ) {
            let newTile = new Tile(i + count, 2 * tileArray[i].tileValue, true);
            updateScore(2 * tileArray[i].tileValue);
            tileArray[i + count] = newTile;
            tileArray[i] = 0;
            legalMove = true;
            numMoves++;
            pulseTimer = 10;
            pulsePos = i + count;
          }
        } else if (tileArray[i + count] != 0) {
          // do not move
          break;
          // legalMove = false;
        } else {
          // move, it's blank
          tileArray[i + count] = new Tile(
            i + count,
            tileArray[i].tileValue,
            false
          );
          tileArray[i] = 0;
          legalMove = true;
          numMoves++;
        }
        count++;
      }
    }
  }
  return numMoves;
}

function newLeftArrow() {
  let numMoves = 0;
  for (let i = 0; i <= 15; i++) {
    if (i % 4 != 0 && tileArray[i] != 0) {
      let count = 1;
      while (tileArray[i] != 0 && (i - count) % 4 != 3 && count < 5) {
        if (
          tileArray[i - count] != 0 &&
          tileArray[i - count] &&
          tileArray[i - count].tileValue === tileArray[i].tileValue
        ) {
          if (
            tileArray[i - count].tileValue === tileArray[i].tileValue &&
            !tileArray[i - count].merged &&
            !tileArray[i].merged
          ) {
            let newTile = new Tile(i - count, 2 * tileArray[i].tileValue, true);
            updateScore(2 * tileArray[i].tileValue);
            tileArray[i - count] = newTile;
            tileArray[i] = 0;
            legalMove = true;
            numMoves++;
            pulseTimer = 10;
            pulsePos = i - count;
          }
        } else if (tileArray[i - count] != 0) {
          // do not move
          break;
        } else {
          // move, it's blank
          tileArray[i - count] = new Tile(
            i - count,
            tileArray[i].tileValue,
            false
          );
          tileArray[i] = 0;
          legalMove = true;
          numMoves++;
        }
        count++;
      }
    }
  }
  return numMoves;
}

function generateTile() {
  //Array of indices
  let c = 0;
  let availableTiles = [];

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i] == 0) {
      availableTiles.push(i);
    }
  }
  newTilePos = Math.floor(random(availableTiles.length - 1));
  // IF WE HAVE TIME: make the new tile either 2 or 4
  let decider = Math.floor(random(2));

  if (decider == 0) {
    newTileNum = 2;
  } else {
    newTileNum = 4;
  }
  tileArray[availableTiles[newTilePos]] = new Tile(
    availableTiles[newTilePos],
    newTileNum,
    false
  );
}

function updateScore(score) {
  currentScore += score;
  if (currentScore >= highScore) {
    highScore = currentScore;
  }
}

class Tile {
  constructor(tilePos, tileValue, merged) {
    this.tilePos = tilePos;
    this.tileValue = tileValue;
    this.tileX =
      topLeftRectX +
      ((this.tilePos % 4) + 1) * gapSize +
      (this.tilePos % 4) * tileSize;
    this.tileY =
      topLeftRectY +
      (Math.floor(this.tilePos / 4) + 1) * gapSize +
      Math.floor(this.tilePos / 4) * tileSize;
    this.merged = merged;
  }

  draw() {
    // Top left is 0, board looks like:
    // 0 1 2 3
    // 4 5 6 7
    // 8 9 10 11
    // 12 13 14 15
    if (mode === "avatar") {
      modeImg = dict[this.tileValue];
    } else if (mode === "tech") {
      modeImg = techDict[this.tileValue];
    }

    image(
      modeImg,
      this.tileX,
      this.tileY,
      Math.floor(tileSize),
      Math.floor(tileSize)
    );
  }
  
  pulse() {
    if (mode === "avatar") {
      modeImg = dict[this.tileValue];
    } else if (mode === "tech") {
      modeImg = techDict[this.tileValue];
    }
    
    image(
      modeImg,
      this.tileX - 0.5 * gapSize,
      this.tileY - 0.5 * gapSize,
      Math.floor(tileSize + gapSize),
      Math.floor(tileSize + gapSize)
    );
  }
}
