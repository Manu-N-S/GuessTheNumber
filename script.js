'use strict';

let randomNum = Math.trunc(Math.random()*20) +1 ;
let score = 10;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.again').addEventListener('click',function()
{
    randomNum = Math.trunc(Math.random()*20) +1 ;
    score = 10;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent='Start Guessing....🤔';
    document.querySelector('.guess').value = '';

})
document.querySelector('.check').addEventListener('click', 
function()
{
    const inNum = Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = inNum;
    if(!inNum)
    {
        document.querySelector('.message').textContent='🥲No input';
    }
    else if(inNum===randomNum)
    {
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.message').textContent = 'Correct !🙂';
        if(score>highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(inNum!==randomNum)
    {
        if(score>1)
        {
            if(inNum>randomNum)
            {
                document.querySelector('.message').textContent = '😬HIGH';
                score=score-1;
                document.querySelector('.score').textContent = score;
            }
            else if(inNum<randomNum)
            {
                document.querySelector('.message').textContent = '😬LOW';
                score=score-1;
                document.querySelector('.score').textContent = score;
            }
        }
        else
        {
            document.querySelector('.message').textContent = '😵GAME OVER';
            document.querySelector('.score').textContent = 0;
        }

    }
    
})

