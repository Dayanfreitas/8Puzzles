const Evaluator = (State) => {
    
    const isEquals = () => {
        return State.State.end == State.State.initial
    }

    const calculateDistance = (indexStateCurrent, indexStateEnd) => {
        let arr = []
        // console.log(`Posição inicial ${indexStateCurrent}`)
        // console.log(`Posição final ${indexStateEnd}`)
        
        let variation = indexStateEnd - indexStateCurrent

        
        // console.log("D = FINAL - INICAL ")
        console.log(`${indexStateEnd} - ${indexStateCurrent} = ${variation}`)
        
        if (variation == 0) {
            console.log("MOVIMETO(S):" + variation)
            return variation;
        }
        
        // let isCornerLeft = ((indexStateCurrent + 1) % State.State.nPuzzleSize) == 1 ? true : false
        // let isCornerRight = ((indexStateCurrent + 1) % State.State.nPuzzleSize) == 0 ? true : false
        
        // // console.log('isCornerLeft', isCornerLeft)
        // // console.log('isCornerRight', isCornerRight)

        // // if (isCornerLeft) {
        // //     console.log("MOVIMETO(S):" + 1) 
        // // }
        
        // // if (isCornerRight) {
        // //     console.log("MOVIMETO(S):" + 1) 
        // // }
        
        // if (isCornerRight) {
        //     console.log("MOVIMETO(S):" + 3) 
        //     return
        // }
        
        // if (isCornerLeft) {
        //     console.log("MOVIMETO(S):" + 3) 
        //     return
        // }
        
        // if (!isCornerLeft && !isCornerRight) {

        // }

        // if (variation >= 3 || variation <= -3) {
        //     console.log("MOVIMETO(S):" + 1) 
        //     return 1 + 1;
        // }
        
        // // debugger
        // console.log("MOVIMETO(S):" + Helper.positivize(variation)) 
        // // console.log()
        // return Helper.positivize(variation) + 1
    }   

    //TODO: SOMA DISTANCIAS DOS PONTOS
    const m = (state) => {
        let arrCurrentState = state.split(' ')
        let arrEndState = State.State.end.split(' ')
        
        let sm = 0
        let sh = 0

        arrCurrentState.forEach((e, index) => {
            if (e == 0) {
                return
            }

            let positionA = index
            let positionB = (arrEndState.indexOf(e))
            let nM = 0

            console.log("_______________________________")
            console.log(`ITEM - ${e}`)
            console.log(`A - ${positionA}`)
            console.log(`B - ${positionB}`)
            
            nM = Helper.positivize((positionB - positionA)) / State.State.nPuzzleSize
            
            if (nM % 3 == 0 ) {
                nM = nM / State.State.nPuzzleSize;
            }
            

            if (nM > 0) {
                sh += 1
            }

            // arrSum.push(Math.floor(nM))
            sm += Math.floor(nM)
        })

        // debugger
        console.log(`${sh} + ${sm} = ${sh+sm}`)
        return sh + sm;
    }
    
    //TODO: QUNTAAS PEÇAS FORA DO LUGAR
    const h = (state) => {
        let movementWeight = 0

        let arrCurrentState = state.split(' ')
        let arrEndState = State.State.end.split(' ')

        arrCurrentState.forEach((el, index) => {
            if (el == 0) return;
            const indexStateCurrent = index
            const indexStateEnd = arrEndState.indexOf(el)

            console.log(`Elemento ${el}`)            
            movementWeight += calculateDistance(indexStateCurrent, indexStateEnd)

        })

        return movementWeight
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
    
        
        debugger

        const arrBestMovimente = jogadas.sort((a, b) => a.weight - b.weight ).filter(e => e.state != State.State.no)

        let bestMovimente = arrBestMovimente[0]

        State.State.no = State.State.initial
        State.State.lastMove = bestMovimente

        return bestMovimente

    } 

    const calculate = (state) => {
        return calcMove(state)
        // return h(state);

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
                        // numbersOfMovements += movements;
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

    return {isEquals, betterSearch}
}