const Evaluator = (State) => {
    // console.log(State)
    
    const isEquals = () => {
        return State.State.end == State.State.initial
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
    // const h = (state) => {

    //     debugger
    // }
    
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
        
        return jogadas.sort((a, b) => a.weight - b.weight )[0]
    } 

    const calculate = (state) => {
        return m(state);
    }

    return {isEquals, betterSearch}
}