const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const humanPick = document.querySelector('#human-pick')
const machinePick = document.querySelector('#machine-pick')

let humanScoreNumber = 0
let machineScoreNumber = 0

const emojis = {
    rock: '\u{1F44A}',
    paper: '\u{1F590}\uFE0F',
    scissors: '\u270C\uFE0F'
}

const playHuman = (humanChoice) => {
    playGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const showPick = (element, choice) => {
    element.textContent = emojis[choice]
    element.classList.remove('filled')
    void element.offsetWidth // reinicia a animação
    element.classList.add('filled')
}

const showResult = (text, type) => {
    result.textContent = text
    result.className = 'result ' + type
}

const playGame = (human, machine) => {
    showPick(humanPick, human)
    showPick(machinePick, machine)

    if (human === machine) {
        showResult('Empate!', 'draw')
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.textContent = humanScoreNumber
        showResult('Você ganhou!', 'win')
    } else {
        machineScoreNumber++
        machineScore.textContent = machineScoreNumber
        showResult('Você perdeu!', 'lose')
    }
}
