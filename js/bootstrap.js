const mainState = State()
const evaluator = Evaluator(mainState)

const generateFirstInitialState = (stateInitial) => {
    const newState = State();
    
    let arr = Helper.shuffle(stateInitial.split(" "))
    newState.setInitial(arr.join(' '))

    return newState.State.initial
}

let stateInitial = generateFirstInitialState(mainState.State.initial)
// mainState.State.initial = stateInitial

mainState.State.initial = '1 2 0 4 5 3 7 8 6'
// mainState.State.initial = '1 2 3 4 5 6 7 8 0'


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

    }

    alert("Resolução do problema !!")
}



