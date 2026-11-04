const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

    let humanScoreNumber = 0
    let machineScoreNumber = 0



const playHuman = (humanChoice) => {

    playGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Empate!'
    } else if (

        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu!'
    }





}