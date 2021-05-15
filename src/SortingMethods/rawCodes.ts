export const Selection: string = `
    function selectionSort(arr) {
        let min;
        for(let i = 0; i < arr.length - 1; i++) {
            min = i;
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[min]) {
                    min = j
                }
            }
            if(min !== i) {
                ([arr[i], arr[min]] = [arr[min], arr[i]])
            }
        }
    }
`

export const Bubble: string = `
    function bubbleSortColt(arr) {
        let noSwaps = true;
        for(let i = arr.length; i > 0; i--) {
            noSwaps = true;
            for(let j = 0; j < i - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    noSwaps = false;
                }
            }
            if(noSwaps) break;
        }
    }
`