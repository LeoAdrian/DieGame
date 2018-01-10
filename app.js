/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

"use strict"

// first clear all scores on refresh
clearScores();
var player0 = document.getElementsByClassName("player-0-panel");
// var for adding dice results
var s  = 0;
var s1 = 0;
var gameOver = false;

var clicks = 0;
$(".btn-roll").on("click",function(){
	if(!gameOver){
	// targeting img tag
	// var src = document.getElementsByTagName("IMG");
	
	// getting the index of the number in src attr

	// index = src[0].src.charAt(87);

	// getting a random number on firing

	var random = Math.floor(Math.random() * 6) + 1;

	// transform the number to string in order to push it in the src attr

	// index = random.toString();
	
	// slicing the last part of src and adding the random index
	
	// var suffix = index + src[0].src.slice(88)
	
	// first part of src 
	
	// var newUrl = src[0].src.slice(0,87);
	
	// creating a new path
	
	// var url = newUrl+suffix
	
	// replacing the existing string with the new one
	// var neu = src[0].src.replace(src[0].src, url);
	
	document.getElementsByClassName("dice")[0].src = random + ".png";

	// creating a function for counting dice results if it doesn't return 1

	function clickCount(i) {
		// input limit 
		if(document.getElementById("score-"+i).innerHTML < 100 ){
			if(random !== 1){
				clicks+=random;
				document.getElementById("current-"+i).innerHTML = clicks;
			} else {
				changePlayer();
				clicks = 0;
				document.getElementById("current-"+i).innerHTML = 0;
			}
		} else {
			gameOver = true;
		}
	}
	if(player0[0].className === "player-0-panel active"){
		clickCount(0);	
	} else {
		clickCount(1);
	}
}
})

// creating a new game
$(".btn-new").on("click",function(){
	clicks = 0;
	clearScores();
});


// adding the functionality to store the added results of the dice
$(".btn-hold").on("click",function(){
	if(!gameOver){
		if(player0[0].className === "player-0-panel active"){
			var currentScore = document.getElementById("score-0").innerHTML;
			var scoreBox = document.getElementById("current-0").innerHTML;
			document.getElementById("score-0").innerHTML = s+=Number(scoreBox);
			document.getElementById("current-0").innerHTML = 0;
			clicks = 0;
			// limiting the score to 100
			if(document.getElementById("score-0").innerHTML >= 100){
				// not letting the score go over 100
				document.getElementById("score-0").innerHTML = 100;
				document.getElementById("name-0").innerHTML = "Winner";
				document.getElementById("name-0").style.color = "red";
				gameOver = true;
			}
		} else {
			var currentScore = document.getElementById("score-1").innerHTML;
			var scoreBox = document.getElementById("current-1").innerHTML;
			document.getElementById("score-1").innerHTML = s1+=Number(scoreBox);
			document.getElementById("current-1").innerHTML = 0;
			clicks = 0;
			// limiting the score
			if(document.getElementById("score-1").innerHTML >= 100){
				document.getElementById("score-1").innerHTML = 100;
				document.getElementById("name-1").innerHTML = "Winner";
				document.getElementById("name-1").classList.toggle("winner");
				gameOver = true;
			}
		}
	}
})

function clearScores(){
	for(var i = 0; i < document.getElementsByClassName("player-score").length; i++){
		document.getElementsByClassName("player-score")[i].innerHTML = 0;
		document.getElementsByClassName("player-current-score")[i].innerHTML = 0;

	}
	clicks = 0;
	s=0;
	s1=0;
	document.getElementById("name-0").innerHTML = "Player 1";	
	document.getElementById("name-0").style.color = "black";	
	document.getElementById("name-1").innerHTML = "Player 2";	
	document.getElementById("name-1").style.color = "black";
	gameOver = false;
}

function changePlayer(){
	// changing active class
	$(".player-0-panel").toggleClass("active");
	$(".player-1-panel").toggleClass("active");


}

// adding functionality to "hold" button
// function store(i){
// 	var currentScore = document.getElementById("score-"+i).innerHTML;
// 	var scoreBox = document.getElementById("current-"+i).innerHTML;
// 	 document.getElementById("score-"+i).innerHTML = s+=Number(scoreBox);
// 	 document.getElementById("current-"+i).innerHTML = 0;
// 	 clicks = 0;
// 	};