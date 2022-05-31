var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Skilled enough to draw with the Royal Guard? Come find us in a few years");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		(botsWeapon=="paper" && playersWeapon=="scissors") ||
		(botsWeapon=="rock" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="rock")
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("You thought you could join our army with such amateur moves? Resume your studies at the academy junior...");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You may be worthy after all!");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}