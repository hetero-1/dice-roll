alert("Wait, it's time to play");

var firstPlayer = prompt("Enter name of player 1");
document.querySelector("#player1").innerHTML = firstPlayer;

var randomNum = Math.floor(Math.random()*6)+1;
var image1 = "dice" + randomNum + ".png";
document.querySelector(".img1").setAttribute("src",image1);

var secondPlayer = prompt("Enter name of player 2");
document.querySelector("#player2").innerHTML = secondPlayer;

var randomNum = Math.floor(Math.random()*6)+1;
var image2 = "dice" + randomNum + ".png";
document.querySelector(".img2").setAttribute("src",image2);

if(image1 > image2){
    document.querySelector(".title").innerHTML = firstPlayer + " 👑 Wins!";
}
else if(image1 == image2){
    document.querySelector(".title").innerHTML = "Match Draws";
}
else{
    document.querySelector(".title").innerHTML = secondPlayer + " 👑 Wins!";
}

