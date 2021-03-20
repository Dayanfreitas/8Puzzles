const puzzle = Puzzle(3)
console.log(puzzle.makePuzzle())

const mainState = State({state : puzzle.makePuzzle()})
const evaluator = Evaluator(mainState)

// const generateFirstInitialState = (stateInitial) => {
//     const newState = State();
    
//     let arr = Helper.shuffle(stateInitial.split(" "))
//     newState.setInitial(arr.join(' '))

//     return newState.State.initial
// }

// let stateInitial = generateFirstInitialState(mainState.State.initial)
// mainState.State.initial = stateInitial
// mainState.State.last = stateInitial

mainState.State.initial = '0 2 4 8 5 3 6 7 1'
// mainState.State.initial = '1 2 3 4 5 6 7 8 0'
// mainState.getStateInPuzzleSize()

function clickMoveController (key) {
    const arr = Object.values(mainState.possibleMoves())
    if (arr.indexOf(key) >= 0) {
        mainState.move(key, false)
    }
}

function move (key) {    
    mainState.State.initial = mainState.possibleState(mainState.possibleMoves())[key]
}



function solve () { 

    while (mainState.State.initial != mainState.State.end) {

        let best = evaluator.betterSearch()
        mainState.State.initial = best.state
        
        debugger
        mainState.State.initial = best.state

    }

    alert("Resolução do problema !!")
}



