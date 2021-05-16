import React from 'react'
import { SortStore, TDataBlock } from '../mobx/Store'
import { sleep } from './uiSync'

async function selectionSort(store: SortStore) {
    let min;
    store.setActiveLines(1, 1)
    await sleep(store.speed)
    for(let i = 0; i < store.data.length - 1; i++) {
        store.setActiveLines(2, 2)
        await sleep(store.speed)
        min = i;
        store.setActiveLines(3,3)
        store.selectDataBlock(i, 'primary')
        await sleep(store.speed)
        for(let j = i + 1; j < store.data.length; j++) {
            store.setActiveLines(4,4)
            store.selectDataBlock(j, 'gray')
            await sleep(store.speed)
            store.setActiveLines(5,5)
            await sleep(store.speed)
            if(store.data[j].value < store.data[min].value) {
                store.setActiveLines(6,6)
                if(min != i) store.selectDataBlock(min, 'dark')
                min = j
                store.selectDataBlock(min, 'tertiary')
                await sleep(store.speed)
            }
            store.setActiveLines(7, 7)
            await sleep(store.speed)
            store.setActiveLines(8, 8)
            await sleep(store.speed)
            if(min != j) store.selectDataBlock(j, 'dark')
        }
        store.setActiveLines(9,9)
        await sleep(store.speed)
        if(min !== i) {
            store.setActiveLines(10, 10)
            store.swapDataBlock(i, min)
            await sleep(store.speed)
            store.selectDataBlock(i, 'dark')
            store.selectDataBlock(min, 'dark')
        }
        store.setActiveLines(11, 11)
        await sleep(store.speed)
        store.setActiveLines(12, 12)
        await sleep(store.speed)
        store.selectDataBlock(i, 'dark')
        store.selectDataBlock(min, 'dark')
        store.selectDataBlock(i, 'secondary')
    }
    store.selectDataBlock(store.data.length - 1, 'secondary')
    store.setActiveLines(13, 13)
    await sleep(store.speed)
    store.setActiveLines(-1, -1)
    await sleep(store.speed)
}

export default selectionSort
