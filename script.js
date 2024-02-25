// Generating random number-----------------------------------------------------------------------------
function generateRandom()
{
    return Math.floor(Math.random() * 6) + 1;
}
// -----------------------------------------------------------------------------------------------------



// Getting the active player----------------------------------------------------------------------------
function getActivePlayer()
{
    if(document.querySelector('.p1').classList.contains('hidden'))
    {
        return document.querySelector('.p2');
    }
    else
    {
        return document.querySelector('.p1');
    }
}
// ----------------------------------------------------------------------------------------------------



// Getting the inactive player-------------------------------------------------------------------------
function getInactivePlayer()
{
    if(document.querySelector('.p1').classList.contains('hidden'))
    {
        return document.querySelector('.p1');
    }
    else
    {
        return document.querySelector('.p2');
    }
}
// ----------------------------------------------------------------------------------------------------



// Variables-------------------------------------------------------------------------------------------
let currentScore = 0;
let mainScoreP1 = 0;
let mainScoreP2 = 0;
// ----------------------------------------------------------------------------------------------------



// Changing the active player and inactive player------------------------------------------------------
function gameShift()
{
    currentScore = 0;
    getActivePlayer().childNodes[5].childNodes[3].textContent = '0';
    let active = getActivePlayer();
    let inactive = getInactivePlayer();
    inactive.classList.remove('hidden');
    active.classList.add('hidden');
}
// ----------------------------------------------------------------------------------------------------



// Adding points to the respective player's main point-------------------------------------------------
function hold()
{
    if(getActivePlayer().childNodes[1].textContent === 'PLAYER 1')
    {
        mainScoreP1 += currentScore;
        getActivePlayer().childNodes[3].textContent = mainScoreP1;
    }
    else if(getActivePlayer().childNodes[1].textContent === 'PLAYER 2')
    {
        mainScoreP2 += currentScore;
        getActivePlayer().childNodes[3].textContent = mainScoreP2;
    }
    gameShift();
}
// ----------------------------------------------------------------------------------------------------



// Changing the dice face according to the random number generated-------------------------------------
function changeDiceFace(random) {
    document.querySelector('.middle').style.boxShadow = '1px 1px 10px -2px #1e1e1e'
    if(random === 1)
    {
        document.querySelector('.middle').style.backgroundImage = "url('Assets/dice-six-faces-one.svg')";
    }
    else if(random === 2)
    {
        document.querySelector('.middle').style.backgroundImage = "url('Assets/dice-six-faces-two.svg')";
    }
    else if(random === 3)
    {
        document.querySelector('.middle').style.backgroundImage = "url('Assets/dice-six-faces-three.svg')";
    }
    else if(random === 4)
    {
        document.querySelector('.middle').style.backgroundImage = "url('Assets/dice-six-faces-four.svg')";
    }
    else if(random === 5)
    {
        document.querySelector('.middle').style.backgroundImage = "url('Assets/dice-six-faces-five.svg')";
    }
    else if(random === 6)
    {
        document.querySelector('.middle').style.backgroundImage = "url('Assets/dice-six-faces-six.svg')";
    }
}
// -----------------------------------------------------------------------------------------------------



// Rolling the dice randomly----------------------------------------------------------------------------
function rollDice() {
    let random = generateRandom();
    changeDiceFace(random);
    if(random !== 1)
    {
        currentScore += random;
        getActivePlayer().childNodes[5].childNodes[3].textContent = currentScore;
    }
    else
    {
        currentScore = 0;
        gameShift();
    }
}
// ------------------------------------------------------------------------------------------------------



// Initializing all the variables and score--------------------------------------------------------------
function newGame() {
    mainScoreP1 = 0;
    mainScoreP2 = 0;
    document.querySelector('.score-p1').textContent = '0';
    document.querySelector('.score-p2').textContent = '0';
    document.querySelector('.current-score-p1').textContent = '0';
    document.querySelector('.current-score-p2').textContent = '0';
    document.querySelector('.middle').style.backgroundImage = null;
    document.querySelector('.middle').style.boxShadow = 'none';
    gameShift();
}
// ----------------------------------------------------------------------------------------------------



// activating Walkthrough------------------------------------------------------------------------------
function openWalkthrough() {
    document.querySelector('.walkthrough').style.visibility = 'visible';
    document.querySelector('.blur').style.visibility = 'visible';
}
// ----------------------------------------------------------------------------------------------------



// closing Walkthrough------------------------------------------------------------------------------
function closeWalkthrough() {
    document.querySelector('.walkthrough').style.visibility = 'hidden';
    document.querySelector('.blur').style.visibility = 'hidden';
}
// ----------------------------------------------------------------------------------------------------


// Main function--------------------------------------------------------------------------------------
document.querySelector('.button-roll_dice').addEventListener('click', rollDice);
document.querySelector('.button-hold').addEventListener('click', hold);
document.querySelector('.button-new_game').addEventListener('click', newGame);
document.querySelector('.button-walkthrough').addEventListener('click', openWalkthrough);
document.querySelector('.close-button').addEventListener('click', closeWalkthrough);
// ----------------------------------------------------------------------------------------------------