import selectionSort from './Selection'
import bubbleSort from './Bubble'
import insertionSort from './Insertion'

interface TSortingMethods {
    Selection: any,
    Bubble: any,
    Insertion: any
}

const combined: TSortingMethods = {
    Selection: selectionSort,
    Bubble: bubbleSort,
    Insertion: insertionSort
}

export default combined