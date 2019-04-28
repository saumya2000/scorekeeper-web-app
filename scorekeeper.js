var buttonp1 = document.querySelector("#p1");
var buttonp2 = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numinput = document.querySelector("input");
var winningscoredisplay = document.querySelector("p span");
var scorep1 = 0;
var scorep2 = 0;
var gameOver = false;
var winningScore = 5;
buttonp1.addEventListener("click",function(){
	if (!gameOver) {
 	scorep1++;
 	if (scorep1===winningScore) {
 		p1display.classList.add("winner");
 		gameOver=true;
 	}
 	p1display.textContent=scorep1;
    }
});

buttonp2.addEventListener("click",function(){
 	if (!gameOver) {
 	scorep2++;
 	if (scorep2===winningScore) {
 		p2display.classList.add("winner");
 		gameOver=true;
 	}
 	p2display.textContent=scorep2;
    }
});

resetbutton.addEventListener("click",function(){
 	reset();
});

function reset(){
	scorep1=0;
 	scorep2=0;
 	p1display.textContent=0;
 	p2display.textContent=0;
 	p1display.classList.remove("winner");
 	p2display.classList.remove("winner");
 	gameOver=false;
}

numinput.addEventListener("change",function(){
 	winningscoredisplay.textContent=numinput.value;
 	winningScore=Number(numinput.value);
 	reset();
});
