import selectionSort from './Selection'
import bubbleSort from './Bubble'

interface TSortingMethods {
    Selection: any,
    Bubble: any
}

const combined: TSortingMethods = {
    Selection: selectionSort,
    Bubble: bubbleSort
}

export default combined