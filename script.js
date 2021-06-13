/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const UP_ARROW = 38;
const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var puntX = 100;   // x-positie van punt
var puntY = 100;   // y-positie van punt

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("black");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};

var tekenScore = function () {
    fill("green");
    text("score: " + score, 20, 20, 100, 20);
};

var tekenUitleg = function () {
    fill ("white");
    text("gebruik pijltjes toetsen om te bewegen", 1000,50,250,100);
};

/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenPunt = function(x, y) {
    fill("white");
    ellipse(x,y,20,20);
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  rect(x, y, 20, 20);
  x=0
  y=0
};



/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    /* beweeg speler met pijltjes toetsen */
    if (keyCode === LEFT_ARROW) {
      spelerX=spelerX-1;
    } 
    if (keyCode === RIGHT_ARROW) {
      spelerX=spelerX+1;
    } 
    if (keyCode === DOWN_ARROW) {
      spelerY=spelerY+1;
    } 
    if (keyCode === UP_ARROW) {
      spelerY=spelerY-1;
    };

    /* begrens speler tot scherm */
    if (spelerX<0) {
        spelerX=200;
    }
    if (spelerX>1280) {
        spelerX=200;
    }
    if (spelerY<0) {
        spelerY=100;
    }
    if (spelerY>720) 
        spelerY=100;
};
/**
 * Zoekt uit of de speler op een punt staat
 * @returns {boolean} true als speler op punt staat
 */
var checkPuntGeraakt = function() {
  // check of de punt geraakt is, als dat zo is return true anders false
  if (abs(spelerX - puntX) < 50 && // spelerX en puntX minder dan 10 pixels van elkaar 
      abs(spelerY - puntY) < 50) { // spelerY en puntY minder dan 10 pixels van elkaar 
     // uitleg over de functie abs: https://p5js.org/reference/#/p5/abs
     return true;
  }
  return false;
 };


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {   
  return false;
};
var doodSpeler = function () {
    /* speler reset punten */
    if (spelerX<0 || spelerX>1280 || spelerY<0 || spelerY>720)
        score - 1;
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegSpeler();
      
        
      if (checkPuntGeraakt()) {
          puntY=random (30, 400);
          puntX=random (30, 400);
          score += 1;
         // uitleg over random https://p5js.org/reference/#/p5/random

        // punten erbij
        // de plek van de punt veranderen
        // probeer eerst de punt op 100,100 te zetten. pas daarna je code aan dat het met random werkt
        

      }

      tekenVeld();
      tekenScore();
      tekenPunt(puntX, puntY);
      tekenSpeler(spelerX, spelerY);
      tekenUitleg();
      doodSpeler();
      tekenScore();

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
};}
