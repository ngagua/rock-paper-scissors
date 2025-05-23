import { Choices, Results } from '../../types/types.ts'

const getWinner = (player: string, computer: string): Results => {
    if (player === computer) return Results.DRAW

    if (
        (player === Choices.ROCK && computer === Choices.SCISSORS) ||
        (player === Choices.PAPER && computer === Choices.ROCK) ||
        (player === Choices.SCISSORS && computer === Choices.PAPER)
    ) {
        return Results.PLAYER
    }

    return Results.COMPUTER
}

const getRandomChoice = (choices: string[]): string => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

export { getWinner, getRandomChoice }
