import { SortStore } from "../mobx/Store"
import { setBreakpoint } from './uiSync'
import { nanoid } from 'nanoid'

async function insertionSort(store: SortStore) {
    for(let i = 1; i < 5; i++) {
        await setBreakpoint(store, 1)
        store.selectDataBlock(i, 'primary')
        const currentVal = store.data[i];
        await setBreakpoint(store, 2)
        let j = i - 1
        store.selectDataBlock(j, 'tertiary')
        await setBreakpoint(store, 3)
        while(j >= 0 && store.data[j].value > currentVal.value) {
            store.selectDataBlock(j, 'tertiary')
            store.assignDataBlock(j+1, {
                ...store.data[j],
                color: 'dark',
                id: nanoid()
            })
            await setBreakpoint(store, 4)
            j--
            await setBreakpoint(store, 5)
        }
        store.selectDataBlock(j+1, 'dark')
        await setBreakpoint(store, 6)
        store.assignDataBlock(j+1, {
            ...currentVal
        })
        await setBreakpoint(store, 7)
        store.selectDataBlock(j+1, 'dark')
    }
    await setBreakpoint(store, 8)
    store.setActiveLines(-1, -1)
    store.data.forEach((_, index) => {
        store.selectDataBlock(index, 'secondary')
    })
}

export default insertionSort