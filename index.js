var num=Math.random();
num=Math.floor(num*7);
if (num===1) {
	document.getElementsByClassName("img1")[0].setAttribute("src","dice1.png");
}else if (num===2) {
	document.getElementsByClassName("img1")[0].setAttribute("src","dice2.png");
}else if (num===3) {
	document.getElementsByClassName("img1")[0].setAttribute("src","dice3.png");
}else if (num===4) {
	document.getElementsByClassName("img1")[0].setAttribute("src","dice4.png");
}else if (num===5) {
	document.getElementsByClassName("img1")[0].setAttribute("src","dice5.png");
}else if (num===6) {
	document.getElementsByClassName("img1")[0].setAttribute("src","dice6.png");
}

var num1=Math.random();
num1=Math.floor(num1*7);
if (num1===1) {
	document.getElementsByClassName("img2")[0].setAttribute("src","dice1.png");
}else if (num1===2) {
	document.getElementsByClassName("img2")[0].setAttribute("src","dice2.png");
}else if (num1===3) {
	document.getElementsByClassName("img2")[0].setAttribute("src","dice3.png");
}else if (num1===4) {
	document.getElementsByClassName("img2")[0].setAttribute("src","dice4.png");
}else if (num1===5) {
	document.getElementsByClassName("img2")[0].setAttribute("src","dice5.png");
}else if (num1===6) {
	document.getElementsByClassName("img2")[0].setAttribute("src","dice6.png");
}

if (num>num1) {
	document.querySelector("h1").innerHTML="⛳ Player 1 wins";
}else if (num1>num){
	document.querySelector("h1").innerHTML="Player 2 wins ⛳";
}else{
	document.querySelector("h1").innerHTML="Draw"
}
