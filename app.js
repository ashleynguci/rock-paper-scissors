const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreboard_div = document.getElementsByClassName("scoreboard");
const result =  document.getElementsByClassName("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){
const choices = ['r','p','s'];
const value = Math.floor(Math.random()*3);
///value is the index of choices array, runs from 0->2 because Math.floor formular
return choices[value];
}

///Whichtype is parameter that we put inside, we call function play("r"), play("p") later
function play(Whichtype){
    const computerchoice = getComputerChoice();
    console.log("Uuser  " + Whichtype);
    console.log("BUpet  " + computerchoice)
}

///why
function main(){
    rock_div.addEventListener("click",function()(play("r");

})
paper_div.addEventListener("click",function(){play("p");

})
scissor_div.addEventListener("click",function(){play("s");

})

}
main();
