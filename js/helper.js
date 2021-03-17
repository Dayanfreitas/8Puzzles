const Helper = function () {

    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     * 
     * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     */
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function swap (arr, ...param) {
        var b = arr[param[0]];
        arr[param[0]] = arr[param[1]];
        arr[param[1]] = b;
        
        return arr
        
    }
    
    function positivize (number) {
        if (number < 0)
            return number * -1
        return number
    }

    return {shuffle, swap, positivize}
}()