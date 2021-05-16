import { makeAutoObservable } from 'mobx'
import { nanoid } from 'nanoid'
import { languageSupport, strategySupport } from './supported'

export interface TDataBlock {
    value: number,
    color: string,
    height: number | (() => number),
    id: string
}

export class SortStore {
    data: TDataBlock[] = []
    maxDataValue: number = 0
    copy: TDataBlock[] = []

    language: string = 'Javascript'
    strategy: string = 'Insertion'
    speed: number = 300
    
    activeTask: string = ''
    activeLines: number[] = [-1, -1]
    isExecuting: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    // DATA
    addData(value: number, color: string = 'dark') {
        if(!this.data.length) this.maxDataValue = value

        const newData: TDataBlock = {
            id: nanoid(),
            value,
            color,
            height: this.assignHeight(value),
        }

        this.data.push(newData);
    }

    removeData(id: string) {
        this.data = this.data.filter((item: TDataBlock) => item.id !== id)
    }

    swapDataBlock(index1: number, index2: number) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
    }
    
    assignDataBlock(index: number, dataBlock: TDataBlock) {
        this.data[index] = dataBlock
    }

    assignHeight(value: number) {
        if(value > this.maxDataValue) {
            this.maxDataValue = value
            this.evaluateDataBlocks()
            return 100
        }

        return value * (100/this.maxDataValue)
    }
    
    evaluateDataBlocks() {
        this.data = this.data.map((item: TDataBlock) => ({...item, height: item.value * (100/this.maxDataValue)}))
    }

    revertDataBlocks() {
        if(!this.copy.length) return

        this.data = [...this.copy]
        this.copy = []
    }

    copyDataBlocks() {
        this.copy = [...this.data]
    }

    // Langage
    setLanguage(language: string) {
        const supported = languageSupport.findIndex((lang: string) => lang === language)
        if(supported >= 0) {
            this.language = language
        }
    }

    // Strategy
    setStrategy(strategy: string) {
        const supported = strategySupport.findIndex((strat: string) => strat === strategy)
        if(supported >= 0) {
            this.strategy = strategy
        }
    }

    // Execution
    setIsExecuting(state: boolean) {
        this.isExecuting = state
    }
    
    // UI

    // Select
    selectDataBlock(index: number, color: string) {
        this.data[index].color = color
    }

    // Speed
    setSpeed(speed: number) {
        this.speed = speed
    }

    // Active Task
    setActiveTask(description: string) {
        this.activeTask = description
    }

    // Active Code
    setActiveLines(first: number, last: number) {
        this.activeLines = [first, last]
    }

}

export const myStore = new SortStore()