import { action, observable, makeAutoObservable } from 'mobx'
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

    language: string = 'Javascript'
    strategy: string = 'Selection'
    speed: number = 0

    activeTask: string = ''
    activeLines: number[] = [-1, -1]

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

    // Speed
    setSpeed(speed: number) {
        this.speed = speed
    }

    // Active Task
    setActiveTask(description: string) {
        this.activeTask = description
    }

    // Active Code
    setActiveCode(first: number, last: number) {
        this.activeLines = [first, last]
    }

}

export const myStore = new SortStore()