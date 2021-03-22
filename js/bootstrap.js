const audio = new Audio('../audio/Vapo-1.m4a')
const puzzle = Puzzle(3)
const mainState = State({state : puzzle.makePuzzle()})
console.log('puzzle', mainState )
const evaluator = Evaluator(mainState)

// mainState.State.initial = '0 2 4 8 5 3 6 7 1'

console.log(evaluator.calcMove(mainState.State.initial))

function clickMoveController (key) {
    const arr = Object.values(mainState.possibleMoves())
    if (arr.indexOf(key) >= 0) {
        audio.play()
        mainState.move(key, false)
    }

}

function move (key) {    
    audio.play()
    mainState.State.initial = mainState.possibleState(mainState.possibleMoves())[key]
}



function solve () { 

    while (mainState.State.initial != mainState.State.end) {

        let best = evaluator.betterSearch()
        mainState.State.initial = best.state
        evaluator.g++


        debugger
        mainState.State.initial = best.state

    }

    alert("Resolução do problema !!")
}



