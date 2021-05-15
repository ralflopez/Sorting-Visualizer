import selectionSort from './Selection'

interface TSortingMethods {
    Selection: any
}

const combined: TSortingMethods = {
    Selection: selectionSort
}

export default combined