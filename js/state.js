const State = ({state}) => {

    const State = state;

    // const State = {
    //     initial: "1 2 3 4 5 6 7 8 0",
    //     end: "1 2 3 4 5 6 7 8 0",
    //     last: '',
    //     nPuzzleSize: 3,
    // }
    
    const possibleState = (possibleMove) => {
        return {
            up: possibleMove.up ? move(possibleMove.up) : State.initial,
            down: possibleMove.down ? move(possibleMove.down) : State.initial,
            left: possibleMove.left ? move(possibleMove.left) : State.initial,
            right: possibleMove.right ? move(possibleMove.right) : State.initial,
        }

    }
    
    const getPositonBlock = (index) => {
        const arr = State.initial.split(' ')
        let size = arr.length

        let positionBlock = Math.floor((arr.indexOf(index)/size) * 10)
        return positionBlock
    }

    const possibleMoves = () => {
        const nPuzzleSize = 3

        const arr = State.initial.split(' ')
        let size = arr.length

        let positionBlockEmpty = Math.floor((arr.indexOf('0')/size) * 10)
        
        const isConnerRight = (positionBlockEmpty + 1) % nPuzzleSize == 0;
        const isConnerLeft = (positionBlockEmpty + 1) % nPuzzleSize == 1;

        // console.log('isConnerRight', isConnerRight)
        // console.log('isConnerLeft', isConnerLeft)

        
        let up = arr[positionBlockEmpty - nPuzzleSize]
        let down = arr[positionBlockEmpty + nPuzzleSize]
        let left = isConnerLeft ? undefined : arr[positionBlockEmpty-1]
        let right = isConnerRight ? undefined : arr[positionBlockEmpty+1]

        // console.log('UP', up)
        // console.log('DOWN', down)
        // console.log('LEFT', left)
        // console.log('Right', right)

        return {
            up, down, left, right
        }
    }

    const move = (index, simule=true) => {
        const arr = State.initial.split(' ')
        
        const positionBlockT = getPositonBlock(index)
        const positionBlockEmpty = getPositonBlock('0')

        Helper.swap(arr, positionBlockT, positionBlockEmpty)
        if (simule)
            return arr.join(' ')
        else
            State.initial = arr.join(' ')
    }
    
    

    const getStateInPuzzleSize = () => {
        let arr = State.initial.split(' ')
        
        
        let arrReturn = []

        let arrTemp = [] // SizeMaximo State.nPuzzleSize
        for (i = 0; i < State.nPuzzleSize * State.nPuzzleSize; i++) {
            if (i !=0 && i % State.nPuzzleSize == 0) {
                arrReturn.push(arrTemp)
                arrTemp = []
            }

            arrTemp.push(arr[i])  
        }
        arrReturn.push(arrTemp)
        
        return arrReturn
    }

    const setInitial = (state) => {
        debugger
        State.initial = state
    }

    const getPositionEndOfIndex = (index) => {
        for (let line = 0; line < State.nPuzzleSize; line++) {
            let column = State.matrizEnd[line].indexOf(index);
            if (column >= 0) {
                return  {line, column}
            }
        }
    }

    return {State, setInitial, possibleMoves, possibleState, getStateInPuzzleSize, move, getPositionEndOfIndex}
}
