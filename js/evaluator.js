const Evaluator = (State) => {
    const isEquals = () => {
        return State.State.end == State.State.initial
    }

    const betterSearch = () => {
        let possiveisJogadas = State.possibleState(State.possibleMoves())
        
        
        Object.keys(possiveisJogadas).forEach(e => {
            if (possiveisJogadas[e] == State.State.initial) {
                delete possiveisJogadas[e]
            }
        })

        console.log('possiveisJogadas', possiveisJogadas)

        let jogadas = Object.keys(possiveisJogadas).map((e) => {
            
            console.log("\n")

            return {
                key: e,
                state: possiveisJogadas[e],
                weight: calculate(possiveisJogadas[e])
            }
        })
    
        
        // debugger
        const arrBestMovimente = jogadas.sort((a, b) => a.weight - b.weight).filter((e) => e.state != State.State.no)
        let bestMovimente = arrBestMovimente[0]
        
        State.State.no = State.State.initial

        
        // return bestMovimente

        return new Promise((Resolve) => {
            setTimeout(() => {
                Resolve(bestMovimente)
            }, 500);
        }) 

    } 

    const calculate = (state) => {
        return calcMove(state)
        // return h(state);
        // return getMinorNumbers(state);

    }

    const calculateVariation = (positionA, positionB) => {
        const DeltaLine = Helper.positivize((positionA.line - positionB.line))
        const DeltaColumn = Helper.positivize((positionA.column - positionB.column)) 
        
        return DeltaLine + DeltaColumn;
    }

    const calcMove = (state) => {
        let numbersOfMovements = 0
        let partsOutOfPlace = 0

        let currentStateArr = Helper.separarArray(state.split(' '), State.State.nPuzzleSize)
        
        for (let line = 0; line < currentStateArr.length; line++) {
            
            console.log(line ,"Line:" , currentStateArr[line])    
            for (let colunm = 0; colunm < currentStateArr[line].length; colunm++) {
                // console.log(colunm ,"colunm:" , currentStateArr[line][colunm])
                let indexCurrent = currentStateArr[line][colunm] * 1
                
                if (indexCurrent != 0) {
                    const positionCurrent = {line: line, column: colunm}
                    const positionEnd = State.getPositionEndOfIndex(indexCurrent)
                    const movements = calculateVariation(positionCurrent, positionEnd)

                    if (movements > 0) {
                        numbersOfMovements += movements;
                        partsOutOfPlace++;
                    }
                
                    // console.log(`${indexCurrent} - {${positionCurrent.line}, ${positionCurrent.column} } -> {${positionEnd.line} , ${positionEnd.column}} =  ${calculateVariation(positionCurrent, positionEnd)}`)
                }

            }
        }

        console.log('numbersOfMovements', numbersOfMovements)
        console.log('numbersOfMovements', partsOutOfPlace)
        return numbersOfMovements + partsOutOfPlace 
    }

    const getMinorNumbers = (s) => {
        let count = 0
        const state =  s.split(' ')

        state.forEach((e, index) => {
            
            if (e == 0) {
                return
            }
            
            // console.log('E', e)
            let nArr = state.filter((el, iel) => el < e && iel > index)
            // console.log('nArr', nArr)
            // console.log('NUMEROS MENORES', nArr.length)
            count += nArr.length

            // console.log('INDEX', index)
            // console.log('\n')
        })

        return count
    }

    return {isEquals, betterSearch, calcMove, getMinorNumbers}
}