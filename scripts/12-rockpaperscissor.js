let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
Losses : 0,
Tie :0
};
document.querySelector('.a3').innerHTML = `win:${score.wins}, Lose:${score.Losses}, Tie:${score.Tie}`;

let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    
    if (isAutoPlaying === false){
        intervalId  =  setInterval(function(){
        const playMove = pickComputerMove();
        playGame(playMove);
    },500);
    isAutoPlaying = true;
}else{
    clearInterval(intervalId);
    isAutoPlaying = false;
}
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    result = '';
    if (playerMove ==='scissors'){
        if (computerMove==='rock'){
            result = 'You Lose!';
        }
        else if(computerMove=== 'paper'){
            result = 'You Win!';
        }
        else if(computerMove === 'scissors'){
            result = 'Tie';
    } 
    }
    else if(playerMove=='paper'){

        if (computerMove==='rock'){
            result = 'You Win!';
        }
        else if(computerMove=== 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissors'){
            result = 'You Lose!';
        }
    }

    else if(playerMove ==='rock'){

        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove==='paper'){
            result = 'You Lose!';
        }
        else if(computerMove === 'scissors'){
            result = 'You Win!';
        }
    }
    
    if(result ==='You Win!'){
        score.wins+=1;
    }
    else if(result === 'You Lose!'){
        score.Losses+=1;
    }
    else if (result ==='Tie'){
        score.Tie+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.a2').innerHTML=`You 
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        computer`;
    document.querySelector('.a1').innerHTML = `${result}`;
}

function updateScoreElement(){
  document.querySelector('.a3').innerHTML = `win:${score.wins}, Lose:${score.Losses}, Tie:${score.Tie}`;
}


function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove = 'paper';
    }
    else if (randomNumber>=2/3 && randomNumber<1){
        computerMove = 'scissors';
    }

    return computerMove;
}