let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#com-score");

const genComChoice=()=>{
    const options=["stone","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Draw! Play Again.";
    msg.style.backgroundColor="Black";
}

const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        comScore++;
        comScorePara.innerText=comScore;
        msg.innerText=`You Lose! ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}

const playGame=(userChoice) => {
    const comChoice=genComChoice();

    if(userChoice===comChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="stone"){
            userWin=comChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=comChoice==="scissor"?false:true;
        }else {
            userWin=comChoice==="stone"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})