var randomNumber1=Math.random();
randomNumber1=randomNumber1*5;
randomNumber1=Math.floor(randomNumber1);
n=randomNumber1;


var arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src",arr[n]);

///////////////////////////////////////////////////////////////////////////////////////////

var randomNumber1=Math.random();
randomNumber1=randomNumber1*5;
randomNumber1=Math.floor(randomNumber1);
n1=randomNumber1;

var arr2=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img2").setAttribute("src",arr2[n1]);

///////////////////////////////////////////////////////////////////////////////////////////

if(n>n1){
    document.querySelector("h1").textContent= " 🏆 Player 1 Wins" ;
}
else if(n1>n){
    document.querySelector("h1").textContent= "Player 2 Wins 🏆" ;
}
else if(n=n1){
    document.querySelector("h1").textContent= "Draw" ;
}

















///////////////////////////////////////////////////////////////////////////////////////////
