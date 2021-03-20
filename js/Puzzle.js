const Puzzle = (n) => {
    const nPuzzleSize = n
    
    const makePuzzle = () => {
        let end = []

        const size = (nPuzzleSize * nPuzzleSize)
        for (i = 1; i <= size; i++) {
            if (i == size) {
                end.push(0)    
            }else {
                end.push(i)
            }
        }
        
        
        let initial = Helper.shuffle(end).join(' ');
        let matrizEnd = Helper.separarArray(end, nPuzzleSize); 

        end = end.join(' ')

        return {
            initial,
            end,
            matrizEnd,
            nPuzzleSize
        }
    }

    return {makePuzzle}
}