

const Evaluator = (State) => {
    console.log(State)
    
    const isEquals = () => {
        return State.State.end == State.State.initial
    }

    
    //TODO: SOMA DISTANCIAS DOS PONTOS
    const m = (state) => {
        let arrCurrentState = state.split(' ')
        let arrEndState = State.State.end.split(' ')
        
        
        console.log('State', arrCurrentState)
        console.log('arrEndState', arrEndState)
        console.log('length::', arrEndState.length)

        // console.log(arrCurrentState[0])
        // console.log(arrEndState.indexOf(arrCurrentState[0]))
        
        // console.log(arrCurrentState[1])
        // console.log(arrEndState.indexOf(arrCurrentState[0]))


        // console.log(arrCurrentState[0])
        arrCurrentState.forEach((e, index) => {
            // console.log('index ->', index)
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
            
            // if (positionB > positionA) {
            //     nM = (positionB - positionA)
            //     // console.log(`A - B = ${ / State.State.nPuzzleSize }`)
            // }

            // if (positionB < positionA) {
                
            //     // console.log(`A - B = ${  / State.State.nPuzzleSize }`)
            // }
            nM = (positionB - positionA )

            console.log("MOVIMENTOS " + nM)
            console.log("MOVIMENTOS / 3 :" + nM / 3)
            console.log("MOVIMENTOS % 3 :" + nM % 3)
            

            // console.log(`A = ${e}`)
            // console.log(`B = ${e}`)

            // console.log(`Item ${index} -  E ${e} posição :-> ${posicao}`)
            // console.log(`Distância:`)

            // console.log(`${nMovimento / State.State.nPuzzleSize}`)
            

            // console.log(arrEndState[e-1])
        })
        // debugger

    }
    
    //TODO: QUNTAAS PEÇAS FORA DO LUGAR
    const h = (state) => {

        debugger
    }
    
    const betterSearch = () => {
        let possiveisJogadas = State.possibleState(State.possibleMoves())
        console.log(possiveisJogadas)
        
        Object.keys(possiveisJogadas).forEach(e => {
            if (possiveisJogadas[e] == State.State.initial) {
                delete possiveisJogadas[e]
            }
        })

        let jogadas = Object.keys(possiveisJogadas).map((e) => {
            return {
                key: e,
                state: possiveisJogadas[e],
                weight: calculate(possiveisJogadas[e])
            }
        })

        
        return 
    } 

    const calculate = (state) => {
        return m(state) + h(state)
    }

    return {isEquals, betterSearch}
}